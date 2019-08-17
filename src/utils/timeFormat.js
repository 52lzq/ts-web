import moment from 'moment';

const timeFormat = {
  /**
   * 将 unix 时间戳转换为 moment 格式
   *
   * @description 一般的作用是用于 antd 组件中的日期组件 defaultValue
   * @param {Date} timestamp unix时间戳
   * @returns {Date} 格式化时间
   *
   * 时间戳 => moment 时间
   */
  unixToMoment(timestamp) {
    return moment.unix(timestamp);
  },

  /**
   * 将unix时间戳转换为人类可识别的日期格式
   *
   * @description 展示用
   * @param {Date} timestamp unix时间戳
   * @returns {Date} 格式化时间
   *
   * 1507862359 => 2017-10-13 10:39:19
   */
  unixToDate(timestamp) {
    return moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');
  },

  /**
   * 将 moment 格式的时间转换为 Unix 时间戳
   *
   * @description 发送给后端用
   * @param {moment} momentDate
   * @returns {Date} Unix 时间戳
   *
   * moment 时间 => 时间戳
   */
  dateToUnix(momentDate) {
    return momentDate.format('X');
  },

  getTimeDistance(type) {
    const start = moment();
    start.hours(0);
    start.minutes(0);
    start.seconds(0);

    const end = moment();
    end.hours(23);
    end.minutes(59);
    end.seconds(59);

    // 本周
    if (type === 'week') {
      const weekOfday = end.format('E');
      start.subtract(weekOfday - 1, 'days');
      end.add(7 - weekOfday, 'days');
    }

    // 近一个礼拜
    if (type === 'lastWeek') {
      start.subtract(6, 'days');
    }

    // 上个月
    if (type === 'lastMonth') {
      const lastMonthMoment = end.subtract(1, 'months');
      const year = lastMonthMoment.year();
      const month = lastMonthMoment.month();

      start.set({ year, month, date: 1 });
      end.set({ year, month, date: end.daysInMonth() });
    }

    // 本月
    if (type === 'month') {
      start.set('date', 1);
      end.set('date', end.daysInMonth());
    }

    // 近三个月
    if (type === 'nearlyMonths') {
      start.subtract(90, 'days');
    }

    return [start, end];
  }
};

export default timeFormat;

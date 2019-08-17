import numeral from 'numeral';

/**
 * 克转千克
 *
 * @param {number} g 克
 * @returns kg
 *
 * 1000 => 1
 */
export function g2kg(g) {
  return numeral(g)
    .divide(1000)
    .value();
}

/**
 * 千克转克
 *
 * @param {number} kg 千克
 * @returns g
 *
 * 1 => 1000
 */
export function kg2g(kg) {
  return numeral(kg)
    .multiply(1000)
    .value();
}

/**
 * 分转元
 *
 * @param {number} cent 分
 * @returns 元
 *
 * 100 => 1
 */
export function cent2yuan(cent) {
  return (
    cent &&
    numeral(
      numeral(cent)
        .divide(100)
        .value()
    ).format('0.00')
  );
}

/**
 * 元转分
 *
 * @param {number} yuan 元
 * @returns 分
 *
 * 1 => 100
 */
export function yuan2cent(yuan) {
  return numeral(yuan)
    .multiply(100)
    .value();
}

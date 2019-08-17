import { fromJS } from 'immutable';
import { message } from 'antd';
import storage from './storage';
import { store } from '../redux/index';
import { AppActions } from '../redux/actions';
import fetch from 'isomorphic-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 501) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
  const user = storage.getItem('user');
  const token = user && JSON.parse(user).token;
  options.headers = {
    ...options.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      if (
        response.error_code === 20000 ||
        response.error_code === 20001 ||
        response.error_code === 20002
      ) {
        message.error('信息缺失，请重新登录');
        return store.dispatch(AppActions.logout());
      }
      if (response.success) {
        return fromJS(response);
      } else {
        const error = new Error(response.error_message);
        error.response = response;
        throw error;
      }
    })
    .catch(error => {
      message.error(error.message);
      return fromJS({
        success: false,
        error_message: error.message
      });
    });
}

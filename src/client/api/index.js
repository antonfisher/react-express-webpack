const defaultParams = {
  mode: 'none'
};

let endpoint = '';
function setEndpoint(value) {
  endpoint = value;
}

/**
 * @param {String} url
 * @param {String} message
 * @param {Number} statusCode
 * @constructor
 */
function ApiError(url, message, statusCode) {
  this.url = url;
  this.message = message;
  this.statusCode = statusCode || '';
  this.title = 'API Error';
  this.stack = (new Error()).stack;
}

/**
 * @param {String} url
 * @param {Error} error
 * @param {Number} statusCode
 * @throws {ApiError}
 */
function throwApiError(url, error, statusCode) {
  throw new ApiError(url, error, statusCode);
}

/**
 * @param {String} url
 * @param {Object} params
 * @returns {Promise.<T>}
 * @private
 */
function _request(url, params) {
  return fetch(url, {...defaultParams, ...params})
    .then((response) => {
      const json = response.json();
      if (json && json.error) {
        return throwApiError(url, json.error, response.status);
      }
      return json;
    })
    .catch((error) => throwApiError(url, error.message));
}

// application api

function getStats() {
  return _request(`${endpoint}/stats`);
}

function addServer(payload) {
  return _request(
    `${endpoint}/servers`,
    {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(payload),
      ...defaultParams
    }
  );
}

export default {
  getStats,
  addServer,
  setEndpoint
};

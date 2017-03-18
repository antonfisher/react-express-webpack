const defaultProps = {
  mode: 'no-cors'
};

let endpoint = '';
function setEndpoint(value) {
  endpoint = value;
}

function checkAPIError(response) {
  return ((response && response.error) ? Promise.reject(new Error(response.error)) : response);
}

function getStats(data) {
  return fetch(`${endpoint}/stats`, {data, ...defaultProps})
    .then(response => response.json())
    .then(checkAPIError);
}

export default {
  getStats,
  setEndpoint
};

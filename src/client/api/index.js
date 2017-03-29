const defaultProps = {
  mode: 'none'
};

let endpoint = '';
function setEndpoint(value) {
  endpoint = value;
}

function checkAPIError(response) {
  return ((response && response.error) ? Promise.reject(new Error(response.error)) : response);
}

function getStats() {
  return fetch(`${endpoint}/stats`, {...defaultProps})
    .then(response => response.json())
    .then(checkAPIError);
}

function addServer(payload) {
  const params = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(payload),
    ...defaultProps
  };

  return fetch(`${endpoint}/servers`, params)
    .then(response => response.json())
    .then(checkAPIError);
}

export default {
  getStats,
  addServer,
  setEndpoint
};

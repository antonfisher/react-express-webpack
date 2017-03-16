const defaultProps = {
  mode: 'no-cors'
};

let endpoint = '';
function setEndpoint(value) {
  endpoint = value;
}

function getStats(data) {
  return fetch(`${endpoint}/stats`, {data, ...defaultProps}).then(response => response.json());
}

export default {
  getStats,
  setEndpoint
};

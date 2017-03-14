let endpoint = '';

let defaultProps = {
  mode: 'no-cors'
};

function getStats(data) {
  console.log('-- getStats', endpoint);
  return fetch(`${endpoint}/stats`, {data, ...defaultProps})
    .then(response => response.json())
    .then(res => {
      console.log('-- res', res);
    });
}

export default {
  getStats,
  setEndpoint(value) {
    endpoint = value;
  }
}

let endpoint = '';

const defaultProps = {
  mode: 'no-cors'
};

function getStats(data) {
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
};

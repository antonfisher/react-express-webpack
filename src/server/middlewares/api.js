// API
module.exports = function setup(app) {
  app.get('/api/stats', (req, res) => {
    setTimeout(() => {
      res.json({
        // error: 'server error message',
        status: 'online',
        servers: [
          {id: 1, name: 'a'},
          {id: 2, name: 'b'},
          {id: 3, name: 'c'},
          {id: 4, name: 'd'},
          {id: 5, name: 'e'},
          {id: 6, name: 'f'},
          {id: 7, name: 'g'}
        ]
      });
    }, 3000);
  });
};

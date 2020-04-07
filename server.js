const app = require('./app')

const server = (port) => app.listen(port, (err) => {
  if (err) {
    return console.log('server falls')
  } else {
    return console.log(`server is running on ${port}`)
  };
});

server(4000);
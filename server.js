const app = require('./app')
const config = require('config')

const PORT = config.get('PORT') || 4000

const server = (PORT) => app.listen(PORT, (err) => {
  if (err) {
    return console.log('server falls', err)
  } else {
    return console.log(`server is running on ${PORT}`)
  };
});

server(PORT);
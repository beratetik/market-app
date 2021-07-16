const jsonServer  = require('json-server')

const server = jsonServer.create()
var router = jsonServer.router(require('./db.js'))
const middlewares = jsonServer.defaults({ noCors: true, readOnly: true})


require('dotenv').config()
const { MOCK_PORT } = process.env

server.use(middlewares) 
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
server.use(router)
server.use(jsonServer.bodyParser)


server.listen(MOCK_PORT || 3001, () => console.log(`JSON Server is running at port ${MOCK_PORT}`))

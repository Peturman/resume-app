const project = require('../config/project.config')
const server = require('../server/main')
const debug = require('debug')('app:bin:dev-server')
const ip = require('ip')

server.listen(project.server_port)
debug(`Server is now running at http://${ip.address()}:${project.server_port}.`)

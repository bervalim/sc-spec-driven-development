import { FastifyPluginAsync } from 'fastify'
import { layout } from '../views/layout'

const home: FastifyPluginAsync = async (app) => {
  app.get('/', async (_req, reply) => {
    reply.type('text/html')
    return layout('Home', '<h1>Welcome to AgentClinic</h1>')
  })
}

export default home

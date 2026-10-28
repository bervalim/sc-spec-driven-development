import Fastify, { FastifyInstance } from 'fastify'
import health from './routes/health'

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true })
  app.register(health)
  return app
}

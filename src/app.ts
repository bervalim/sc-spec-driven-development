import path from 'path'
import Fastify, { FastifyInstance } from 'fastify'
import fastifyStatic from '@fastify/static'
import health from './routes/health'
import home from './routes/home'

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true })
  app.register(fastifyStatic, { root: path.join(__dirname, '..', 'public') })
  app.register(health)
  app.register(home)
  return app
}

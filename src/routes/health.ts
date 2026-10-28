import { FastifyPluginAsync } from 'fastify'

const health: FastifyPluginAsync = async (app) => {
  app.get(
    '/health',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: { status: { type: 'string' } },
            required: ['status'],
          },
        },
      },
    },
    async () => ({ status: 'ok' }),
  )
}

export default health

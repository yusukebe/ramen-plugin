import { z, createRoute } from '@hono/zod-openapi'

const routeRandom = createRoute({
  method: 'get',
  path: '/random',
  operationId: 'random',
  summary: 'Get a random ramen info',
  responses: {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({
            name: z.string(),
            photos: z.object({
              url: z.string(),
              authorId: z.string()
            })
          })
        }
      }
    }
  }
})

export { routeRandom }

import { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { aiPluginJson } from './ai-plugin'
import { routeRandom } from './routes'

const app = new OpenAPIHono()
app.use('*', cors())

const ramenAPIBaseURL = 'https://ramen-api.dev'
const baseURL = 'http://localhost:8787'

app.openapi(routeRandom, async (c) => {
  const res = await fetch(`${ramenAPIBaseURL}/shops?perPage=1`)
  const data = await res.json<{
    totalCount: number
  }>()
  const totalCount = data.totalCount
  const randomCount = Math.floor(Math.random() * totalCount) + 1
  const resRandom = await fetch(`${ramenAPIBaseURL}/shops?perPage=1&page=${randomCount}`)
  const dataRandom = await resRandom.json<{
    name: string
    photos: {
      url: string
      authorId: string
    }
  }>()
  return c.jsonT(dataRandom)
})

app.get('/.well-known/ai-plugin.json', (c) => {
  return c.json(aiPluginJson(baseURL))
})

app.doc('/openapi.json', {
  openapi: '3.0.1',
  info: {
    title: 'Ramen Plugin',
    description: 'Plug-in that displays ramen images if the user is hungry or talking about ramen',
    version: 'v1'
  },
  servers: [
    {
      url: baseURL
    }
  ]
})

export default app

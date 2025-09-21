import {
  createRequestContext,
  runWithRequestContext,
} from '/var/task/healthcare-landing-prototype/.netlify/dist/run/handlers/request-context.cjs'
import { getTracer } from '/var/task/healthcare-landing-prototype/.netlify/dist/run/handlers/tracer.cjs'

process.chdir('/var/task/healthcare-landing-prototype')

// Set feature flag for regional blobs
process.env.USE_REGIONAL_BLOBS = 'true'

let cachedHandler
export default async function (req, context) {
  const requestContext = createRequestContext(req, context)
  const tracer = getTracer()

  const handlerResponse = await runWithRequestContext(requestContext, () => {
    return tracer.withActiveSpan('Next.js Server Handler', async (span) => {
      span.setAttributes({
        'account.id': context.account.id,
        'deploy.id': context.deploy.id,
        'request.id': context.requestId,
        'site.id': context.site.id,
        'http.method': req.method,
        'http.target': req.url,
        isBackgroundRevalidation: requestContext.isBackgroundRevalidation,
        monorepo: true,
        cwd: '/var/task/healthcare-landing-prototype',
      })
      if (!cachedHandler) {
        const { default: handler } = await import('/var/task/healthcare-landing-prototype/.netlify/dist/run/handlers/server.js')
        cachedHandler = handler
      }
      const response = await cachedHandler(req, context, span, requestContext)
      span.setAttributes({
        'http.status_code': response.status,
      })
      return response
    })
  })

  if (requestContext.serverTiming) {
    handlerResponse.headers.set('server-timing', requestContext.serverTiming)
  }

  return handlerResponse
}

export const config = {
  path: '/*',
  preferStatic: true,
}

import { registerV1Routes } from './v1/v1Routes.js'


function registerApiRoutes(app, path) {
    app.use(calculateResponseTimeMiddleware)

    registerV1Routes (app, `${path}/v1`)
}


function calculateResponseTimeMiddleware(request, response, next) {
    const startTime = Date.now()

    next()
    
    console.debug(`Handled ${request.method} ${request.originalUrl} in ${Date.now() - startTime}ms`)
}


export {registerApiRoutes}
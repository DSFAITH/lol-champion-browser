import express from 'express'
import { registerApiRoutes } from './routes/apiRoutes.js'


const port = 8080

function startServer() {
    console.debug('Starting the server')

    const app = express()

    registerApiRoutes(app, '/api')

    app.listen(port, () => {
        console.debug(`The service has started and is listening on port ${port}`)
    })
}

export { startServer }
import express from 'express'


const port = 8080

function startServer() {

  console.debug('Starting the server')


  const app = express()

  app.listen(port, () => {
    console.debug(`The service has started and is listening on port ${port}`)
  })
}

export { startServer }
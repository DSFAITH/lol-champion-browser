import express from 'express'


function registerChampionsRoutes() {
    const router = express.Router()

    router.get('/', handleGetChampions)

    return router
}


function handleGetChampions(request, response) {
    response.json([])
}

export { registerChampionsRoutes }
import express from 'express'


function registerItemsRoutes() {
    const router = express.Router()

    router.get('/', handleGetItems)

    return router

}

function handleGetItems(request, response) {
    response.json ([])
}

export { registerItemsRoutes }
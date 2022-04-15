import express from 'express'

function registerSpellsRoutes() {
    const router = express.Router()
    router.get('/', handleGetSpells)
    return router
}

function handleGetSpells(request, response) {
    response.json([])
}

export { registerSpellsRoutes }
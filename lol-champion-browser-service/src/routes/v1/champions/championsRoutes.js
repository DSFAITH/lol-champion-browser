import express from 'express'

import { getChampionData } from '../../../api_clients/dataDragon.js'


function registerChampionsRoutes() {
    const router = express.Router()

    router.get('/', handleGetChampions)

    router.get('/:champion', handleGetChampion)

    return router
}

async function handleGetChampions(request, response) {

    const championData = await getChampionData()
    response.json(championData)
}

async function handleGetChampion(request, response) {
    const championName = request.params.championData
    const championData = await getChampionData()

    const champion = championData.data[championName]
    if (!champion) {
        response.status(404).send({error: `champion ${championName} not found`})
    } else {
        response.json(champion)
    }
}

export { registerChampionsRoutes }
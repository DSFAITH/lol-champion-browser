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
    const transformed = transformChampions(Object.values(championData.data))
    response.json(transformed)
}

async function handleGetChampion(request, response) {
    const championID = request.params.champion
    const championData = await getChampionData()

    const champion = championData.data[championID]
    if (!champion) {
        response.status(404).send({error: `champion ${championID} not found`})
    } else {
        response.json(transformChampion(champion))
    }
}

function transformChampions(champions) {
    return champions.reduce((transformed, champion) => {
        transformed.push(transformChampion(champion))
        return transformed
    }, [])
}

function transformChampion(champion) {
    const { id, name, title, blurb, tags, squareImageURL, loadingImageURL } = champion
    return { id, name, title, blurb, tags, squareImageURL, loadingImageURL }
}

export { registerChampionsRoutes }
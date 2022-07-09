import fetch from 'node-fetch'


const DD_REGION = 'na'
let fetchedVersion = undefined
let realmData = undefined
let championData = undefined

export async function getChampionData() {
    if (championData) {
        return championData
    }

    realmData = await getRealmData()
    fetchedVersion = realmData.v

    const championURL = `${realmData.cdn}/${realmData.n.champion}/data/${realmData.l}/champion.json`
    const championResponse = await fetch(championURL)
    championData = await championResponse.json()

    deriveImageURLs(Object.values(championData.data), realmData.cdn, fetchedVersion)

    return championData
}

async function getRealmData() {
    const realmResponse = await fetch(`https://ddragon.leagueoflegends.com/realms/${DD_REGION}.json`)
    return await realmResponse.json()
}

function deriveImageURLs(champions, baseURL, version) {
    champions.forEach(champion => {
        champion.squareImageURL = `${baseURL}/${version}/img/champion/${champion.id}.png`
        champion.loadingImageURL = `${baseURL}/img/champion/loading/${champion.id}_0.jpg`
})
}
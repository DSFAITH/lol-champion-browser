import fetch from 'node-fetch'


const DD_REGION = 'na'
let version = undefined
let realmData = undefined
let championData = undefined

export async function getChampionData() {
    if (championData) {
        return championData
    }

    realmData = await getRealmData()
    version = realmData.v

    const championURL = `${realmData.cdn}/${realmData.n.champion}/data/${realmData.l}/champion.json`
    const championResponse = await fetch(championURL)
    championData = await championResponse.json()

    return championData
}

async function getRealmData() {
    const realmResponse = await fetch(`https://ddragon.leagueoflegends.com/realms/$DD_REGION}.json`)
    return await realmResponse.json()
}
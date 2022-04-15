import { registerChampionsRoutes } from './champions/championsRoutes.js'
import { registerItemsRoutes } from './items/itemsRoutes.js'
import { registerSpellsRoutes } from './spells/spellsRoutes.js'


function registerV1Routes(app, path) {
    app.use(`${path}/champions`, registerChampionsRoutes())
    app.use(`${path}/items`, registerItemsRoutes())
    app.use(`${path}/spells`, registerSpellsRoutes())

}

export { registerV1Routes }
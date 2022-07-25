import './style.css'
import { useState, useEffect } from 'react'
import { getChampions } from '../../../services/champions'

export function ChampionsList() {
    const[champions, setChampions] = useState([])
    useEffect( () => {
        async function fetchChampions() {
            const fetchedChampions = await getChampions()
            setChampions(fetchedChampions)
    }
    fetchChampions()
}, [])
    return (

        <div className="container">
            {}
            <Header className="Header"/>
            <div className="ChampionsList">
                {}
                { champions.map(champion => (<ChampionPanel key={champion.id}champion={champion} />))}
            </div>

        </div>
    )


}
function ChampionPanel(props) {
    const { champion } = props
    return (
        <div className="ChampionPanel"
           onMouseOver={event => setHighlighted(event.target)}
           onMouseOut={event => unsetHighlighted(event.target)}>
            <img src={champion.loadingImageURL} className="image" alt={champion.name}/>
            <div className="caption">
                <span>{champion.name}</span>
            </div>
            
           </div>
    )
}
function Header() {
    return (
        <div className="Header"/>
    )
}
function setHighlighted(element) {
    const panel = element.parentNode
    panel.childNodes.forEach(child => {
      child.classList.remove('unhighlight')
      child.classList.add('highlight')
    })
  }
  function unsetHighlighted(element) {
    const panel = element.parentNode
    panel.childNodes.forEach(child => {
      child.classList.add('unhighlight')
      child.classList.remove('highlight')
    })
  }
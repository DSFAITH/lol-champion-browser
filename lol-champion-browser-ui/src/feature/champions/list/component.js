import './style.css'
import { useState, useEffect } from 'react'
import { getChampions } from '../../../services/champions'

export function ChampionsList() {    
    const [nameFilterText, setNameFilterText] = useState('');
    const[champions, setChampions] = useState([])
    const[filteredChampions, setFilteredChampions] = useState(champions)
    useEffect( () => {
        async function fetchChampions() {
            const fetchedChampions = await getChampions()
            setChampions(fetchedChampions)
            setFilteredChampions(fetchedChampions)
        }
        fetchChampions()}, [])

    function onSearchClicked () {
        setFilteredChampions(champions.filter(champion => champion.name.toLowerCase().includes(nameFilterText.toLowerCase())))
    }

    function onClearClicked(){
        setNameFilterText('')
        setFilteredChampions(champions)
    }

    return (
        <div className="container">
            {}
            <Header 
                className="Header" 
                nameFilterText={nameFilterText} 
                setNameFilterText={setNameFilterText} 
                onSearchClicked={onSearchClicked}
                onClearClicked={onClearClicked}/>
            {}

            <div className="ChampionsList">
                { filteredChampions.map(champion => (<ChampionPanel key={champion.id}champion={champion} />))}
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
function Header(props) {
    const {nameFilterText, setNameFilterText, onSearchClicked, onClearClicked} = props
   
    return (
        <div className="Header">
           
            <h1>Filter Champions</h1>
    
            <div id="label">Name:
                <input 
                    type="text" id="nameFilter" name="Name" placeholder="Champion Name"
                    value={ nameFilterText } 
                    onChange={ (event) => setNameFilterText(event.target.value) }
                    maxLength="10"> 
                </input>
                

                <button type="button" onClick={() => onSearchClicked()}>Submit</button>  
                <button type="button" onClick={() => onClearClicked()}>Clear</button>
                
            </div>

    
         
        </div>
        
 

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



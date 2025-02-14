import ItemList from './ItemList'
import './Main.css'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

function Main() {
  return (
    <div className='main'>

      {/* Item list de artistas */}
      <ItemList 
        title="Artistas" 
        items={5} 
        itemsArray={artistArray} 
        path='/artists'
        idpath='/artist'
      />

      {/* Item list de músicas */}
      <ItemList 
        title="Músicas" 
        items={10} 
        itemsArray={songsArray} 
        path='/songs'
        idpath='/song'
      />
      
    </div>
  )
}

export default Main

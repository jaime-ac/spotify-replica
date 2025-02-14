import './ItemList.css'
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';

function ItemList({ title, items, itemsArray, path, idpath }) {
  return (

    <div className="item-list">

        <div className='item-list__header'>

            <h2>{title} populares</h2>

            <Link to={path} className="item-list__link"> Mostrar tudo </Link>

        </div>

        <div className="item-list__container">

            {itemsArray
            .filter((currentValue, index) => index < items)
            .map((currentObj, index) => (

                <SingleItem 
                    
                    idpath={idpath} //estou passando o props que foi gerado no componente main para o componente SingleItem
                    {...currentObj}
                    key={`${title}-${index}`}/>
                )
            )}

        </div>

    </div>
    
  )
}

export default ItemList

import './SingleItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SingleItem({id, name, image, banner, artist, idpath}) {

  return (

    <Link to={`${idpath}/${id}`}className="single-item">
    
        <div className="single-item__div-image-button">
            <div className="single-item__div-image">
                <img src={image} alt={`Imagem de ${name}`} className="single-item__image" />
            </div>
    
            <FontAwesomeIcon icon={faCirclePlay} className='single-item__icon' />
        </div>
    
        <div className="single-item__texts">
    
            <div className="single-item-2lines">
                <p className='single-item__title'>{name}</p>
            </div>
    
            <p className='single-item__type'>{artist ? artist : 'Artista'}</p>
    
        </div>
    
    </Link>
  )
}

export default SingleItem

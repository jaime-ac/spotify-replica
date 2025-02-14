import "./Header.css";
import { Link } from "react-router-dom";

//aqui importamos a imagem que está na pasta assets para usar diretamente na página
import logoSpotify from '../assets/logo/spotify-logo.png' 

function Header() {
  return (

    <div className="container_header">
        <Link to="/">
          <img src={logoSpotify} alt="Logo Spotify" />
        </Link>

        <Link to="/" className="header__link">
            <h1>Spotify</h1>
        </Link>
      
    </div>

  )
}

export default Header

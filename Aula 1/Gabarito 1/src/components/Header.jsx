import "./Header.css"

//aqui importamos a imagem que está na pasta assets para usar diretamente na página
import logoSpotify from '../assets/logo/spotify-logo.png' 

function Header() {
  return (

    <div className="container_header">

        <img src={logoSpotify} alt="Logo Spotify" />

        <a href="/" className="header__link">
            <h1>Spotify</h1>
        </a>
      
    </div>

  )
}

export default Header

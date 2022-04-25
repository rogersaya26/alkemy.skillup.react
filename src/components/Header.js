import { Link } from 'react-router-dom'
import Buscador from './Buscador'

export const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listado">Listado</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
          <li>
            <span>
              { props.favorites.length > 0 && <>Peliculas en Favoritos: {props.favorites.length}</> }
            </span>
          </li>
        </ul>
        <Buscador />
      </nav>
    </header>
  )
}

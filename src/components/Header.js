import { Link } from 'react-router-dom'
import Buscador from './Buscador'

export const Header = () => {
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
        </ul>
        <Buscador />
      </nav>
    </header>
  )
}
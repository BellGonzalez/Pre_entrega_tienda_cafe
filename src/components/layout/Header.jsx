import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

function Header() {
    return (
        <header className="header">
        <div className="header-marca">
        <span className="header-logo">☕</span>

        <div>
            <h1>Sabores en Granos</h1>
            <p>Venta del mejor Café seleccionado para cada momento</p>
        </div>
        </div>

        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/productos">Cafés</Link>
            <a href="#contacto">Contacto</a>
            <CartWidget />
        </nav>
    </header>
    )
}

export default Header
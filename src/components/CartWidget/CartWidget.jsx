import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

    function CartWidget() {
    const { cantidadTotal } = useCart()

    return (
        <Link to="/carrito" className="cart-widget">
        🛒 {cantidadTotal()}
        </Link>
    )
}

export default CartWidget
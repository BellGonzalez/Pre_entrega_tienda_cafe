import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { carrito, eliminarProducto, vaciarCarrito, totalCarrito } = useCart();

  if (carrito.length === 0) {
    return (
      <section className="carrito">
        <div className="carrito-contenedor">
          <h2>Mi Carrito</h2>
          <p>El carrito está vacío.</p>

          <Link to="/productos" className="carrito-link">
            Seguir comprando
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="carrito">
      <div className="carrito-contenedor">
        <h2>Mi Carrito</h2>

        {carrito.map((producto) => (
          <div className="carrito-item" key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="carrito-imagen"
            />

            <div className="carrito-info">
              <h3>{producto.nombre}</h3>
              <p>Cantidad: {producto.cantidad}</p>
            </div>

            <p className="carrito-precio">
              ${(producto.precio * producto.cantidad).toLocaleString("es-AR")}
            </p>

            <button
              className="carrito-eliminar"
              onClick={() => eliminarProducto(producto.id)}
            >
              🗑️
            </button>
          </div>
        ))}

        <div className="carrito-total">
          <span>Total</span>
          <strong>${totalCarrito().toLocaleString("es-AR")}</strong>
        </div>

        <div className="carrito-botones">
          <Link to="/productos" className="carrito-link">
            Seguir comprando
          </Link>

          <button className="carrito-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>

          <button
            className="carrito-finalizar"
            onClick={() =>
              alert(
                "¡Gracias por tu compra! Nos pondremos en contacto a la brevedad.",
              )
            }
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Item({ id, nombre, precio, stock, imagen }) {
  const { agregarAlCarrito } = useContext(CartContext);

  const producto = {
    id,
    nombre,
    precio,
    stock,
    imagen,
  };

  return (
    <div className="producto-card">
      <img className="producto-imagen" src={imagen} alt={nombre} />

      <div className="producto-info">
        <h3>{nombre}</h3>

        <p className="producto-precio">${precio.toLocaleString("es-AR")}</p>

        <Link to={`/producto/${id}`}>Ver detalle</Link>

        <button
          className="producto-boton"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Item;

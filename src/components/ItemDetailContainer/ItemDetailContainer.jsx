import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const productoEncontrado = datos.find(
          (producto) => producto.id === Number(id),
        );

        setProducto(productoEncontrado);
      });
  }, [id]);

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <section className="detalle-producto">
      <div className="detalle-contenedor">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="detalle-imagen"
        />

        <div className="detalle-info">
          <h2>{producto.nombre}</h2>

          <p>Precio: ${producto.precio.toLocaleString("es-AR")}</p>

          <p>Stock disponible: {producto.stock}</p>
          <p className="detalle-resena">{producto.resena}</p>
          <Link to="/productos">Volver a Cafés</Link>
        </div>
      </div>
    </section>
  );
}

export default ItemDetailContainer;

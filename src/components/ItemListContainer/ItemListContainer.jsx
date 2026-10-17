import { useEffect, useState } from 'react'
import Item from '../Item/Item'
function ItemListContainer() {

const [productos, setProductos] = useState([])

    useEffect(() => {
    fetch('/productos.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
        setProductos(datos)
        })
    }, [])

        return (
    <section className="seccion-cafes" id="cafes">
    <h2>Nuestros Cafés</h2>

        <div className="productos-container">
        {productos.map((producto) => (
        <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            stock={producto.stock}
            imagen={producto.imagen}
        />
        ))}
    </div>
    </section>
)
}

export default ItemListContainer


function FormularioProducto({
    datosForm,
    manejarCambio,
    manejarCambioImagen,
    manejarEnvio
    }) {
    return (
        <section className="seccion-formulario">

        <form
            className="formulario-producto"
            onSubmit={manejarEnvio}
        >

            <p className="formulario-etiqueta">
            NUEVO PRODUCTO
            </p>

            <h2>Agregar nuevo café</h2>

            <label>Id</label>
            <input
            type="number"
            name="id"
            value={datosForm.id}
            onChange={manejarCambio}
            />

            <label>Nombre del producto</label>
            <input
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={manejarCambio}
            placeholder="Ej: Café Perú"
            />

            <label>Precio</label>
            <input
            type="number"
            name="precio"
            value={datosForm.precio}
            onChange={manejarCambio}
            placeholder="Ej: 15000"
            />

            <label>Stock</label>
            <input
            type="number"
            name="stock"
            value={datosForm.stock}
            onChange={manejarCambio}
            placeholder="Ej: 10"
            />

            <label>Imagen del producto</label>
            <input
            type="file"
            accept="image/*"
            onChange={manejarCambioImagen}
            />

            <button type="submit">
            Guardar producto
            </button>

        </form>

        </section>
    )
}

export default FormularioProducto
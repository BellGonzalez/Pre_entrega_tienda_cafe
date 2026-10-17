import { useState } from 'react'
import FormularioProducto from './FormularioProducto'

function FormularioContainer() {

    const [datosForm, setDatosForm] = useState({
    id: '',
    nombre: '',
    precio: '',
    stock: ''
    })

    const [imagenFile, setImagenFile] = useState(null)

    const manejarCambio = (evento) => {
    const { name, value } = evento.target

        setDatosForm({
        ...datosForm,
            [name]: value
        })
    }

    const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0])
    }

    const manejarEnvio = async (evento) => {
    evento.preventDefault()

    if (!imagenFile) {
    alert('Por favor, seleccioná una imagen para el producto.')
    return
    }

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY

    const formData = new FormData()
    formData.append('image', imagenFile)

    try {
    console.log('Subiendo imagen a Imgbb...')

    const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
        method: 'POST',
        body: formData
        }
    )

    const datosImgbb = await respuestaImgbb.json()
    

    if (datosImgbb.success) {
        console.log('Imagen subida con éxito.')
        console.log('URL:', datosImgbb.data.display_url)

    const productoCompleto = {
    ...datosForm,
    urlImagen: datosImgbb.data.display_url
}

        console.log(
        'Enviando los siguientes datos COMPLETOS a la API:',
        productoCompleto
        )
    }
    } catch (error) {
    console.error('Error al subir la imagen:', error)
    }
}

    return (
    <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarCambioImagen={manejarCambioImagen}
        manejarEnvio={manejarEnvio}
    />
    )
}

export default FormularioContainer
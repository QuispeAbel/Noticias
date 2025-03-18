import { useFetch } from "../../hooks"
import "./Tablero.css"
import { NoticiaMiniatura } from "../NoticiaMiniatura/NoticiaMiniatura"
import { useState } from "react"

export const Tablero = () => {

  const [categoria, setCategoria] = useState('')
  const [url, setUrl] = useState(`http://noticias.test/noticias${categoria}`)
  const { data, loading, error } = useFetch(url)

  const handleNoticias = (data: unknown) => {
    if (Array.isArray(data) ) {
      return data.map((element) => (
        <NoticiaMiniatura
          titulo={element.titulo}
          copete={element.copete}
          imagen={element.imagen}
          fecha={element.fecha}
        />
      ));
    } else {
      console.error("Los datos no tienen el formato esperado.");
      return null;
    }
  };

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Hubo un error {error.message}</div>
  }

  return (
    <div className="tablero">
      {handleNoticias(data)}
    </div>
  )
}
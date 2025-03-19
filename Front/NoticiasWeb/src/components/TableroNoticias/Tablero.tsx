import "./Tablero.css"
import { NoticiaMiniatura } from "../NoticiaMiniatura/NoticiaMiniatura"

interface Parameters {
  categoria: string;
  loading: boolean;
  error: Error | null;
  data: unknown;}

export const Tablero = ({ loading, error, data}: Parameters) => {

  const handleNoticias = (data: unknown) => {
  
    if (Array.isArray(data) ) {

      if (data.length === 0) {
        return <h1>No hay noticias para mostrar</h1>
      }

      return data.map((element) => (
        <NoticiaMiniatura key={element.id_noticia}
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
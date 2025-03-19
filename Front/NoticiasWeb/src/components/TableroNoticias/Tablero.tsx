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
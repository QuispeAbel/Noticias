import './NoticiaMiniatura.css'

interface Params {
    titulo: string;
    copete: string;
    imagen: string;
    fecha: string;
}

export const NoticiaMiniatura = ({titulo, copete, imagen, fecha}: Params) => {

    return (
        <div className="noticia-miniatura">
           <h3>{titulo}</h3>
              <p>{copete}</p>
                <img className='news-img' src={`/imagenes/${imagen}`}/>
                <p>{fecha}</p>
        </div>)
}
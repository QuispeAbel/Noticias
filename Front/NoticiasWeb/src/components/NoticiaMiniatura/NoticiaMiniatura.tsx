import './NoticiaMiniatura.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Params {
    titulo: string;
    copete: string;
    imagen: string;
    fecha: string;
}

export const NoticiaMiniatura = ({titulo, copete, imagen, fecha}: Params) => {

    return (
        <Card className='noticia-miniatura' >
          <Card.Img variant="top" src={`/imagenes/${imagen}`} className="news-img " />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
              {copete}
            </Card.Text>
            <Button variant="primary">Ver Noticia Completa</Button>
          </Card.Body>
        </Card>
      );
}
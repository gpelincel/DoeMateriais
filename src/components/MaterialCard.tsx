import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MaterialCard(props: any) {
  return (
    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='fs-2'>{props.title}</Card.Title>
        <div className="text-body card-text">
          {props.description}
          <p className='fs-3 text-body'>
          {props.quantidade} {props.medida}
          </p>
          <small className='text-muted fs-7'>{props.cidade}-{props.estado}</small>
          <br />
          <small className='text-muted fs-8'>Limite de retirada: {props.date}</small>
        </div>
        <a href={`https://wa.me/55${props.telefone}?text=Ol%C3%A1%21+Vi+sua+doa%C3%A7%C3%A3o+no+DoeMateriais+e+quero+saber+mais`}><Button variant="primary">Saber mais</Button></a>
      </Card.Body>
    </Card>
  );
}

export default MaterialCard;
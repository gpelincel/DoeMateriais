import Button from "react-bootstrap/Button";
import './HomeContainer.css'
import { Link } from "react-router-dom";

export default function HomeContainer() {
  return (
    <div className="cards">
      <div className="card bg-info color-white shadow">
        <h1>Quero Doar!</h1>
        <p>
          Está com material sobrando e não sabe o que fazer? Doe para quem
          precisa!
        </p>
        <Link to="/FazerDoacao"><Button variant="primary">Doar</Button></Link>
      </div>
      <div className="card bg-success shadow">
        <h1>Preciso de material!</h1>
        <p>
          Está precisando de materiais e não tem condições para comprar mais?
          Sem problema, podemos ajudar!
        </p>
        <Link to="/SolicitarDoacao"><Button variant="primary">Receber</Button></Link>
      </div>
    </div>
  );
}

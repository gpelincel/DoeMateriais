import { Form, Row, Col, Button } from "react-bootstrap";
import "./DoarForm.css";

export default function DoarForm() {
  return (
    <div className="doar-form">
      <Form className="p-3">
        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Nome do material</Form.Label>
          <Form.Control type="text" placeholder="Nome..." />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control type="number" placeholder="0,00" min={0} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Medida</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione</option>
                <option value="1">Metro</option>
                <option value="2">Quilo</option>
                <option value="3">Unidade</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descreva o material que você irá doar, inclua dimensões, cores, estado de conservação, entre outros"
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Data limite da retirada</Form.Label>
          <Form.Control type="date" placeholder="Selecione uma dara" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" placeholder="00000-000" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Nome da cidade" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="AA" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Rua</Form.Label>
              <Form.Control type="text" placeholder="Nome da rua" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Número</Form.Label>
              <Form.Control type="number" placeholder="00" min={0} />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center gap-2 w-100 mt-4">
          <Button variant="primary" type="submit">
            Enviar
          </Button>

          <Button variant="danger" type="reset">
            Limpar
          </Button>
        </div>
      </Form>
    </div>
  );
}

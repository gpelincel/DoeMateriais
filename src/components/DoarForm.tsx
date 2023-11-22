import { Form, Row, Col, Button } from "react-bootstrap";
import "./DoarForm.css";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function DoarForm() {
  const doadosCollection = collection(db, "materiais_doados");
  const [nome_material, setNome_material] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [medida, setMedida] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data_limite, setData_limite] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [imageUpload, setImageUpload] = useState<File | undefined>();
  const [imageurl, setImageurl] = useState<string | null>(null);

  const [showImageCapture, setShowImageCapture] = useState(false);

  const captureImage = async () => {
    try {
      const photo = await takePhoto();
      setImageurl(photo);
      setShowImageCapture(false);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  const takePhoto = () =>
    new Promise<string>((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = (event) => {
        const fileInput = event.target as HTMLInputElement;
        const files = fileInput.files;

        if (files && files.length > 0) {
          const file = files[0];
          const reader = new FileReader();

          reader.onload = () => {
            const photoUrl = reader.result as string;
            resolve(photoUrl);
          };

          reader.onerror = () => {
            reject(new Error("Error reading the file."));
          };

          reader.readAsDataURL(file);
        } else {
          reject(new Error("No file selected."));
        }
      };

      input.click();
    });

  const uploadData = async () => {
    if (!imageUpload) return;

    const imageRef = ref(storage, `doemateriais/images/${imageUpload.name}`);

    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      const material = await addDoc(doadosCollection, {
        nome_material,
        quantidade,
        medida,
        descricao,
        data_limite,
        telefone,
        cidade,
        estado,
        rua,
        numero,
        url,
      });
      // Limpar o formulário após o envio bem-sucedido
      setNome_material("");
      setQuantidade("");
      setMedida("");
      setDescricao("");
      setData_limite("");
      setTelefone("");
      setCidade("");
      setEstado("");
      setRua("");
      setNumero("");
      setImageUpload(undefined);
      setImageurl(null);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="doar-form">
      <Form className="p-3" id="form-doar">
        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Nome do material</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome..."
            value={nome_material}
            onChange={(e) => setNome_material(e.target.value)}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                placeholder="0,00"
                min={0}
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Medida</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={medida}
                onChange={(e) => setMedida(e.target.value)}
              >
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
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Data limite da retirada</Form.Label>
          <Form.Control
            type="date"
            placeholder="Selecione uma data"
            value={data_limite}
            onChange={(e) => setData_limite(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupText">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="(00)0000-000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="AA"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Rua</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome da rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupText">
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="number"
                placeholder="00"
                min={0}
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Foto do material</Form.Label>
          <div>
            {showImageCapture && (
              <div>
                <Button variant="primary" onClick={captureImage}>
                  Capturar Foto
                </Button>{" "}
                <Button
                  variant="secondary"
                  onClick={() => setShowImageCapture(false)}
                >
                  Cancelar
                </Button>
              </div>
            )}
            {!showImageCapture && (
              <div>
                {imageurl && (
                  <img
                    src={imageurl}
                    alt="Captured"
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
                <Button
                  variant="primary"
                  onClick={() => setShowImageCapture(true)}
                >
                  Escolher Foto
                </Button>
                {imageurl && (
                  <Button variant="secondary" onClick={() => setImageurl(null)}>
                    Remover Foto
                  </Button>
                )}
              </div>
            )}
          </div>
        </Form.Group>

        <div className="d-flex justify-content-center gap-2 w-100 mt-4">
          <Button variant="primary" onClick={uploadData}>
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
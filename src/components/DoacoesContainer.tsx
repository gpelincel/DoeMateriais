import MaterialCard from "./MaterialCard";
import "./DoacoesContainer.css";
import { useEffect, useState } from "react";
import {db, storage} from "../Firebase";
import { collection, getDocs, DocumentData } from "firebase/firestore";

interface Material {
  telefone: any;
  nome_material: string;
  descricao: string;
  data_limite: any;
  id: string;
  cidade: string;
  estado: string;
  url: string;
  medida: any;
  quantidade: any;
}

export default function DoacoesContainer() {
  const [materials, setMaterials] = useState<Array<Material>>([]);
  const doadosCollection = collection(db, "materiais_doados");

  useEffect(() => {
    const getMaterials = async () => {
      const data = await getDocs(doadosCollection);
      setMaterials(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Material[]
      );
    };
    setInterval(getMaterials, 5000);
  }, []);

  let medidas = ["Metro(s)", "Quilo(s)", "Unidade(s)"];

  return (
    <div className="card-grid p-2 min-h-100">
      {materials.map((material, index) => {
        let date = new Date(material.data_limite);
        let medida_prop = medidas[Number(material.medida)-1];

        return (
          <MaterialCard
            key={index}
            title={material.nome_material}
            description={material.descricao}
            date={date.toLocaleDateString()}
            telefone={material.telefone}
            cidade={material.cidade}
            estado={material.estado}
            image={material.url}
            medida={medida_prop}
            quantidade={material.quantidade}
          />
        );
      })}
    </div>
  );
}

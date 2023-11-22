import MaterialCard from "./MaterialCard";
import "./DoacoesContainer.css"

export default function DoacoesContainer() {
  return (
    <div className="card-grid p-2">
      <MaterialCard title={"Hello"} description={"I'm a new card"} />
      <MaterialCard title={"Hello"} description={"I'm a new card"} />
      <MaterialCard title={"Hello"} description={"I'm a new card"} />
      <MaterialCard title={"Hello"} description={"I'm a new card"} />
      <MaterialCard title={"Hello"} description={"I'm a new card"} />
      <MaterialCard title={"Hello"} description={"I'm a new card"} />

    </div>
  );
}
import { useState } from "react";
import Navbar from "../../components/organism/Navbar";

const CalcIMC = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [imc, setIMC] = useState(0);

  const calculateIMC = () => {
    const calculatedIMC = weight / (height * height);
    setIMC(calculatedIMC);
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Calcular IMC</h2>
        <label htmlFor="weight">Peso (em kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <br />
        <label htmlFor="height">Altura (em metros): </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <br />
        <button onClick={calculateIMC}>Calcular</button>
        <br />
        <p>Seu IMC é: {imc.toFixed(2)}</p>
      </div>
    </>
  );
};

export default CalcIMC;

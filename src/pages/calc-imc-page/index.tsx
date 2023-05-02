import Navbar from "../../components/organism/Navbar";
import { IMCCalculator } from "./imc-calc-component";
import { ContainerImc } from "./styles";

const CalcIMC = () => {
  return (
    <>
      <Navbar />
      <ContainerImc>
        <div
          className="p-grid p-nogutter p-align-center p-justify-center"
          style={{ height: "100vh" }}
        >
          <div className="p-col-12 p-md-8 p-lg-6">
            <div className="p-card">
              <div className="p-card-header">Cálculo do IMC</div>
              <div className="p-card-body">
                <IMCCalculator />
              </div>
            </div>
          </div>
        </div>
      </ContainerImc>
    </>
  );
};

export default CalcIMC;

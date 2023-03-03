import { Dropdown } from "primereact/dropdown";
import { Container } from "./components/atmos/container";

function App() {
  return (
    <Container
      content={
        <>
          <div className="grid">
            <div className="col-6">
              <Dropdown />
            </div>
          </div>
        </>
      }
    />
  );
}

export default App;

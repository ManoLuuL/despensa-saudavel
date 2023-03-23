import { Checkbox } from "primereact/checkbox";
import { Container } from "../../components/atmos/container";
import { NumberInput } from "../../components/molecules/inputs/number-input";
import { SelectInput } from "../../components/molecules/inputs/select-input";

const Inicio = () => {
  return (
    <div>
      <h1>Inicio do TCC</h1>
      <Container
        content={
          <>
            <SelectInput name="teste" labelKey="" label="teste" />
            <div className="flex align-items-center">
              <Checkbox
                inputId="ingredient1"
                name="pizza"
                value="Cheese"
                checked={false}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Cheese
              </label>
            </div>
            <NumberInput name="opa" label="teste" />
          </>
        }
      />
    </div>
  );
};

export default Inicio;

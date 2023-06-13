import { Divider } from "primereact/divider";
import Navbar from "../../components/organism/Navbar";
import { InputText } from "primereact/inputtext";
import { Container } from "../../components/atmos/container";
import { Button } from "../../components/molecules/button-custom";

export const UserPage = () => {
  return (
    <>
      <Navbar />
      <Container
        content={
          <>
            <h3 className="flex justify-content-center">Perfil do usuário</h3>
            <Divider />
            <div className="grid">
              <div className="col-6">
                <span className="p-float-label">
                  <InputText
                    id="userName"
                    defaultValue={"Luis Ricardo"}
                    style={{ width: "100%" }}
                  />
                  <label htmlFor="userName">Nome:</label>
                </span>
              </div>
              <div className="col-6">
                <span className="p-float-label">
                  <InputText
                    id="emailUser"
                    defaultValue={"teste@teste.com"}
                    style={{ width: "100%" }}
                  />
                  <label htmlFor="emailUser">E-mail:</label>
                </span>
              </div>
              <div className="col-6">
                <Button color="contrast" text="Modificar senha" disabled />
              </div>
            </div>
          </>
        }
        footer={
          <>
            <div className="justify-content-end flex">
              <Button color="success" text="Salvar" />
            </div>
          </>
        }
      />
    </>
  );
};

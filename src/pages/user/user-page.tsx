import { Divider } from "primereact/divider";
import Navbar from "../../components/organism/Navbar";
import { InputText } from "primereact/inputtext";
import { Container } from "../../components/atmos/container";

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
                  <InputText id="username" defaultValue={"Luis Ricardo"} />
                  <label htmlFor="username">Nome:</label>
                </span>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

import { Divider } from "primereact/divider";
import Navbar from "../../components/organism/Navbar";
import { InputText } from "primereact/inputtext";
import { Container } from "../../components/atmos/container";
import { Button } from "../../components/molecules/button-custom";
import { FC, useState } from "react";
import { useEffectOnce, useIsConnected } from "../../globals/hooks";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";

export const UserPage: FC = () => {
  const { connection } = useIsConnected();
  const navigate = useNavigate();
  const [conn, setConn] = useState(false);

  useEffectOnce(() => {
    console.log(connection);
    if (connection === undefined) navigate("/login");
    else setConn(true);
  });

  return (
    <>
      {conn ? (
        <>
          <Navbar />
          <Container
            content={
              <>
                <h3 className="flex justify-content-center">
                  Perfil do usuário
                </h3>
                <Divider />
                <div className="grid">
                  <div className="col-6">
                    <span className="p-float-label">
                      <InputText
                        id="userName"
                        defaultValue={connection.data.nome}
                        style={{ width: "100%" }}
                      />
                      <label htmlFor="userName">Nome:</label>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="p-float-label">
                      <InputText
                        id="emailUser"
                        defaultValue={connection.data.email}
                        style={{ width: "100%" }}
                      />
                      <label htmlFor="emailUser">E-mail:</label>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="p-float-label">
                      <InputText
                        id="idadeUser"
                        defaultValue={connection.data.idade}
                        style={{ width: "100%" }}
                      />
                      <label htmlFor="idadeUser">Idade:</label>
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
      ) : (
        <div className="card flex justify-content-center">
          <ProgressSpinner />
        </div>
      )}
    </>
  );
};

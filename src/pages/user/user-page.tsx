import { Divider } from "primereact/divider";
import Navbar from "../../components/organism/Navbar";
import { InputText } from "primereact/inputtext";
import { Container } from "../../components/atmos/container";
import { Button } from "../../components/molecules/button-custom";
import { FC, useState } from "react";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFormik } from "formik";
import { useUserService } from "../../api/services";
import { UserDTO } from "../../api/services/user/dto/user-dto";
import ModalRedefinirSenha from "./modal-redefinir-senha/modal-redefinir-senha";
import { Checkbox } from "primereact/checkbox";

export const UserPage: FC = () => {
  const { connection } = useIsConnected();
  const navigate = useNavigate();
  const [conn, setConn] = useState(false);
  const { showWarning, showSuccess, showError } = useToast();

  const [isSubmit, setIsSubmit] = useState(false);
  const [isNewPassword, setNewPassword] = useState(false);
  const { updateUser } = useUserService();

  useEffectOnce(() => {
    if (connection === undefined) {
      navigate("/login");
      showWarning(
        "Usuario não identificado, por favor faça o login novamente!"
      );
    } else setConn(true);
  });

  const formik = useFormik({
    initialValues: connection.data,
    validate: (data) => {
      let errors: Record<string, string> = {};

      if (!data.email) {
        errors.email = "Email é requerido.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email =
          "Endereço de E-mail invalido, verifique se preencheu corretamente!";
      }

      if (!data.nome) {
        errors.nome = "Nome é obrigatorio!";
      }

      if (!data.idade) {
        errors.idade = "Idade é obrigatorio!";
      }

      return errors;
    },

    onSubmit: async (data) => {
      setIsSubmit(true);
      try {
        const newData: UserDTO = {
          ...data,
        };
        await updateUser(newData, connection.data.id);

        showSuccess("Registro Alterado com Sucesso");
        setIsSubmit(false);
      } catch (e) {
        showError("Erro ao Atualizar!");
        console.error(e);
        setIsSubmit(false);
      }
    },
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
                <form onSubmit={formik.handleSubmit}>
                  <div className="grid">
                    <div className="col-4">
                      <span className="p-float-label">
                        <InputText
                          id="userName"
                          defaultValue={connection.data.nome}
                          style={{ width: "100%" }}
                        />
                        <label htmlFor="userName">Nome:</label>
                      </span>
                    </div>
                    <div className="col-4">
                      <span className="p-float-label">
                        <InputText
                          id="emailUser"
                          defaultValue={connection.data.email}
                          style={{ width: "100%" }}
                        />
                        <label htmlFor="emailUser">E-mail:</label>
                      </span>
                    </div>
                    <div className="col-4">
                      <span className="p-float-label">
                        <InputText
                          id="idadeUser"
                          defaultValue={connection.data.idade}
                          style={{ width: "100%" }}
                        />
                        <label htmlFor="idadeUser">Idade:</label>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 col-12 mb-3">
                      <div className="flex align-items-center">
                        <Checkbox
                          inputId="Diabetico"
                          name="Diabetico"
                          value="Diabetico"
                          checked={formik.values.diabetico}
                          onChange={(e) =>
                            formik.setFieldValue("diabetico", e.checked)
                          }
                        />
                        <label htmlFor="Diabetico" className="ml-2">
                          Diabetico
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <Checkbox
                          inputId="Vegetariano"
                          name="Vegetariano"
                          value="Vegetariano"
                          checked={formik.values.vegetariano}
                          onChange={(e) =>
                            formik.setFieldValue("vegetariano", e.checked)
                          }
                        />
                        <label htmlFor="Vegetariano" className="ml-2">
                          Vegetariano
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <Checkbox
                          inputId="Vegano"
                          name="Vegano"
                          value="Vegano"
                          checked={formik.values.vegano}
                          onChange={(e) =>
                            formik.setFieldValue("vegano", e.checked)
                          }
                        />
                        <label htmlFor="Vegano" className="ml-2">
                          Vegano
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <Checkbox
                          inputId="alergico_a_lactose"
                          name="alergico_a_lactose"
                          value="alergico_a_lactose"
                          checked={formik.values.alergico_a_lactose}
                          onChange={(e) =>
                            formik.setFieldValue(
                              "alergico_a_lactose",
                              e.checked
                            )
                          }
                        />
                        <label htmlFor="alergico_a_lactose" className="ml-2">
                          Alergico a lactose
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                    <Button
                      color="contrast"
                      text="Modificar senha"
                      disabled={isSubmit}
                      onClick={() => setNewPassword(true)}
                    />
                    <Button
                      color="success"
                      text="Salvar"
                      type="submit"
                      disabled={isSubmit}
                    />
                  </div>
                </form>
              </>
            }
          />
          {isNewPassword && (
            <ModalRedefinirSenha
              id={connection.data.id}
              onHide={() => setNewPassword(false)}
              width={{ default: "80rem", mobile: "80vw" }}
            />
          )}
        </>
      ) : (
        <div className="card flex justify-content-center">
          <ProgressSpinner />
        </div>
      )}
    </>
  );
};

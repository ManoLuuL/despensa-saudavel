import { FC, Fragment, useState } from "react";
import { Password } from "primereact/password";
import { useFormik } from "formik";
import { useUserService } from "../../../api/services";
import { ModalRedefinirSenhaProps } from "./types";
import { classNames } from "primereact/utils";
import { Divider } from "primereact/divider";
import { Modal } from "../../../components/organism/modal";
import { useToast } from "../../../globals/hooks";
import { PasswordDiv } from "../../register/styles";

const ModalRedefinirSenha: FC<ModalRedefinirSenhaProps> = (props) => {
  const { onHide, width, id } = props;
  const { showSuccess, showError } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const { updatePassword } = useUserService();

  const formik = useFormik({
    initialValues: {
      nova_senha: "",
    },
    validate: (data) => {
      let errors: Record<string, string> = {};

      if (!data.nova_senha) {
        errors.password = "Senha é obrigatorio!";
      }

      return errors;
    },

    onSubmit: async (data) => {
      setIsLoading(true);
      try {
        const newData = {
          ...data,
        };
        await updatePassword(newData, id);

        showSuccess("Senha Alterada com Sucesso!");
        onHide!();
      } catch (e) {
        showError("Erro ao Alterar Senha!");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const isFormFieldValid = () =>
    // @ts-ignore
    !!(formik.touched["nova_senha"] && formik.errors["nova_senha"]);
  const getFormErrorMessage = () => {
    return (
      isFormFieldValid() && (
        //@ts-ignore
        <small className="p-error">{formik.errors["nova_senha"]}</small>
      )
    );
  };

  const passwordHeader = <h6>Insira sua senha</h6>;
  const passwordFooter = (
    <Fragment>
      <Divider />
      <p className="mt-2">Sugestão</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Letras minúsculas</li>
        <li>Letras maiúsculas</li>
        <li>Numéricos</li>
        <li>Mínimo de 6 caracteres</li>
      </ul>
    </Fragment>
  );
  console.log(formik.values.nova_senha);
  return (
    <Modal
      onHide={onHide}
      width={width}
      title="Alterar Senha"
      onConfirm={() => {
        if (!formik.values.nova_senha) {
          showError("Campo de Senha não informado!");
          return false;
        }

        formik.handleSubmit();
        return false;
      }}
      confirmButtonConfig={{
        content: "Modificar Senha",
        disabled: isLoading,
      }}
    >
      <>
        <h4>
          Ao confirmar a senha atual será modificada para nova senha informada
          no campo a baixo.
        </h4>
        <form>
          <PasswordDiv className="field w-full">
            <span className="p-float-label">
              <Password
                id="nova_senha"
                style={{ width: "100%" }}
                name="nova_senha"
                value={formik.values.nova_senha}
                onChange={formik.handleChange}
                toggleMask
                className={classNames({
                  "p-invalid": isFormFieldValid(),
                })}
                header={passwordHeader}
                footer={passwordFooter}
                promptLabel="Insira a senha"
                weakLabel="Muito simples"
                mediumLabel="Senha aceitavel"
                strongLabel="Senha excelente"
              />
              <label
                htmlFor="nova_senha"
                className={classNames({
                  "p-error": isFormFieldValid(),
                })}
              >
                * Nova Senha
              </label>
            </span>
            {getFormErrorMessage()}
          </PasswordDiv>
        </form>
      </>
    </Modal>
  );
};

export default ModalRedefinirSenha;

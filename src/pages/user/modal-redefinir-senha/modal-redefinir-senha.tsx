import { FC, Fragment } from "react";
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
      }
    },
  });

  const isFormFieldValid = (name: string) =>
    // @ts-ignore
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name: string) => {
    return (
      isFormFieldValid(name) && (
        //@ts-ignore
        <small className="p-error">{formik.errors[name]}</small>
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

  return (
    <Modal
      onHide={onHide}
      width={width}
      title="Alterar Senha"
      onConfirm={() => {
        formik.handleSubmit();
        return false;
      }}
    >
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
                "p-invalid": isFormFieldValid("nova_senha"),
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
                "p-error": isFormFieldValid("nova_senha"),
              })}
            >
              * Nova Senha
            </label>
          </span>
          {getFormErrorMessage("nova_senha")}
        </PasswordDiv>
      </form>
    </Modal>
  );
};

export default ModalRedefinirSenha;

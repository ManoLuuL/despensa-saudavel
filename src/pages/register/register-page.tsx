import { useFormik } from "formik";
import { FC, Fragment, useState } from "react";
import img from "./assets/salada.jpg";
import { Container, LeftContent, PasswordDiv } from "./styles";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Divider } from "primereact/divider";
import { Button } from "../../components/molecules/button";
import { NavLink, useNavigate } from "react-router-dom";
import { RegisterForm } from "./types";
import { useToast } from "../../globals/hooks/use-toast";
import { UserRegisterViewModel } from "../../api/services/user/view-models/user-register-view-model";
import { InputNumber } from "primereact/inputnumber";
import { useUserService } from "../../api/services";

export const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const [idade, setIdade] = useState<number>(0);

  let isSubmit = false;
  const { registerUser } = useUserService();

  let LoginValues: RegisterForm = {
    nome: "",
    email: "",
    senha: "",
    idade: 0,
  };

  const formik = useFormik({
    initialValues: LoginValues,
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

      if (!data.senha) {
        errors.password = "Senha é obrigatorio!";
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
      isSubmit = true;
      try {
        const newData: UserRegisterViewModel = {
          ...data,
        };
        await registerUser(newData);

        navigate("/login");
        showSuccess("Registrado com sucesso");
      } catch (e) {
        showError("Erro ao registrar no sistema");
        console.error(e);
        isSubmit = false;
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
    <>
      <Container>
        <LeftContent className="flex flex-column h-full">
          <div className="flex align-item-center justify-content-center mb-3">
            <h1>
              Junte-se a nós e comece a criar receitas saudáveis hoje mesmo!
            </h1>
          </div>
          <div className="card">
            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-content-between flex-grow-1 flex-column"
            >
              <div className="field">
                <span className="p-float-label p-input-icon-right w-full">
                  <InputText
                    id="nome"
                    name="nome"
                    style={{ width: "100%" }}
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="nome"
                    className={classNames({
                      "p-error": isFormFieldValid("nome"),
                    })}
                  >
                    Nome*
                  </label>
                </span>
                {getFormErrorMessage("nome")}
              </div>
              <div className="field">
                <span className="p-float-label p-input-icon-right w-full">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    style={{ width: "100%" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": isFormFieldValid("email"),
                    })}
                  />
                  <label
                    htmlFor="email"
                    className={classNames({
                      "p-error": isFormFieldValid("email"),
                    })}
                  >
                    E-mail*
                  </label>
                </span>
                {getFormErrorMessage("email")}
              </div>
              <PasswordDiv className="field w-full">
                <span className="p-float-label">
                  <Password
                    id="senha"
                    style={{ width: "100%" }}
                    name="senha"
                    value={formik.values.senha}
                    onChange={formik.handleChange}
                    toggleMask
                    className={classNames({
                      "p-invalid": isFormFieldValid("senha"),
                    })}
                    header={passwordHeader}
                    footer={passwordFooter}
                    promptLabel="Insira a senha"
                    weakLabel="Muito simples"
                    mediumLabel="Senha aceitavel"
                    strongLabel="Senha excelente"
                  />
                  <label
                    htmlFor="senha"
                    className={classNames({
                      "p-error": isFormFieldValid("senha"),
                    })}
                  >
                    Senha*
                  </label>
                </span>
                {getFormErrorMessage("senha")}
              </PasswordDiv>

              <div className="field">
                <span className="p-float-label p-input-icon-right w-full">
                  <InputNumber
                    id="idade"
                    name="idade"
                    style={{ width: "100%" }}
                    value={(formik.values.idade = idade)}
                    onChange={(data) => {
                      if (data) setIdade(data.value ?? 0);
                    }}
                  />
                  <label
                    htmlFor="idade"
                    className={classNames({
                      "p-error": isFormFieldValid("idade"),
                    })}
                  >
                    Idade*
                  </label>
                </span>
                {getFormErrorMessage("idade")}
              </div>

              <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                <NavLink to={"/"}>
                  <Button content="Voltar" fontSize={1} type="button" />
                </NavLink>

                <Button
                  content="Confirmar"
                  fontSize={1}
                  type="submit"
                  disabled={isSubmit}
                />
              </div>
            </form>
          </div>
        </LeftContent>
        <div
          className="hidden md:block col-7 p-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Container>
    </>
  );
};

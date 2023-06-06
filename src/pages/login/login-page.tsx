import { useFormik } from "formik";
import { FC, useRef } from "react";
import img from "./assets/image.jpg";
import { Container, LeftContent, PasswordDiv } from "./styles";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Button } from "../../components/molecules/button";
import { NavLink } from "react-router-dom";
import { LoginFormType } from "./types";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../globals/hooks/use-toast";

export const LoginPage: FC = () => {
  let LoginValues: LoginFormType = {
    email: "",
    password: "",
  };

  const { showSuccess, showError } = useToast();

  const navigate = useNavigate();

  const validateLoginForm = async (values: LoginFormType) => {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
  };

  const formik = useFormik({
    initialValues: LoginValues,
    validate: (data) => {
      let errors: Record<string, string> = {};

      if (!data.email) {
        errors.email = "Email é obrigatorio.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email =
          "Endereço de E-mail invalido, verifique se preencheu corretamente!";
      }

      if (!data.password) {
        errors.password = "Senha é obrigatorio!";
      }
      return errors;
    },
    onSubmit: (data) => {
      try {
        if (
          data.email === "luis.couto@hotmail.com" &&
          data.password === "Senha123"
        ) {
          console.log("a");
          navigate("/main");
          showSuccess("Logado com sucesso");
        } else {
          showError("Login invalido");
          console.log("b");
        }

        // validateLoginForm(data);
      } catch (error) {
        showError("Erro ao logar no sistema");
        console.error(error);
        formik.resetForm();
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

  return (
    <>
      <Container>
        <LeftContent className="flex flex-column h-full">
          <div className="flex align-item-center justify-content-center mb-3">
            <h1>Pronto para cozinhar com o que tem em casa?</h1>
          </div>
          <div className="card">
            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-content-between flex-grow-1 flex-column"
            >
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
                    id="password"
                    style={{ width: "100%" }}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    feedback={false}
                    toggleMask
                    className={classNames({
                      "p-invalid": isFormFieldValid("password"),
                    })}
                  />
                  <label
                    htmlFor="password"
                    className={classNames({
                      "p-error": isFormFieldValid("password"),
                    })}
                  >
                    Password*
                  </label>
                </span>
                {getFormErrorMessage("password")}
              </PasswordDiv>
              <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                <NavLink to={"/"}>
                  <Button content="Voltar" fontSize={1} type="button" />
                </NavLink>
                <Button content="Acessar" fontSize={1} type="submit" />
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

import { useFormik } from "formik";
import { FC, Fragment, MutableRefObject, useRef, useState } from "react";
import img from "./assets/salada.jpg";
import { Container, LeftContent, PasswordDiv } from "./styles";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Divider } from "primereact/divider";
import { Button } from "../../components/molecules/button";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { RegisterForm, DefaultItemSelect } from "./types";
import { ITENS_USER_SEX } from "./consts";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";

export const RegisterPage: FC = () => {
  const [valueUserSex, setValueUserSex] = useState<DefaultItemSelect>();
  const [ageValue, setAgeValue] = useState<number>();
  const navigate = useNavigate();

  const toastSucessRef = useRef<Toast>(null);
  const toastErrorRef = useRef<Toast>(null);

  let LoginValues: RegisterForm = {
    registerName: "",
    email: "",
    password: "",
    sex: { id: 0, description: "" },
    age: 0,
  };

  const showSuccess = () => {
    toastSucessRef.current?.show({
      severity: "success",
      summary: "Success Submit",
      detail: "Usuario cadastrado com sucesso",
      life: 3000,
    });
  };
  const showError = () => {
    toastErrorRef.current?.show({
      severity: "error",
      summary: "Error Submit",
      detail: "Erro ao cadastrar o usuario",
      life: 3000,
    });
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

      if (!data.password) {
        errors.password = "Senha é obrigatorio!";
      }

      if (!data.registerName) {
        errors.registerName = "Nome é obrigatorio!";
      }

      if (!data.sex) {
        errors.sex = "Sexo é obrigatorio!";
      }

      if (!data.age) {
        errors.age = "Idade é obrigatorio!";
      }
      return errors;
    },
    onSubmit: (data) => {
      try {
        if (data) navigate("/login");
        showSuccess();
      } catch (e) {
        showError();
        console.error(e);
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

  const passwordHeader = <h6>Insira sua senha</h6>;
  const passwordFooter = (
    <Fragment>
      <Divider />
      <p className="mt-2">Sugestão</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Letras minúsculas</li>
        <li>Letras maiúsculas</li>
        <li>Numéricos</li>
        <li>Mínimo de 8 caracteres</li>
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
                    id="registerName"
                    name="registerName"
                    style={{ width: "100%" }}
                    value={formik.values.registerName}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="registerName"
                    className={classNames({
                      "p-error": isFormFieldValid("registerName"),
                    })}
                  >
                    Nome*
                  </label>
                </span>
                {getFormErrorMessage("registerName")}
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
                    id="password"
                    style={{ width: "100%" }}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    toggleMask
                    className={classNames({
                      "p-invalid": isFormFieldValid("password"),
                    })}
                    header={passwordHeader}
                    footer={passwordFooter}
                  />
                  <label
                    htmlFor="password"
                    className={classNames({
                      "p-error": isFormFieldValid("password"),
                    })}
                  >
                    Senha*
                  </label>
                </span>
                {getFormErrorMessage("password")}
              </PasswordDiv>

              <div className="field w-full">
                <span className="p-float-label w-full">
                  <Dropdown
                    name="sex"
                    options={ITENS_USER_SEX}
                    optionLabel="description"
                    className="w-full"
                    value={valueUserSex}
                    onChange={(e) => {
                      if (e) {
                        setValueUserSex(e.value);
                      }
                    }}
                  />
                  <label
                    htmlFor="sex"
                    className={classNames({
                      "p-error": isFormFieldValid("sex"),
                    })}
                  >
                    Sexo*:
                  </label>
                </span>
                {getFormErrorMessage("sex")}
              </div>

              <div className="field w-full">
                <span className="p-float-label w-full">
                  <InputNumber
                    name="age"
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.value ?? undefined)}
                    className="w-full"
                  />
                  <label htmlFor="age">Idade:</label>
                </span>
              </div>

              <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                <NavLink to={"/"}>
                  <Button content="Voltar" fontSize={1} type="button" />
                </NavLink>

                <Button content="Confirmar" fontSize={1} type="submit" />
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

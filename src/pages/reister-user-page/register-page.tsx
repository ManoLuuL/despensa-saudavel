import { useFormik } from "formik";
import { FC, Fragment, useState } from "react";
import img from "./assets/salada.jpg";
import { Container, LeftContent, PasswordDiv } from "./styles";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Divider } from "primereact/divider";
import { Button } from "../../components/molecules/button";
import { NavLink } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { LoginForm, DefaultItemSelect } from "./types";
import { ITENS_RESTRICTION, ITENS_USER_SEX } from "./consts";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";

export const RegisterPage: FC = () => {
  const [formData, setFormData] = useState({});
  const [valueUserSex, setValueUserSex] = useState<DefaultItemSelect>();
  const [valueRestriction, setValueRestriction] = useState<DefaultItemSelect>();
  const [checkRestriction, setCheckRestriction] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  let LoginValues: LoginForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userSex: { id: 0, description: "" },
  };

  const formik = useFormik({
    initialValues: LoginValues,
    validate: (data) => {
      let errors: Record<string, string> = {};

      if (!data.email) {
        errors.email = "Email is required.";
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
      console.log(data);
      setFormData(data);

      formik.resetForm();
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

  const handleCheckChange = (e: CheckboxChangeEvent) => {
    let restriction = [...checkRestriction];

    if (e.checked) {
      restriction.push(e.value);
      setChecked(true);
    } else {
      restriction.splice(restriction.indexOf(e.value), 1);
      setChecked(false);
    }

    setCheckRestriction(restriction);
  };

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
                    id="name"
                    name="name"
                    style={{ width: "100%" }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": isFormFieldValid("name"),
                    })}
                  >
                    Nome*
                  </label>
                </span>
                {getFormErrorMessage("name")}
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
              <PasswordDiv className="field w-full">
                <span className="p-float-label">
                  <Password
                    id="confirmPassword"
                    style={{ width: "100%" }}
                    name="confirmPassword"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    feedback={false}
                    className={classNames({
                      "p-invalid": isFormFieldValid("confirmPassword"),
                    })}
                  />
                  <label
                    htmlFor="confirmPassword"
                    className={classNames({
                      "p-error": isFormFieldValid("confirmPassword"),
                    })}
                  >
                    Confirme a senha*
                  </label>
                </span>
                {getFormErrorMessage("confirmPassword")}
              </PasswordDiv>
              <div className="field w-full">
                <span className="p-float-label w-full">
                  <Dropdown
                    name="userSex"
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
                  <label htmlFor="dd-city">Sexo:</label>
                </span>
              </div>
              <div className="field w-full">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="restricaoCheck"
                    name="restricao"
                    value="restrito"
                    checked={checkRestriction.includes("restrito")}
                    onChange={handleCheckChange}
                  />
                  <label htmlFor="restricaoCheck" className="ml-2">
                    Possui restrição
                  </label>
                </div>
              </div>
              {checked && (
                <div className="field w-full">
                  <span className="p-float-label w-full">
                    <Dropdown
                      name="restriction"
                      options={ITENS_RESTRICTION}
                      optionLabel="description"
                      className="w-full"
                      value={valueRestriction}
                      onChange={(e) => {
                        if (e) {
                          setValueRestriction(e.value);
                        }
                      }}
                    />
                    <label htmlFor="dd-city">Restrição:</label>
                  </span>
                </div>
              )}

              <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                <NavLink to={"/"}>
                  <Button content="Voltar" fontSize={1} type="button" />
                </NavLink>

                <Button content="Confirmar" fontSize={1} />
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

export default RegisterPage;

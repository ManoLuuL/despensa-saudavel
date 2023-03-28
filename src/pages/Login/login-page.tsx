import { useFormik } from "formik";
import { FC, Fragment, useState } from "react";
import img from "./assets/image.jpg";
import { Container, LeftContent, PasswordDiv, Wrapper } from "./styles";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Divider } from "primereact/divider";

export type LoginForm = {
  email: string;
  password: string;
};

export const LoginPage: FC = () => {
  const [formData, setFormData] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  let LoginValues: LoginForm = {
    email: "",
    password: "",
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
      setShowMessage(true);
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

  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </Fragment>
  );

  return (
    <>
      <Wrapper>
        <Container>
          <div
            className="flex justify-content-start h-full main-content"
            style={{ width: "105rem" }}
          >
            <LeftContent className="flex flex-column h-full">
              <div className="flex align-item-center justify-content-center mb-3">
                <h2>Pronto para cozinhar com o que tem em casa?</h2>
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
                        Password*
                      </label>
                    </span>
                    {getFormErrorMessage("password")}
                  </PasswordDiv>
                  <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                    <Button
                      label="Esqueceu a senha"
                      outlined
                      style={{
                        marginRight: "25px",
                      }}
                    />

                    <Button type="submit" label="Acessar" />
                  </div>
                </form>
              </div>
            </LeftContent>
            <div
              className="hidden md:block col-7 p-0"
              style={{
                borderRadius: "0 12px 12px 0",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;

import { FC } from "react";
import { TextInput } from "../../components/molecules/inputs/text-input";
import { Button } from "../../components/molecules/button";
import { useForm } from "../../globals/use-form";
import img from "./assets/image-login.jpg";
import { EmailPreInput } from "../../components/molecules/pre-inputs/email-pre-input";
import { Container, LeftContent, Wrapper } from "./styles";

export const LoginPage: FC = () => {
  const { controller, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = () => {
    handleSubmit((data) => {
      console.log(data);
    });
  };

  return (
    <>
      <Wrapper>
        <Container>
          <div className="flex justify-content-start h-full main-content">
            <LeftContent className="flex flex-column h-full ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
                noValidate={true}
                className="flex justify-content-between flex-grow-1 flex-column"
              >
                <div className="col-12 flex flex-column gap-3 ">
                  <p className="col-12" style={{ color: "black" }}>
                    Acesse para continuar
                  </p>
                  <EmailPreInput name="email" controller={controller} />
                  <TextInput
                    name="password"
                    type="password"
                    label="Senha"
                    controller={controller}
                    validationRules={{
                      required: true,
                    }}
                  />

                  <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                    <Button
                      text="Esqueceu a senha"
                      color="secondary"
                      outlined={true}
                      style={{
                        marginRight: "25px",
                      }}
                    />

                    <Button text="Acessar" type="submit" />
                  </div>
                </div>
              </form>
            </LeftContent>
            <div
              className="hidden md:block col-5 p-0"
              style={{
                borderRadius: "0 12px 12px 0",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;

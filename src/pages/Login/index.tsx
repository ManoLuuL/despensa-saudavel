import { FC } from "react";
import { Button } from "../../components/molecules/button";
import { useForm } from "../../globals/use-form";
import { Container, LeftContent } from "./styles";
import { LoginFormType } from "./types";

export const LoginPage: FC = () => {
  const { handleSubmit } = useForm<LoginFormType>();

  const onSubmit = () => {
    handleSubmit(async (data: LoginFormType) => {
      // const loginData = await login({
      //   ...data,
      // });
    });
  };

  return (
    <>
      <Container>
        <div className="flex justify-content-start h-full main-content">
          <LeftContent className="flex flex-column h-full">
            <div className="flex align-item-center justify-content-center mb-3">
              {/* <img src={Logo} alt="logo" className="w-full" /> */}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              noValidate={true}
              className="flex justify-content-between flex-grow-1 flex-column"
            >
              <div className="col-12 flex flex-column gap-3">
                <p className="col-12">Acesse para continuar</p>

                {/* <PasswordPreInput
                    name="password"
                    controller={controller}
                    validationRules={{
                      required: true
                    }}
                  /> */}

                <div className="col-12 flex justify-content-between flex-column md:flex-row p-0 gap-2 md:gap-0">
                  <Button text="Esqueceu a senha" outlined={true} />

                  <Button text="Acessar" type="submit" />
                </div>
              </div>
            </form>
          </LeftContent>
          <div
            className="hidden md:block col-5 p-0"
            style={{
              borderRadius: "0 12px 12px 0",
              // backgroundImage: `url(${randImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </Container>

      {/* <Suspense fallback={<LoadPanel isLoading={true} target={`body`} />}>
          {visibleForgotPassword && (
            <ModalForgotPassword
              onHide={() => setVisibleForgotPassword(false)}
              onConfirmEmail={email => {
                changePassEmail.current = email;
                setVisibleResendEmail(true);
              }}
            />
          )}
  
          
  
          
  
          
         
        </Suspense> */}
    </>
  );
};

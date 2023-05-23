import { Container } from "./styles";
import { FC } from "react";
import { InternalModalFooterProps } from "./types";
import { Button } from "../../../molecules/button-custom";

export const ModalFooter: FC<InternalModalFooterProps> = (props) => {
  const {
    handleConfirm,
    handleClose,
    isSubmitting,
    cancelButtonConfig,
    confirmButtonConfig,
    internalDisableAllButtons: disableAllButtons,
    hide,
    formId,
    hasConfirmFunction,
    hasCloseFunction,
  } = props;

  if (hide) return null;

  const hasForm = !!formId;

  return (
    <Container className="flex w-full justify-content-end align-items-center gap-2">
      {hasCloseFunction && (
        <Button
          text="Cancelar"
          color="secondary"
          icon={{
            name: "cancel",
            size: 15,
            filled: false,
          }}
          rounded={true}
          disabled={disableAllButtons || isSubmitting}
          onClick={handleClose}
          outlined={true}
          {...cancelButtonConfig}
        />
      )}
      {hasConfirmFunction && (
        <Button
          icon={{
            name: "check_circle",
            size: 15,
            filled: false,
          }}
          rounded={true}
          text="Confirmar"
          color="success"
          elementAttributes={
            hasForm
              ? {
                  form: formId,
                }
              : undefined
          }
          disabled={disableAllButtons || isSubmitting}
          loading={isSubmitting}
          type={hasForm ? "submit" : "button"}
          onClick={() => !hasForm && handleConfirm()}
          className="px-7"
          {...confirmButtonConfig}
        />
      )}
    </Container>
  );
};

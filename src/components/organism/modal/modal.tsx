import { FC, FormEvent, useCallback, useState } from "react";
import { Container } from "./styles";
import { Dialog } from "primereact/dialog";
import { ModalFooter } from "./footer";
import { ModalHeader } from "./header/header";
import { ModalProps } from "./types";
import { useTheme } from "styled-components";
import { getNewUUID } from "../../../globals/utils/random";
import { Divider } from "primereact/divider";

export const Modal: FC<ModalProps> = (props) => {
  const {
    onHide,
    cancelButtonConfig,
    children,
    className,
    confirmButtonConfig,
    customFooter,
    customHeader,
    disableAllButtons,
    hasForm,
    hideFooter,
    hideHeader,
    id,
    onConfirm,
    style,
    title,
    width,
    height,
    closeOnOutsideClick = false,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDefaultConfirm = useCallback(async () => {
    if (!onConfirm) return;

    setIsSubmitting(true);

    try {
      const isConfirmSuccessful = await onConfirm();

      if (isConfirmSuccessful && onHide) onHide();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  }, [onConfirm, onHide]);

  const handleHasFormConfirm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // como pode haver um formulário abaixo do modal,
      // stopPropagation é chamado para garantir que somente esse submit seja chamado
      e.stopPropagation();

      await handleDefaultConfirm();
    },
    [handleDefaultConfirm]
  );

  const handleConfirm = async () => await handleDefaultConfirm();

  const formId = getNewUUID();

  const theme = useTheme();

  return (
    <Dialog
      id={id}
      className={className}
      visible={true}
      onHide={
        onHide ??
        (() => {
          //
        })
      }
      header={null}
      closeOnEscape={true}
      breakpoints={
        width && typeof width !== "string"
          ? {
              [theme.breakPoints.sm]: width.mobile,
            }
          : undefined
      }
      style={{
        height,
        width: width
          ? typeof width === "string"
            ? width
            : width.default
          : "unset",
        ...style,
      }}
      footer={null}
      draggable={false}
      resizable={false}
      dismissableMask={closeOnOutsideClick}
      showHeader={false}
      keepInViewport={false}
      blockScroll={true}
      closable={true}
    >
      <Container>
        <div className="base-modal-header">
          {customHeader ?? (
            <>
              <ModalHeader
                handleClose={onHide}
                isSubmitting={isSubmitting}
                internalDisableAllButtons={disableAllButtons}
                hide={!!hideHeader}
                title={title}
                hasCloseFunction={!!onHide}
              />
              <Divider />
            </>
          )}
        </div>

        {hasForm ? (
          <form id={formId} onSubmit={handleHasFormConfirm} noValidate={true}>
            {children}
          </form>
        ) : (
          children
        )}

        {customFooter ?? (
          <ModalFooter
            handleClose={onHide}
            handleConfirm={handleConfirm}
            isSubmitting={isSubmitting}
            cancelButtonConfig={cancelButtonConfig}
            confirmButtonConfig={confirmButtonConfig}
            internalDisableAllButtons={disableAllButtons}
            hide={!!hideFooter}
            formId={hasForm ? formId : undefined}
            hasConfirmFunction={!!onConfirm}
            hasCloseFunction={!!onHide}
          />
        )}
      </Container>
    </Dialog>
  );
};

import { ButtonCustom } from "../../../molecules/button-custom";
import { FC } from "react";
import { HeaderTitle } from "./styles";
import { InternalModalHeaderProps } from "./types";

export const ModalHeader: FC<InternalModalHeaderProps> = (props) => {
  const {
    title,
    handleClose,
    isSubmitting,
    internalDisableAllButtons: disableAllButtons,
    hide,
    closeButtonConfig,
    hasCloseFunction,
  } = props;

  if (hide) return null;

  return (
    <div className="flex align-items-center justify-content-between p-2">
      {typeof title === "string" ? <HeaderTitle>{title}</HeaderTitle> : title}
      {hasCloseFunction && (
        <ButtonCustom
          icon="close"
          onClick={handleClose}
          outlined={true}
          rounded={true}
          color="secondary"
          size="small"
          disabled={disableAllButtons || isSubmitting}
          {...closeButtonConfig}
        />
      )}
    </div>
  );
};

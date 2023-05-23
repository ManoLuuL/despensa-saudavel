import { FC } from "react";
import { HeaderTitle } from "./styles";
import { InternalModalHeaderProps } from "./types";
import { Button } from "../../../molecules/button-custom";

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
    <div className="flex align-items-center justify-content-between pb-3">
      {typeof title === "string" ? <HeaderTitle>{title}</HeaderTitle> : title}
      {hasCloseFunction && (
        <Button
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

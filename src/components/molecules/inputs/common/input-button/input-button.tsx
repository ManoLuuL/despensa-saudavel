import { FC } from "react";
import { Button } from "../../../new-button";
import { INPUT_BUTTONS_SIZE_IN_REM } from "../consts";
import { InputButtonProps } from "./types";

export const InputButton: FC<InputButtonProps> = (props) => (
  <Button
    rounded={true}
    outlined={true}
    {...props}
    elementAttributes={{
      style: {
        height: INPUT_BUTTONS_SIZE_IN_REM + "rem",
        width: INPUT_BUTTONS_SIZE_IN_REM + "rem",
      },
      ...props.elementAttributes,
    }}
  />
);

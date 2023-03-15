import { FC } from "react";
import { Container } from "./styles";
import { InputButton } from "./input-button";
import { InputButtonsContainerProps } from "./types";

export const InputButtonsContainer: FC<InputButtonsContainerProps> = (
  props
) => {
  const { canClear, handleClear } = props;

  return (
    <Container>
      {canClear && (
        <InputButton
          onClick={handleClear}
          tooltip="Limpar"
          elementAttributes={{
            tabIndex: -1,
          }}
        />
      )}
    </Container>
  );
};

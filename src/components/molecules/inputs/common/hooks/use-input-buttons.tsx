import { useMemo } from 'react';
import { UseInputButtonsProps } from './types';
import { InputButtonsContainer } from '../input-button/input-buttons-container';
import { INPUT_BUTTONS_GAP_IN_REM, INPUT_BUTTONS_SIZE_IN_REM } from '../consts';

export const useInputButtons = (props: UseInputButtonsProps) => {
  const { buttons, info, canClear, handleClear } = props;

  // calcula a quantidade de buttons no input e define um padding para ser aplicado à direita do input, evitando que os buttons cubram o texto
  const padding = useMemo(() => {
    let totalButtons = buttons.length;
    canClear && totalButtons++;
    !!info && totalButtons++;

    const aditionalGap = (totalButtons - 1) * INPUT_BUTTONS_GAP_IN_REM;

    return totalButtons * INPUT_BUTTONS_SIZE_IN_REM + aditionalGap + 0.5625; // quando somados, esses valores são ideais para que os botões de ação não cubram o texto
  }, [buttons.length, canClear, info]);

  const InputButtons = useMemo(
    () => (
      <InputButtonsContainer
        buttons={buttons}
        info={info}
        canClear={canClear}
        handleClear={handleClear}
      />
    ),
    [buttons, info, canClear, handleClear]
  );

  return {
    padding,
    InputButtons
  };
};

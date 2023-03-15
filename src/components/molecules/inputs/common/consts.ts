// usado para uma documentação ideal
import { getInputIdByName } from "./utils"; // eslint-disable-line @typescript-eslint/no-unused-vars

// consts definidas em REM para que o tamanho do input possa ser definido na mesma unidade de medida
export const INPUT_PADDING_SIZE_IN_REM = 0.35;
export const INPUT_BUTTONS_SIZE_IN_REM = 1 + INPUT_PADDING_SIZE_IN_REM;
export const INPUT_BUTTONS_GAP_IN_REM = 0.1;

export const INPUT_ERROR_HEIGHT_IN_PIXELS = 14;

/**
 * se você pretende obter o ID do input,
 * @see getInputIdByName
 */
export const INPUT_ID_PREFIX = "input-";

/**
 * tempo padrão para chamada de validação de inputs
 */
export const DEFAULT_VALIDATION_DEBOUNCER_TIMER_IN_MILISSECONDS = 650;

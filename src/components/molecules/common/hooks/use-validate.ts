import { useCallback } from "react";
import { InputValidationRules } from "../types";

export const useValidate = () => {
  const validate = useCallback(
    async <ValType>(
      value: ValType,
      label: string,
      validationRules?: InputValidationRules<ValType>,
      defaultValue?: ValType
    ) => {
      let validationError: string | undefined;
      if (
        validationRules &&
        ((!validationRules.required &&
          value !== null &&
          value !== undefined &&
          value !== "") ||
          validationRules.required)
      ) {
        if (validationRules.unique) {
          if (
            value !== undefined &&
            value !== "" &&
            value !== null &&
            defaultValue !== value
          ) {
            const existe = await validationRules.unique(value);
            if (existe) validationError = "Valor já existente";
          }
        }
      }

      if (!validationError && validationRules?.customValidation) {
        const customValidationReturn = await validationRules.customValidation(
          value
        );
        if (customValidationReturn) validationError = customValidationReturn;
      }

      if (validationRules && validationRules.required) {
        if (
          value === undefined ||
          value === null ||
          value === "" ||
          ((value as []) ?? []).length === 0
        )
          validationError = "Campo Obrigatorio";
      }
      return validationError;
    },
    []
  );

  return { validate };
};

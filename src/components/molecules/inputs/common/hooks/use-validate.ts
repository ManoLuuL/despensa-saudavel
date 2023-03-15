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
        if (validationRules.min) {
          if (Number(value) < validationRules.min)
            validationError = "Campo não atingiu o valor minimo";
        }
        if (validationRules.max) {
          if (Number(value) > validationRules.max)
            validationError = "Campo superou o valor maximo";
        }

        const maxLen = validationRules.maxLength || 100;
        if (((value as string) ?? "").length > maxLen)
          validationError = "Campo passou a quantidade de caracteres";

        if (validationRules.minLength) {
          if (((value as string) ?? "").length < validationRules.minLength)
            validationError = "Campo não atingiu a quantidade de caracteres";
        }

        if (validationRules.unique) {
          if (
            value !== undefined &&
            value !== "" &&
            value !== null &&
            defaultValue !== value
          ) {
            const existe = await validationRules.unique(value);
            if (existe) validationError = "Valor informado já existe";
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
          validationError = "Preencha os campos obrigatorios";
      }
      return validationError;
    },
    []
  );

  return { validate };
};

import { useState } from "react";
import { TextInput } from "../../inputs/text-input/text-input";
import { TextValueType } from "../../inputs/text-input/types";
import { EmailPreInputProps } from "./types";

export const EmailPreInput = <Controller = null,>(
  props: EmailPreInputProps<Controller>
) => {
  const { name = "email", label = "E-mail", onChange, validationRules } = props;
  const [value, setValue] = useState<TextValueType>();

  const checkEmailIsValid = (value: string) => {
    if (value.includes("@") || !value) {
      return null;
    } else return "E-mail invalido";
  };

  return (
    <TextInput
      {...props}
      name={name as Controller extends null ? string : keyof Controller}
      label={label}
      validationRules={{
        ...validationRules,
        customValidation: (currentValue) => {
          const emailValidation = checkEmailIsValid(currentValue || "");
          if (emailValidation) return emailValidation;

          return validationRules?.customValidation?.(currentValue) ?? null;
        },
      }}
      value={value}
      onChange={(e) => {
        const newValue = (e ?? "").toLowerCase();
        setValue(newValue);
        onChange?.(newValue, e);
      }}
    />
  );
};

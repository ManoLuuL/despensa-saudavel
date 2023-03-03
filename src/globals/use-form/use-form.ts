import { useCallback, useEffect, useMemo, useRef } from "react";
import { DefaultInputRef } from "../../components/common/types";
import {
  AddField,
  Controller,
  DynamicErrorType,
  FieldType,
  HandleSubmitErrorCallback,
  HandleSubmitSuccessCallback,
  InputRef,
  SetupField,
  UseFormProps,
} from "./types";
import { LogUseFormError } from "./utils";

export const useForm = <DataType = never>(props?: UseFormProps<DataType>) => {
  const fields = useRef<FieldType<DataType>[]>([]);

  const queue = useRef<
    {
      name: keyof DataType;
      action: keyof InputRef<DataType>;
      value: Parameters<InputRef<DataType>[keyof InputRef<DataType>]>;
    }[]
  >([]);

  const handleChange = useCallback(
    (name: keyof DataType, value: DataType[keyof DataType]) => {
      const field = fields.current.find((field) => field.name === name);
      if (field) field.value = value;
    },
    []
  );

  const addField: AddField<DataType> = useCallback(
    (name, ref) => {
      if (ref) {
        type X = keyof typeof ref;
        const a: X = "clearError";
        ref[a]();
      }
      try {
        const oldField =
          fields.current.find((oldField) => oldField.name === name) ?? null;

        let value: DataType[typeof name] | undefined;

        if (!oldField) {
          if (props?.initialValues) {
            const initialValues = props.initialValues;

            const initialValue =
              initialValues && name in initialValues
                ? initialValues[name] ?? null
                : null;

            if (initialValue !== null) value = initialValue;
          }

          fields.current.push({
            name,
            value: value ?? undefined,
            ref: ref ?? null,
          });
        } else {
          value = oldField.value;
          if (ref) oldField.ref = ref;
        }

        return {
          value: value ?? undefined,
        };
      } catch (error) {
        console.error(
          `Erro ao adicionar campo ${name.toString()} a useForm. Erro: `,
          error
        );
        return {
          value: undefined,
        };
      }
    },
    [props?.initialValues]
  );

  const setupField: SetupField<DataType> = useCallback(
    (name, ref) => {
      try {
        const oldField =
          fields.current.find((oldField) => oldField.name === name) ?? null;

        if (!oldField) addField(name, ref);
        else oldField.ref = ref;

        const tasks = queue.current.filter((task) => task.name === name);
        tasks?.forEach((task) => {
          if (oldField?.ref) {
            (oldField.ref as InputRef<DataType>)[task.action](...task.value);
          }
        });
      } catch (error) {
        console.error(
          `Erro ao configurar campo (setupField) ${name.toString()} a useForm. Erro: `,
          error
        );
      }
    },
    [addField]
  );

  const controller: Controller<DataType> = useMemo(
    () => ({
      addField,
      setupField,
      handleChange,
    }),
    [addField, setupField, handleChange]
  );

  const getField = useCallback((name: keyof DataType) => {
    try {
      const field = fields.current.find((field) => field.name === name);

      if (!field) {
        throw new Error(
          `Campo de nome ${name.toString()} não encontrado! Certifique-se que o campo possui a propriedade 'controller'.`
        );
      }

      return field;
    } catch (error) {
      LogUseFormError({
        methodName: "getField",
        params: { name },
        error,
      });
      return null;
    }
  }, []);

  const getFieldRef = useCallback(
    <ValueType = unknown, FieldType = unknown>(name: keyof DataType) => {
      try {
        const field = getField(name)?.ref as DefaultInputRef<
          ValueType,
          FieldType
        >;

        if (!field) {
          throw new Error(
            `Campo de nome ${name.toString()} não encontrado! Certifique-se que o campo possui a propriedade 'controller'.`
          );
        }

        return field;
      } catch (error) {
        LogUseFormError({
          methodName: "getField",
          params: { name },
          error,
        });
        return null;
      }
    },
    [getField]
  );

  const setValue = useCallback(
    <Key extends keyof DataType>(name: Key, newValue: DataType[Key]) => {
      try {
        const field = getField(name);

        if (field) {
          field?.ref?.setValue(newValue);
        } else
          queue.current.push({ name, action: "setValue", value: [newValue] });
      } catch (error) {
        LogUseFormError({
          methodName: "setValue",
          params: { name, newValue },
          error,
        });
      }
    },
    [getField]
  );

  const getValue = useCallback(
    <Key extends keyof DataType>(name: Key) => {
      try {
        const field = getField(name);

        if (field) return field?.value as DataType[Key];
        return null;
      } catch (error) {
        LogUseFormError({
          methodName: "getValue",
          params: { name },
          error,
        });
        return null;
      }
    },
    [getField]
  );

  const setError = useCallback(
    (name: keyof DataType, error: string) => {
      try {
        const field = getField(name);

        if (field) {
          field?.ref?.setError(error);
        } else queue.current.push({ name, action: "setError", value: [error] });
      } catch (error) {
        LogUseFormError({
          methodName: "setError",
          params: { name, error },
          error,
        });
      }
    },
    [getField]
  );

  const clearError = useCallback(
    (name: keyof DataType) => {
      try {
        const field = getField(name);

        if (field) {
          field?.ref?.clearError();
        } else queue.current.push({ name, action: "clearError", value: [] });
      } catch (error) {
        LogUseFormError({
          methodName: "clearError",
          params: { name },
          error,
        });
      }
    },
    [getField]
  );

  const getError = useCallback(
    (name: keyof DataType) => {
      try {
        const field = getField(name);

        if (field) return field?.ref?.getError();
        return null;
      } catch (error) {
        LogUseFormError({
          methodName: "getError",
          params: { name },
          error,
        });
        return null;
      }
    },
    [getField]
  );

  const getAllValues = useCallback(() => {
    try {
      const values: DataType = {} as DataType;

      fields.current.forEach((field) => {
        values[field.name as keyof DataType] = getValue(
          field.name as keyof DataType
        ) as DataType[keyof DataType];
      });
      return values;
    } catch (error) {
      LogUseFormError({
        methodName: "getAllValues",
        params: {},
        error,
      });
      return null;
    }
  }, [getValue]);

  const focusFirstField = useCallback(() => {
    if (fields.current.length) fields.current[0].ref?.focus();
  }, []);

  useEffect(() => {
    if (!props?.initialValues || !fields.current.length) return;
    const { initialValues } = props;

    fields.current.forEach((field) => {
      const value = initialValues![field.name as keyof typeof initialValues];
      if (value) setValue(field.name, value);
    });
  }, [props, getField, setValue]);

  const setAllValues = useCallback(
    (values: DataType) => {
      try {
        fields.current.forEach((field) => {
          setValue(
            field.name as keyof DataType,
            values[field.name as keyof DataType]
          );
        });
        return null;
      } catch (error) {
        LogUseFormError({
          methodName: "setAllValues",
          params: { values },
          error,
        });
        return null;
      }
    },
    [setValue]
  );

  const validateField = useCallback(
    async (name: keyof DataType) => {
      try {
        const field = getField(name);
        if (field) return (await field.ref?.validate()) ?? null;
        else {
          queue.current.push({ name, action: "validate", value: [] });
          return null;
        }
      } catch (error) {
        LogUseFormError({
          methodName: "validateField",
          params: { name },
          error,
        });
        return null;
      }
    },
    [getField]
  );

  const handleSubmit = useCallback(
    async (
      onSuccess?: HandleSubmitSuccessCallback<DataType>,
      onError?: HandleSubmitErrorCallback<DataType>
    ): Promise<boolean> => {
      try {
        const errors: DynamicErrorType<DataType> =
          {} as DynamicErrorType<DataType>;

        const values: DataType = {} as DataType;

        let errorField: FieldType<DataType> | null = null;
        for (const field of fields.current) {
          const value = field.value as DataType[keyof DataType];
          const error = await field.ref?.validate();
          field.ref?.setError(error ?? "");

          if (error) {
            errors[field.name as keyof DataType] = {
              value,
              message: error,
            };
            if (!errorField) errorField = field;
          } else {
            values[field.name as keyof DataType] = value;
          }
        }

        if (errorField) {
          await onError?.(errors);
          errorField.ref?.focus();
          return false;
        } else {
          await onSuccess?.(values);
          return true;
        }
      } catch (error) {
        LogUseFormError({
          methodName: "handleSubmit",
          params: { onSuccess, onError },
          error,
        });
        return false;
      }
    },
    []
  );

  return {
    controller,
    getField,
    getFieldRef,
    setValue,
    setAllValues,
    getValue,
    getAllValues,
    setError,
    getError,
    clearError,
    focusFirstField,
    validateField,
    handleSubmit,
  };
};

import {
  AddField,
  Controller,
  DynamicErrorType,
  FieldType,
  HandleSubmitErrorCallback,
  HandleSubmitSuccessCallback,
  UseFormProps,
} from "./types";
import { useCallback, useMemo, useRef } from "react";
import { LogUseFormError } from "./utils";
import { DefaultInputRef } from "../../components/molecules/inputs/common/types";

export const useForm = <DataType = never>(props?: UseFormProps<DataType>) => {
  const fields = useRef<FieldType<DataType>[]>([]);

  const addField: AddField<DataType> = useCallback(
    (name, ref) => {
      try {
        const oldField =
          fields.current.find((oldField) => oldField.name === name) ?? null;

        if (!oldField) {
          if (props?.initialValues) {
            const initialValues = props.initialValues;

            const initialValue =
              initialValues && name in initialValues
                ? initialValues[name] ?? null
                : null;

            if (initialValue !== null) {
              ref.setValue(initialValue);
              if (props?.onInitialValueSet?.[name])
                props.onInitialValueSet[name]?.(initialValue, initialValues);
            }
          }

          if (props?.focusField) {
            if (props.focusField === name) ref.focus();
          } else if (!fields.current.length && !props?.disableFocusFirstField) {
            ref.focus();
          }

          fields.current.push({
            name,
            ref,
          });
        } else {
          oldField.ref = ref;
        }
      } catch (e) {
        console.error(e);
      }
    },
    [props]
  );

  const controller: Controller<DataType> = useMemo(
    () => ({
      addField,
    }),
    [addField]
  );

  const getField = useCallback((name: keyof DataType, supressError = false) => {
    try {
      const field = fields.current.find((field) => field.name === name);

      if (!supressError && !field) {
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

  const getAllFields = useCallback(() => fields.current, []);

  const hasField = useCallback(
    (name: keyof DataType) => {
      try {
        return !!getField(name, true);
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

        if (field) field?.ref.setValue(newValue);
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

        if (field) return field.ref.getValue() as DataType[Key];
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

  const clearValue = useCallback(
    (name: keyof DataType) => {
      try {
        const field = getField(name);

        if (field) field.ref.clearValue();
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

  const setError = useCallback(
    (name: keyof DataType, error: string) => {
      try {
        const field = getField(name);

        if (field) field.ref.setError(error);
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

        if (field) field.ref.clearError();
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
        values[field.name] = getValue(field.name) as DataType[keyof DataType];
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
    if (fields.current.length) fields.current[0].ref.focus();
  }, []);

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
        if (field) return await field.ref.validate();
        return null;
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

        if (errorField) {
          await onError?.(errors);

          return false;
        } else {
          await onSuccess?.({ ...values });
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
    getAllFields,
    getFieldRef,
    setValue,
    setAllValues,
    getValue,
    getAllValues,
    clearValue,
    setError,
    getError,
    clearError,
    focusFirstField,
    validateField,
    handleSubmit,
    hasField,
  };
};

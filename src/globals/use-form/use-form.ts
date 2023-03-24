import {
  AddField,
  AddFieldReturnType,
  Controller,
  DynamicErrorType,
  FieldType,
  HandleSubmitErrorCallback,
  HandleSubmitSuccessCallback,
  QueueType,
  UseFormProps,
} from "./types";
import { useCallback, useMemo, useRef } from "react";
import { DefaultInputRef } from "../../components/common/types";

export const useForm = <DataType = never>(props?: UseFormProps<DataType>) => {
  const fields = useRef<FieldType<DataType>[]>([]);
  const queue = useRef<QueueType<DataType>[]>([]);

  const addField: AddField<DataType> = useCallback(
    (name, ref) => {
      let ret: AddFieldReturnType | null = null;
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

          const queuedActions = queue.current.filter(
            (queued) => queued.name === name
          );
          if (queuedActions.length) {
            queuedActions.forEach((queued) => {
              queued.action(ref);
            });
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

      return ret;
    },
    [props]
  );

  const controller: Controller<DataType> = useMemo(
    () => ({
      addField,
    }),
    [addField]
  );

  const getField = useCallback(
    (name: keyof DataType, supressError = false) => {
      try {
        const field = fields.current.find((field) => field.name === name);

        if (!field && (!!props?.disableQueue || !supressError)) {
          throw new Error(
            `Campo de nome ${name.toString()} não encontrado! Certifique-se que o campo possui a propriedade 'controller'.`
          );
        }

        return field;
      } catch (error) {
        console.error(error);
      }
    },
    [props?.disableQueue]
  );

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
        console.error(error);
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
        console.error(error);
      }
    },
    [getField]
  );

  const setValue = useCallback(
    <Key extends keyof DataType>(name: Key, newValue: DataType[Key]) => {
      try {
        const field = getField(name);

        if (field) field?.ref.setValue(newValue);
        else {
          queue.current.push({
            name,
            action: (ref) => ref.setValue(newValue),
          });
        }
      } catch (error) {
        console.error(error);
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
        console.error(error);
      }
    },
    [getField]
  );

  const clearValue = useCallback(
    (name: keyof DataType) => {
      try {
        const field = getField(name);

        if (field) field.ref.clearValue();
        else {
          queue.current.push({
            name,
            action: (ref) => ref.clearValue(),
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [getField]
  );

  const setError = useCallback(
    (name: keyof DataType, error: string) => {
      try {
        const field = getField(name);

        if (field) field.ref.setError(error);
        else {
          queue.current.push({
            name,
            action: (ref) => ref.setError(error),
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    [getField]
  );

  const clearError = useCallback(
    (name: keyof DataType) => {
      try {
        const field = getField(name);

        if (field) field.ref.clearError();
        else {
          queue.current.push({
            name,
            action: (ref) => ref.clearError(),
          });
        }
      } catch (error) {
        console.error(error);
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
        console.error(error);
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
      console.error(error);
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
        console.error(error);
      }
    },
    [setValue]
  );

  const validateField = useCallback(
    async (name: keyof DataType) => {
      try {
        const field = getField(name);
        if (field) return await field.ref.validate();
        else {
          queue.current.push({
            name,
            action: (ref) => ref.validate(),
          });
        }
        return null;
      } catch (error) {
        console.error(error);
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
          const value = field.ref.getValue() as DataType[keyof DataType];

          const error = await field.ref?.validate();
          field.ref.setError(error ?? "");

          if (error) {
            errors[field.name] = {
              value,
              message: error,
            };
            if (!errorField) errorField = field;
          }
        }

        if (errorField) {
          await onError?.(errors);
          errorField.ref.focus();
          return false;
        } else {
          await onSuccess?.({ ...values });
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      return false;
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

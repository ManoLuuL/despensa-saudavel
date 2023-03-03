import { DefaultInputRef } from "../../components/common/types";
import { useForm } from "./use-form";

export type UseFormProps<DataType> = {
  initialValues?: { [key in keyof DataType]?: DataType[key] };

  /**
   * Se true, não foca o 1° campo do formulário
   */
  disableFocusFirstField?: boolean;
};

type UseFormFieldValueType<DataType> = DataType[keyof DataType] | undefined;
export type UseFormFieldRefType<DataType> = DefaultInputRef<
  UseFormFieldValueType<DataType>,
  unknown
> | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputRef<DataType> = DefaultInputRef<DataType[keyof DataType], any>;

export type FieldType<DataType> = {
  name: keyof DataType;
  value: UseFormFieldValueType<DataType>;
  ref: UseFormFieldRefType<DataType>;
};

export type AddField<DataType> = (
  name: keyof DataType,
  ref?: UseFormFieldRefType<DataType>
) => {
  value: UseFormFieldValueType<DataType>;
};

export type SetupField<DataType> = (
  name: keyof DataType,
  ref: UseFormFieldRefType<DataType>
) => void;

export type Controller<DataType = unknown> = {
  addField: AddField<DataType>;
  setupField: SetupField<DataType>;
  handleChange: (name: keyof DataType, value: DataType[keyof DataType]) => void;
};

export type DynamicErrorType<DataType> = {
  [key in keyof DataType]: {
    value: DataType[keyof DataType];
    message: string;
  };
};

export type HandleSubmitSuccessCallback<DataType> = (
  data: DataType
) => void | Promise<void>;

export type HandleSubmitErrorCallback<DataType> = (
  errors: DynamicErrorType<DataType>
) => void | Promise<void>;

export type UseFormReturnType = ReturnType<typeof useForm>;

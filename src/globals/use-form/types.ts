import { DefaultInputRef } from "../../components/molecules/inputs/common/types";
import { useForm } from "./use-form";

export type UseFormProps<DataType> = {
  initialValues?: Partial<DataType>;

  /**
   * Se true, não foca o 1° campo do formulário
   */
  disableFocusFirstField?: boolean;

  focusField?: keyof DataType;

  onInitialValueSet?: {
    [key in keyof DataType]?: (
      initialValue?: DataType[key],
      allInitialValues?: Partial<DataType>
    ) => void | Promise<void>;
  };
};

type UseFormFieldValueType<DataType> = DataType[keyof DataType] | undefined;
export type UseFormFieldRefType<DataType> = DefaultInputRef<
  UseFormFieldValueType<DataType>,
  unknown
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type InputRef<DataType> = DefaultInputRef<DataType[keyof DataType], any>;

export type FieldType<DataType> = {
  name: keyof DataType;
  ref: UseFormFieldRefType<DataType>;
};

export type AddField<DataType> = (
  name: keyof DataType,
  ref: UseFormFieldRefType<DataType>
) => void;

export type Controller<DataType = unknown> = {
  addField: AddField<DataType>;
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

export type UseFormReturnType<DataType = never> = ReturnType<
  typeof useForm<DataType>
>;

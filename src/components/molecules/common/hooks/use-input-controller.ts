import { useEffect } from "react";
import { UseFormFieldRefType } from "../../../../globals/use-form";
import { UseInputControllerProps } from "./types";

export const useInputController = <
  ValueType,
  ElementRefType,
  ElementAttributesType,
  ControllerType
>(
  props: UseInputControllerProps<
    ValueType,
    ElementRefType,
    ElementAttributesType,
    ControllerType
  >
) => {
  const {
    inputProps: { name, controller },
    refFunctions,
  } = props;
  useEffect(() => {
    if (controller) {
      controller.setupField(
        name as keyof ControllerType,
        refFunctions as UseFormFieldRefType<ControllerType>
      );
    }
  }, [name, controller, refFunctions]);
};

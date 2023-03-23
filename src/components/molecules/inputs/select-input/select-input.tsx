import { Dropdown } from "primereact/dropdown";
import {
  forwardRef,
  ForwardedRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useMemo,
} from "react";
import { useInput } from "../common/hooks/use-input";
import { useInputButtons } from "../common/hooks/use-input-buttons";
import { DefaultInputError } from "../common/styles";
import { Container } from "./styles";
import { SelectElementType, SelectInputProps, SelectInputRef } from "./types";
import { useInputController } from "../common/hooks/use-input-controller";
import { getFilterByAsString } from "../common/utils";

export const DefaultItemRender = (text?: string) => <div>{text}</div>;
export const SelectInput = forwardRef(
  <ItemsType extends object, ControllerType = null>(
    props: SelectInputProps<ItemsType, ControllerType>,
    ref: ForwardedRef<SelectInputRef<ItemsType>>
  ) => {
    const {
      items = [],
      name,
      className,
      style,
      buttons = [],
      defaultValue,
      disabled = false,
      showClearButton = true,
      info = "",
      readOnly = false,
      value: controlledValue = null,
      labelKey,
      itemsRender,
      filter = false,
      validationRules,
      elementAttributes,
      valueRender,
      filterBy = [],
      emptyFilterMessage = "Nenhum item encontrado",
    } = props;

    const elementRef = useRef<SelectElementType>(null);

    const {
      inputId,
      value,
      error,
      Label,
      handleError,
      handleChange,
      handleFocusIn,
      handleFocusOut,
      handleValidate,
      styledProps,
    } = useInput({
      inputProps: props,
      options: {
        startValue:
          defaultValue ??
          (controlledValue !== null ? controlledValue : undefined),
      },
    });

    const handleClear = useCallback(
      () => handleChange(undefined),
      [handleChange]
    );

    const { InputButtons, padding } = useInputButtons({
      buttons,
      info,
      canClear: showClearButton && !!value && !(readOnly || disabled),
      handleClear,
    });

    const handleFocus = () => {
      if (elementRef.current) {
        const input = elementRef.current.getFocusInput();

        input.focus();
        input.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    };

    const RefFunctions = useMemo(
      () => ({
        getValue: () => value,
        setValue: handleChange,
        clearValue: handleClear,
        getError: () => error,
        setError: handleError,
        clearError: () => handleError(""),
        focus: handleFocus,
        validate: handleValidate,
        elementRef: elementRef.current ?? null,
      }),
      [error, value, handleClear, handleChange, handleError, handleValidate]
    );

    useImperativeHandle(ref, () => RefFunctions, [RefFunctions]);
    useInputController({
      inputProps: props,
      refFunctions: RefFunctions,
    });

    return (
      <span>
        <Container
          className="p-float-label field"
          {...styledProps}
          padding={padding}
        >
          <Dropdown
            className={className + (items?.length > 0 ? " items" : "")}
            style={style}
            {...elementAttributes}
            id={inputId}
            name={name as string}
            value={controlledValue !== null ? controlledValue : value}
            ref={elementRef}
            onChange={(e) => handleChange(e.value ?? undefined)}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            disabled={disabled}
            readOnly={readOnly}
            required={!!validationRules?.required}
            options={items}
            filterBy={getFilterByAsString(filterBy)}
            emptyMessage={emptyFilterMessage}
            emptyFilterMessage={emptyFilterMessage}
            optionLabel={labelKey as string}
            itemTemplate={
              itemsRender ?? ((item) => DefaultItemRender(item[labelKey]))
            }
            valueTemplate={
              valueRender ??
              itemsRender ??
              ((item) =>
                DefaultItemRender(
                  items?.length ? item?.[labelKey] : "Nenhum item encontrado"
                ))
            }
            filter={filter}
            showOnFocus
            virtualScrollerOptions={
              items && items.length
                ? {
                    delay: 0,
                    showLoader: false,
                    itemSize: 40,
                  }
                : undefined
            }
          />
          {Label}
          {InputButtons}
        </Container>

        {!!error && <DefaultInputError>{error}</DefaultInputError>}
      </span>
    );
  }
);

import { InputNumber } from 'primereact/inputnumber';
import { NumberElementType, NumberInputProps, NumberInputRef } from './types';
import { Container } from './styles';
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';
import { DefaultInputError } from '../common/styles';
import { useInput } from '../common/hooks/use-input';
import { useInputButtons } from '../common/hooks/use-input-buttons';
import { useInputController } from '../common/hooks/use-input-controller';

export const NumberInput = forwardRef(
  <ControllerType = null,>(
    props: NumberInputProps<ControllerType>,
    ref: ForwardedRef<NumberInputRef>
  ) => {
    const {
      className,
      style,
      name,
      defaultValue,
      info = '',
      buttons = [],
      showClearButton = false,
      disabled = false,
      readOnly = false,
      placeholder = '',
      value: controlledValue = null,
      validationRules,
      elementAttributes
    } = props;

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
      styledProps
    } = useInput({
      inputProps: props,
      options: {
        startValue:
          defaultValue ??
          (controlledValue !== null ? controlledValue : undefined)
      }
    });

    const handleFocus = () => {
      if (elementRef.current) {
        const input =
          // getInput() retorna um HTMLInputElement,mas por algum motivo é tipado erroneamente como função(?)
          elementRef.current.getInput() as unknown as HTMLInputElement;

        input.focus();
        input.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    };

    const handleClear = useCallback(() => {
      handleChange(undefined);
      handleFocus();
    }, [handleChange]);

    const { InputButtons, padding } = useInputButtons({
      buttons,
      info,
      canClear: showClearButton && !!value && !(readOnly || disabled),
      handleClear
    });

    const elementRef = useRef<NumberElementType>(null);

    const RefFunctions = useMemo(
      () => ({
        getValue: () => value,
        setValue: handleChange,
        clearValue: handleClear,
        getError: () => error,
        setError: handleError,
        clearError: () => handleError(''),
        focus: handleFocus,
        validate: handleValidate,
        elementRef: elementRef.current ?? null
      }),
      [error, value, handleClear, handleChange, handleError, handleValidate]
    );

    useImperativeHandle(ref, () => RefFunctions, [RefFunctions]);
    useInputController({
      inputProps: props,
      refFunctions: RefFunctions
    });

    return (
      <span>
        <Container className="p-float-label" {...styledProps} padding={padding}>
          <InputNumber
            className={className}
            style={style}
            {...elementAttributes}
            id={inputId}
            required={!!validationRules?.required}
            name={name as string}
            placeholder={placeholder}
            value={
              (controlledValue !== null ? controlledValue : value) ?? undefined
            }
            ref={elementRef}
            onChange={e => handleChange(e.value ?? undefined)}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            disabled={disabled}
            readOnly={readOnly}
            onInvalid={e => e.preventDefault()}
          />
          {Label}
          {InputButtons}
        </Container>

        {!!error && <DefaultInputError>{error}</DefaultInputError>}
      </span>
    );
  }
);

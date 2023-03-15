import { InputText } from 'primereact/inputtext';
import { TextElementType, TextInputProps, TextInputRef } from './types';
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

export const TextInput = forwardRef(
  <ControllerType = null,>(
    props: TextInputProps<ControllerType>,
    ref: ForwardedRef<TextInputRef>
  ) => {
    const {
      name,
      className,
      style,
      placeholder = '',
      defaultValue,
      info = '',
      buttons = [],
      showClearButton = false,
      disabled = false,
      readOnly = false,
      type = 'text',
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
    const elementRef = useRef<TextElementType>(null);

    const handleFocus = useCallback(() => {
      if (elementRef.current) {
        elementRef.current.focus();
        elementRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }, [elementRef]);

    const handleClear = useCallback(() => {
      handleFocus();
      handleChange('');
    }, [handleChange, handleFocus]);
    const { InputButtons, padding } = useInputButtons({
      buttons,
      info,
      canClear: showClearButton && !!value && !(readOnly || disabled),
      handleClear
    });

    const RefFunctions: TextInputRef = useMemo(
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
      [
        error,
        value,
        handleClear,
        handleChange,
        handleError,
        handleFocus,
        handleValidate
      ]
    );

    useImperativeHandle(ref, () => RefFunctions, [RefFunctions]);
    useInputController({
      inputProps: props,
      refFunctions: RefFunctions
    });

    return (
      <span>
        <Container className="p-float-label" {...styledProps} padding={padding}>
          <InputText
            className={className}
            style={style}
            {...elementAttributes}
            type={type}
            id={inputId}
            name={name as string}
            value={(controlledValue !== null ? controlledValue : value) || ''}
            placeholder={placeholder}
            ref={elementRef}
            onChange={e => handleChange(e.target.value ?? '')}
            onFocus={handleFocusIn}
            onBlur={handleFocusOut}
            disabled={disabled}
            readOnly={readOnly}
            required={!!validationRules?.required}
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

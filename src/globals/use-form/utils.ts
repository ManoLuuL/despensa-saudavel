type UseFormErrorProps = {
  methodName: string;
  params?: object;
  error?: unknown;
};

export const LogUseFormError = (props: UseFormErrorProps) => {
  const { methodName, params, error } = props;

  console.error(
    `
    UseForm: erro no método ${methodName}. \n
    Parâmetros: ${JSON.stringify(params)}. \n
    Descrição:`,
    error
  );
};

type DefaultToastOptions = {
  /**
   * Tempo (milissegundos) para a notificação desaparecer.
   */
  timer?: number;
};

export type SuccessToastOptions = DefaultToastOptions;

export type ErrorToastOptions = DefaultToastOptions;

export type WarnToastOptions = DefaultToastOptions;

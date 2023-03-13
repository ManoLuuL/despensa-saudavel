import { useEffect } from 'react';
import { useTimeout } from './use-timeout';

/**
 * executa função após array de dependências não ser alterado em x(delay) milissegundos
 *
 * @param callback função a ser executada após delay
 * @param delay tempo (MILISSEGUNDOS) a serem esperados entre eventos
 * @param dependencies array de dependências que causam a disparação do callback
 *
 * @see https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/3-useDebounce/useDebounce.js
 * @see https://www.youtube.com/watch?v=cjIswDCKgu0
 */
export const useDebounce = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => void,
  delay: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dependencies: any[]
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);

  // effect não deve ser chamado na 1° renderização
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(clear, []);
};

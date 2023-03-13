import { useCallback, useEffect, useRef } from 'react';

/**
 *  executa função de callback após x(delay) milissegundos
 *
 * @param callback função a ser executada após delay
 * @param delay tempo (MILISSEGUNDOS) a serem esperados para disparar a função
 *
 * @see https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/2-useTimeout/useTimeout.js]
 * @see https://youtu.be/0c6znExIqRw?t=121
 */
export const useTimeout = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (...args: any[]) => void,
  delay: number
) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};

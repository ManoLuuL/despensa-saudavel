import { RefObject, useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect';
// @see https://usehooks-ts.com/react-hook/use-event-listener

export function useEventListener<
  EventMediaQuery extends keyof MediaQueryListEventMap
>(
  eventName: EventMediaQuery,
  handler: (event: MediaQueryListEventMap[EventMediaQuery]) => void,
  element: RefObject<MediaQueryList>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<EventWindowMap extends keyof WindowEventMap>(
  eventName: EventWindowMap,
  handler: (event: WindowEventMap[EventWindowMap]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<
  EventHTMLElement extends keyof HTMLElementEventMap,
  ElementType extends HTMLElement = HTMLDivElement
>(
  eventName: EventHTMLElement,
  handler: (event: HTMLElementEventMap[EventHTMLElement]) => void,
  element: RefObject<ElementType>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<Event extends keyof DocumentEventMap>(
  eventName: Event,
  handler: (event: DocumentEventMap[Event]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions
): void;

export function useEventListener<
  EventWindow extends keyof WindowEventMap,
  EventHTMLElement extends keyof HTMLElementEventMap,
  EventMediaQuery extends keyof MediaQueryListEventMap,
  ElementType extends HTMLElement | MediaQueryList | void = void
>(
  eventName: EventWindow | EventHTMLElement | EventMediaQuery,
  handler: (
    event:
      | WindowEventMap[EventWindow]
      | HTMLElementEventMap[EventHTMLElement]
      | MediaQueryListEventMap[EventMediaQuery]
      | Event
  ) => void,
  element?: RefObject<ElementType>,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define o elemento alvo a ser escutado
    const targetElement: ElementType | Window = element?.current ?? window;

    // Se os elementos não existem, interrompe a execução
    if (!(targetElement && targetElement.addEventListener)) return;

    // Cria um manipulador da função armazenada na ref
    const listener: typeof handler = event => savedHandler.current(event);

    // Adiciona o evento com os parâmetros informados
    targetElement.addEventListener(eventName, listener, options);

    // Remove os eventos
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

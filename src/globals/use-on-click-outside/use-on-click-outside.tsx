import { RefObject } from 'react';
import { useEventListener } from '../use-event-listener';

// @see https://usehooks-ts.com/react-hook/use-on-click-outside

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: Handler,
  mouseEvent?: 'mousedown' | 'mouseup'
): void;

export function useOnClickOutside(
  ref: RefObject<HTMLElement>[],
  handler: Handler,
  mouseEvent?: 'mousedown' | 'mouseup'
): void;

export function useOnClickOutside(
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
) {
  useEventListener(mouseEvent, event => {
    let isValid = true;
    if (Array.isArray(refs)) {
      refs.forEach(ref => {
        const el = ref?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target as Node)) isValid = false;
      });
    } else {
      const el = refs?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) isValid = false;
    }

    if (!isValid) return;
    handler(event);
  });
}

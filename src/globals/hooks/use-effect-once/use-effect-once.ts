import { useEffect } from 'react';
import { EffectCallbackType } from './types';

export const useEffectOnce = (callback: EffectCallbackType) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
};

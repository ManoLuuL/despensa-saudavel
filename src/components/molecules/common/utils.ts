import { INPUT_ID_PREFIX } from './consts';

export const getInputIdByName = (name: string) => INPUT_ID_PREFIX.concat(name);

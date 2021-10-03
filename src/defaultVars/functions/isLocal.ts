import { toBoolean } from './toBoolean';

export const isLocal = (isLocal: string | undefined): boolean => {
  return toBoolean(isLocal);
};

import { toBoolean } from './toBoolean';

/**
 * isAWS is true when functionName is not a test function,
 * and not empty or undefined
 * @param {string | undefined} functionName
 * @returns {boolean}
 */
export const isAWS = (
  isLocal: string | undefined,
  functionName: string | undefined,
): boolean => {
  return (
    toBoolean(isLocal) === false &&
    functionName !== undefined &&
    functionName !== '' &&
    functionName !== 'test_function'
  );
};

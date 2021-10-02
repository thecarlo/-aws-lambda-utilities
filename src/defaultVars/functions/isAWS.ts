/**
 * isAWS is true when functionName is not a test function,
 * and not empty or undefined
 * @param {string | undefined} functionName
 * @returns {boolean}
 */
export const isAWS = (functionName: string | undefined): boolean => {
  return (
    functionName !== undefined &&
    functionName !== '' &&
    functionName !== 'test_function'
  );
};

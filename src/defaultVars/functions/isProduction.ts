/**
 * isProduction=true when environment='prd'
 * and functionName not undefined, empty or
 * a test function
 * @param {string | undefined} environment
 * @param {string | undefined} functionName
 * @returns {boolean}
 */
export const isProduction = (
  environment: string | undefined,
  functionName: string | undefined,
): boolean => {
  return (
    environment !== undefined &&
    environment !== '' &&
    environment.toLowerCase() === 'prd' &&
    functionName !== undefined &&
    functionName !== '' &&
    functionName !== 'test_function'
  );
};

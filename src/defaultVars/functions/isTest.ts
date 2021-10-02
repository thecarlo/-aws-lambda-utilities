export const isTest = (environment: string | undefined): boolean => {
  return (
    environment !== undefined &&
    environment !== '' &&
    environment.toLowerCase() === 'test'
  );
};

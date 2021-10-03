export const toBoolean = (value: string | undefined): boolean => {
  if (value !== undefined && value === 'true') {
    return true;
  }

  return false;
};

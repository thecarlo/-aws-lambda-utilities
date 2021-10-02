import { LOG_LEVELS } from '../../enums/logLevels';

export const getLogLevel = (logLevel: string): string => {
  const level = logLevel || '';
  const uppercaseLogLevel = level.toUpperCase();

  // if logLevel is empty, return info
  if (level === '') {
    return LOG_LEVELS.INFO;
  }

  // if logLevel is invalid, return info
  if (!Object.keys(LOG_LEVELS).includes(uppercaseLogLevel)) {
    return LOG_LEVELS.INFO;
  }

  // if logLevel is valid, return whatever the logLevel is set to
  if (Object.keys(LOG_LEVELS).includes(uppercaseLogLevel)) {
    return level;
  }

  return LOG_LEVELS.INFO;
};

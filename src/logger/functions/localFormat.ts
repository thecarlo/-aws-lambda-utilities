import winston, { format } from 'winston';

import { appendAppDetails } from './appendAppDetails';
import { formatMetaData } from './formatMetadata';

export const localFormat = (): winston.Logform.Format => {
  return format.combine(
    format.timestamp(),
    appendAppDetails(),
    format.metadata({
      fillExcept: [
        'message',
        'level',
        'timestamp',
        'label',
        'lambdaName',
        'lambdaVersion',
      ],
    }),
    format((info) => {
      info.level = info.level.toUpperCase();
      return info;
    })(),
    format.colorize(),
    format.printf((info) => {
      return `[${info.level}] ${info.timestamp} ${
        info.message
      } ${formatMetaData(info.metadata)}`;
    }),
  );
};

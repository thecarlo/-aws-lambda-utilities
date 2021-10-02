import { isEmpty } from 'lodash';
import winston, { format } from 'winston';

import { appendAppDetails } from './appendAppDetails';

export const localFormat = (): winston.Logform.Format => {
  return format.combine(
    format.timestamp(),
    format.splat(),
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
      return `[${info.level}] ${info.timestamp} ${info.message} ${
        !isEmpty(info.metadata) ? JSON.stringify(info.metadata) : ''
      }`;
    }),
  );
};

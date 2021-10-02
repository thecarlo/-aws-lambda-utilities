import { isEmpty } from 'lodash';
import winston, { format } from 'winston';

import { appendAppDetails } from './appendAppDetails';

export const fileFormat = (): winston.Logform.Format => {
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
      if (isEmpty(info.metadata)) {
        delete info.metadata;
      }

      return info;
    })(),
    format.json(),
  );
};

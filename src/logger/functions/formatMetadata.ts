/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from 'lodash';

export const formatMetaData = (metadata: any): any => {
  if (isEmpty(metadata)) {
    return '';
  }

  if (metadata.error && metadata.error instanceof Error) {
    metadata.error = Object.assign(
      { message: metadata.error.message, stack: metadata.error.stack },
      metadata.error,
    );
  }

  return JSON.stringify(metadata);
};

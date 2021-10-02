/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { format } from 'winston';

import { DefaultVars } from '../../defaultVars';

export const appendAppDetails = format((info) => {
  const { lambdaFunctionName, lambdaFunctionVersion } = new DefaultVars();

  return Object.assign(info, {
    lambdaName: lambdaFunctionName(),
    lambdaVersion: lambdaFunctionVersion(),
  });
});

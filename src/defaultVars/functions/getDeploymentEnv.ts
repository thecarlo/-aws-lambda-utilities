import { DEPLOYMENT_ENVS } from '../../enums/deploymentEnvs';

export const getDeploymentEnv = (nodeEnv: string): string => {
  const deploymentEnv = nodeEnv || '';
  const uppercaseNodeEnv = deploymentEnv.toUpperCase();

  // if nodeEnv is empty, return dev
  if (deploymentEnv === '') {
    return DEPLOYMENT_ENVS.DEV;
  }

  // if nodeEnv is invalid, return dev
  if (!Object.keys(DEPLOYMENT_ENVS).includes(uppercaseNodeEnv)) {
    return DEPLOYMENT_ENVS.DEV;
  }

  // if nodeEnv is valid, return whatever the nodeEnv is set to
  if (Object.keys(DEPLOYMENT_ENVS).includes(uppercaseNodeEnv)) {
    return deploymentEnv;
  }

  return DEPLOYMENT_ENVS.DEV;
};

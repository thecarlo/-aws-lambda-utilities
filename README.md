# aws-lambda-utilities

Useful utilities and functions for aws lambda projects

## Using the logger

Import the logger:

`import { Logger } from 'aws-lambda-utilities';`

Create a new instance of the logger class:

`const logger = new Logger();`

Log a info message:

`logger.info('Received event');`

Log a info message with an object:

`logger.info('Received event', { event });`

Log an error:

`logger.error('Lambda error', { error });`

Always wrap objects

## Using the DefaultVars class

The `DefaultVars` class exposes a list of standard lambda environment variables.

`DefaultVars` exposes environment variables through the following methods:

`awsProfile()`, `awsRegion()`, `nodeEnv()`, `awsLocalStackEndpoint()`, `lambdaFunctionName()`, `lambdaFunctionVersion()`, `logLevel()`, `isTest()`, `isAWS()` and `isProduction()`

## Example DefaultVars implementation

Import the class from

`import { DefaultVars } from 'aws-lambda-utilities';`

Destructure the methods you require:

`const { isAWS, lambdaFunctionName, awsLocalStackEndpoint } = new DefaultVars();`

Use it in code:

```
if(!isAWS()) {
  // ...
}
```

### Extending DefaultVars and adding your own methods

Create a new class called EnvVars (recommended naming convention)

```
import { DefaultVars } from 'aws-lambda-utilities';

const { env } = process;

export class EnvVars extends DefaultVars {
  constructor() {
    super();
  }

  yourEnvVar(): string | undefined {
    return env.YOUR_ENV_VAR;
  }
}
```

### Using the `EnvVars` class

Then, you can simply reference the `EnvVars` class instead of the `DefaultVars` class in your microservice, as the `EnvVars` class will have all the properties of `DefaultVars` and `EnvVars`.

Example usage:

`import { EnvVars } from 'envVars';`

`const { yourEnvVar, isAWS } = new EnvVars();`

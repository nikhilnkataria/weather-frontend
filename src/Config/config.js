/* eslint-disable */
const ENVIRONMENT_VARIABLES = {
  development: {
    apiUrl: 'http://localhost:3002/'
  },
  production: {
    apiUrl: 'http://localhost:3002/'
  }
};

export default function getEnvironmentVariables() {
  const config = ENVIRONMENT_VARIABLES[process.env.NODE_ENV];
  if (!config) {
    throw new Error(`No Config Found for env ${process.env.NODE_ENV}`);
  }

  return {
    apiUrl: config.apiUrl,
    baseName: config.baseName
  };
}

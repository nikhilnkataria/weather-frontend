const ENVIRONMENT_VARIABLES = {
  development: {
    // apiUrl: 'http://localhost:3002/',
    apiUrl: 'http://134.122.126.73/'
  },
  test: {
    apiUrl: 'http://134.122.126.73/'
  },
  production: {
    apiUrl: 'http://134.122.126.73/'
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

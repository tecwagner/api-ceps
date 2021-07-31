export default () => ({
  port: parseInt(process.env.PORT) || 3000,

  apis: {
    cep: {
      baseUrl: process.env.BASE_URL || '',
      timeout: process.env.TIMEOUT || 15000,
    },
  },
  environment: {
    type: process.env.ENVIRONMENT_TYPE || 'production',
    appHost: process.env.APP_HOST || '',
  },
});

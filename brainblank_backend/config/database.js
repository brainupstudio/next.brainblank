module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'brainserver.synology.me'),
      port: env.int('DATABASE_PORT', 3307),
      database: env('DATABASE_NAME', 'strapi-mysql'),
      user: env('DATABASE_USERNAME', 'cloud'),
      password: env('DATABASE_PASSWORD', '1q"W£E$R%'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

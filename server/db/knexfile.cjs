const dotenv = require('dotenv')
const path = require('node:path')

const pg = require('pg')

dotenv.config()

const defaults = {
  useNullAsDefault: true,
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
    loadExtensions: ['.mjs'],
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
    loadExtensions: ['.mjs'],
  },
}
pg.defaults.ssl = process.env.NODE_ENV === 'production'

module.exports = {
  development: {
    ...defaults,
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.PG_USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    ...defaults,
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    useNullAsDefault: true,
  },

  production: {
    ...defaults,
    client: process.env.CLIENT,
    connection: {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}

const dotenv = require('dotenv')
const path = require('node:path')

dotenv.config({ path: path.join(__dirname, '../..', '.env') })

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

module.exports = {
  development: {
    ...defaults,
    client: process.env.CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.LOCAL_PG_USER,
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
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}

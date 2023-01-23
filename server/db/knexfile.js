import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    ...defaults,
    client: 'sqlite3',
    connection: {
      filename: 'dev.sqlite3',
    },
    useNullAsDefault: true,
  },
  test: {
    ...defaults,
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    seeds: {
      ...defaults.seeds,
      directory: path.resolve(__dirname, 'test-seeds'),
    },
  },

  production: {
    ...defaults,
    client: 'sqlite3',
    connection: {
      filename: 'dev.sqlite3',
    },
    useNullAsDefault: true,
  },
}

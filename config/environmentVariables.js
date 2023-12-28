'use strict';

const schema = {
  type: 'object',
  properties: {
    HOST: {
      type: 'string',
      default: '0.0.0.0'
    },
    PORT: {
      type: 'number',
      default: 3000
    },
    DB_PORT: {
      type: 'string',
      default: 3306
    },
    DB_USER: {
      type: 'string',
      default: 'knex'
    },
    DB_PASSWORD: {
      type: 'string',
      default: 'secret'
    },
    DB_NAME: {
      type: 'string',
      default: 'knex'
    },
    DB_MIN_CONNECTIONS: {
      type: 'number',
      default: 0
    },
    DB_MAX_CONNECTIONS: {
      type: 'number',
      default: 30
    }
  }
};

exports.config = { dotenv: true, schema };

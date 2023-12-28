'use strict';

exports.STATUS_TEXTS = {
  400: 'Bad request parameters',
  401: 'Bad or expired token',
  403: 'Insufficient permissions to perform an operation over a resource',
  404: 'Resource Not Found',
  405: 'Method not allowed',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout'
};

exports.STATUS_CODES = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  403: 'REQUEST_FORBIDDEN',
  404: 'NOT_FOUND',
  405: 'METHOD_NOT_ALLOWED',
  500: 'INTERNAL_SERVER_ERROR',
  502: 'BAD_GATEWAY',
  503: 'SERVICE_UNAVAILABLE',
  504: 'GATEWAY_TIMEOUT'
};

exports.MYSQL_DB_ERRORS = {
  1040: { statusCode: 503, errorCode: 'ER_CON_COUNT_ERROR', errorMessage: 'Too many connections' },
  1041: { statusCode: 503, errorCode: 'ER_OUT_OF_RESOURCES', errorMessage: 'Out of memory' },
  1042: { statusCode: 503, errorCode: 'ER_BAD_HOST_ERROR', errorMessage: 'Bad host' },
  1043: { statusCode: 503, errorCode: 'ER_HANDSHAKE_ERROR', errorMessage: 'Handshake error' },
  1044: { statusCode: 403, errorCode: 'ER_DBACCESS_DENIED_ERROR', errorMessage: 'Access denied for user' },
  1045: { statusCode: 401, errorCode: 'ER_ACCESS_DENIED_ERROR', errorMessage: 'Invalid username or password' },
  1050: { statusCode: 409, errorCode: 'ER_TABLE_ALREADY_EXISTS', errorMessage: 'Table already exists' },
  1051: { statusCode: 404, errorCode: 'ER_UNKNOWN_TABLE', errorMessage: 'Unknown table' },
  1062: { statusCode: 409, errorCode: 'ER_DUP_ENTRY', errorMessage: 'Duplicate entry' },
  1064: { statusCode: 400, errorCode: 'ER_PARSE_ERROR', errorMessage: 'Syntax error' },
  1215: { statusCode: 400, errorCode: 'ER_FK_CONSTRAINT_FAILED', errorMessage: 'Foreign key constraint failed' },
  1364: { statusCode: 400, errorCode: 'ER_NO_DEFAULT_FOR_FIELD', errorMessage: 'Field doesn\'t have a default value' },
  1451: { statusCode: 409, errorCode: 'ER_ROW_IS_REFERENCED', errorMessage: 'Cannot delete or update a parent row' },
  1452: { statusCode: 409, errorCode: 'ER_NO_REFERENCED_ROW', errorMessage: 'Cannot add or update a child row' },
};

exports.ERROR_LOGGING_MESSAGES = {
  fatal: 'Fatal: Unhandled Error',
  paramsValidation: 'Validation Error: Schema Validation Error',
  badRequest: 'Validation Error: Bad Request',
  connectionError: 'Validation Error: DB Connection Error',
  mysqlError: 'Validation Error: Mysql Error'
};

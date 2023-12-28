'use strict';

const CustomError = require('../CustomError');
const { MYSQL_DB_ERRORS } = require('../constants');

module.exports = error => {
  if (error.code && MYSQL_DB_ERRORS[error.code]) {
    const { statusCode, errorCode } = MYSQL_DB_ERRORS[error.code];
    const detail = error.detail || error.stack;
    const fieldName = error.column;
    return CustomError.create({
      httpCode: statusCode,
      message: detail,
      property: fieldName,
      code: errorCode
    });
  }
  return undefined;
};

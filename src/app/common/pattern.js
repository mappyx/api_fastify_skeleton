'use strict';

const PASSWORD =
  '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!@#$%^&?*])[a-zA-Z0-9!@#$%^&?*]{8,20}$';
const PHONE_NUMBER = '^\\+\d{1,3}\d+$';

module.exports = {
  PASSWORD,
  PHONE_NUMBER
};

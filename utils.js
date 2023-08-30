const { Op } = require("sequelize");

const getPagination = (query) => {
  const page = Math.abs(query?.page) || 1;
  const limit = Math.abs(query?.size) || 3;

  const offset = limit * (page - 1);

  return { limit, offset };
};

const ApiResponse = (status = "", data = {}) => {
  return { status, data };
};

const httpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  SERVER_ERROR: 500,
};

module.exports = {
  httpStatus,
  getPagination,
  ApiResponse,
};

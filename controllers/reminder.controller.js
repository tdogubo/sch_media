const moment = require("moment");
const { ReminderService } = require("../services");
const { httpStatus, getPagination, ApiResponse } = require("../utils");

const fetchReminders = async (req, res) => {
  const { user, after, page, size } = req.query;
  const { limit, offset } = getPagination({ page, size });
  let date = moment(Number(after)).toISOString();
  const query = { user, date };
  try {
    const reminders = await ReminderService.fetchReminders(
      limit,
      offset,
      query
    );

    return res.status(httpStatus.OK).json(ApiResponse("Successful", reminders));
  } catch (error) {
    return res
      .status(httpStatus.SERVER_ERROR)
      .json(ApiResponse("Failed", error?.message));
  }
};

const getReminder = async (req, res) => {
  const { id } = req.params;
  try {
    const reminders = await ReminderService.getReminder(id);

    return reminders
      ? res.status(httpStatus.OK).json(ApiResponse("Successful", reminders))
      : res.status(httpStatus.NOT_FOUND).json(ApiResponse("Not Found", reminders));
  } catch (error) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(ApiResponse("Failed", error?.message));
  }
};
const createReminder = async (req, res) => {
  const data = req.body;
  try {
    const reminder = await ReminderService.createReminder(data);
    return res.status(httpStatus.CREATED).json(ApiResponse("Successful", reminder));
  } catch (error) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(ApiResponse("Failed", error?.message));
  }
};

module.exports = {
  fetchReminders,
  createReminder,
  getReminder,
};

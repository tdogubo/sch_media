const { Op } = require("sequelize");
const { Reminder, User } = require("../models/reminder.model");

const fetchReminders = async (limit, offset, query) => {
  const reminders = await User.findAll({
    include: [
      {
        model: Reminder,
        ...(query.date && {
          where: { date: { [Op.gte]: query.date } },
        }),
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },

    ...(query.user && {
      where: { id: query?.user },
    }),
    limit,
    offset,
  });
  const count = await User.count();
  reminders.count = count;
  return reminders;
};

const getReminder = async (id) => {
  const reminder = await Reminder.findOne({
    where: { id: id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return reminder;
};

const createReminder = async (data) => {
  const reminder = await Reminder.create(data);
  return reminder;
};

module.exports = {
  fetchReminders,
  createReminder,
  getReminder,
};

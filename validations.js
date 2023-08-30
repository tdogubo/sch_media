const Joi = require("joi");

const ReminderValidation = {
  fetchReminders: Joi.object().keys({
    user: Joi.number().optional(),
    after: Joi.date()
      .timestamp()
      .optional(),
    size: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
  newReminder: Joi.object().keys({
    userId: Joi.number().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
  }),
};

module.exports = {
  ReminderValidation,
};

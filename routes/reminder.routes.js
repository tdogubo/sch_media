const { Router } = require("express");
const { ReminderController } = require("../controllers");
const {  ReminderValidation } = require("../validations");
const ValidatorMiddleware = require("../middleware/validator");

const reminderRouter = Router();

reminderRouter
  .get(
    "/reminders",
    ValidatorMiddleware(ReminderValidation.fetchReminders, "query"),
    ReminderController.fetchReminders
  )
  .get("/reminders/:id", ReminderController.getReminder)
  .post(
    "/reminders",
    ValidatorMiddleware(ReminderValidation.newReminder, "body"),
    ReminderController.createReminder
  );

module.exports = reminderRouter;

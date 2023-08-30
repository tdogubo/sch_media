const express = require("express");
const helmet = require("helmet");
const { httpStatus } = require("./utils");
const reminderRouter = require("./routes/reminder.routes");

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(reminderRouter);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_ALLOWED).send("Not Allowed");
  next();
});

module.exports = app;

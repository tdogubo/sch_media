const { User, sequelize } = require("../models/reminder.model");

/* NOTE: THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  try {
    await sequelize.sync();
    console.log("DB populated Successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  await Promise.all([
    User.create({
      firstName: "John",
      lastName: "Wick",
    }),
    User.create({
      firstName: "Agatha",
      lastName: "Onu",
    }),
  ]);
}

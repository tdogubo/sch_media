const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

class Reminder extends Sequelize.Model {}
Reminder.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "reminders",
  }
);

// const Reminder = sequelize.define(
//   "Reminder",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     description: {
//       type: Sequelize.TEXT,
//       allowNull: false,
//     },
//     date: {
//       type: Sequelize.DATE,
//       allowNull: false,
//     },
//   },

//   {
//     sequelize,
//     modelName: "reminders",
//   }
// );
// const User = sequelize.define(
//   "User",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstName: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "users",
//   }
// );
class User extends Sequelize.Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
  }
);

User.hasMany(Reminder);
Reminder.belongsTo(User);


module.exports = {
  sequelize,
  User,
  Reminder,
};

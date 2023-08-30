const app = require('./app');
const { sequelize } = require('./models/reminder.model');

init();

async function init() {
  const PORT = 3001;
  try {
     await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Express App Listening on Port ${PORT}`);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

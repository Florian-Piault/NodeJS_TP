const { Sequelize, Model, DataType } = require("sequelize");
const sequelize = new Sequelize("sqlite3::memory");

async () => {
  await sequelize.sync();
};

model.exports = { User };

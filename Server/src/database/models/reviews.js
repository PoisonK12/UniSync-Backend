const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Review", {

  },
    {
      timestamps: false,
    }
  )
}
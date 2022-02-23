module.exports = function (sequelize, DataTypes) {
  const coivd = sequelize.define("covid", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    age: DataTypes.INTEGER,
  });

  return coivd;
};

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false
    // },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
      defaultValue: "Paige",
      len: [1, 30]
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 20]
    },
    unitNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 40]
    },
    problem: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 25]
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 250]
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    severity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 10 }
    }
  });
  return Task;
};

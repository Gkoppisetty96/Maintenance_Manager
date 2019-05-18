module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("tasks", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,30],
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,20],
    },
    unit_number:{
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,40],
    },
    problem:{
      type: DataTypes.STRING,
      allowNull: false,
      len: [1,25],
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1,250],
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      DEFAULTVALUE: false,
    },
    severity:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1 , max: 10 } 
    }
  });
  return Example;
};
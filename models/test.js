module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("tasks", {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.VARCHAR,
      allowNull: false,
      len: [1,30],
    },
    zone: {
      type: Sequelize.VARCHAR,
      allowNull: false,
      len: [1,20],
    },
    unit_number:{
      type: Sequelize.VARCHAR,
      allowNull: false,
      len: [1,40],
    },
    problem:{
      type: Sequelize.VARCHAR,
      allowNull: false,
      len: [1,25],
    },
    note: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1,250],
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      DEFAULTVALUE: false,
    },
    severity:{
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: { min: 1 , max: 10 } 
    }
  });
  return Example;
};
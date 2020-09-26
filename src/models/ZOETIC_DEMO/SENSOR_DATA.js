/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SensorData', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'ID'
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'TYPE'
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'DATE'
    },
    reading: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'READING'
    },
    createdTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'CREATED_TIMESTAMP'
    },
    updatedTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'UPDATED_TIMESTAMP'
    }
  }, {
    sequelize,
    tableName: 'SENSOR_DATA'
  });
};

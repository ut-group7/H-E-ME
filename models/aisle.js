module.exports = function (sequelize, DataTypes) {
  var Aisle = sequelize.define("Aisle", {
    aisle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  Aisle.associate = function (models) {
    Aisle.belongsTo(models.Store, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Aisle;
};

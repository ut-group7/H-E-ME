module.exports = function (sequelize, DataTypes) {
  var Aisle = sequelize.define("Aisle", {
    aisle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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

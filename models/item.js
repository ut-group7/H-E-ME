module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      aisle_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });

    Item.associate = function (models) {
      Item.belongsTo(models.Aisle, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    Item.associate = function (models) {
      Item.belongsTo(models.Item_Name, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Item;
  };
  
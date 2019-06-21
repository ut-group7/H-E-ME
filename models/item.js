module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      item_id: {
        type: DataTypes.INTERGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      aisle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      name_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
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
  
module.exports = function(sequelize, DataTypes) {
    var List_Item = sequelize.define("List_Item", {
        list_item_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      item_name_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      list_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    List_Item.associate = function (models) {
        List_Item.belongsTo(models.Item_Name, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      List_Item.associate = function (models) {
        List_Item.belongsTo(models.List, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return List_Item;
  };
  
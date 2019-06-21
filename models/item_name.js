module.exports = function (sequelize, DataTypes) {
    var Item_Name = sequelize.define("Item_Name", {
      item_name_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Item_Name;
  };
  
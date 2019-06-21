module.exports = function (sequelize, DataTypes) {
    var Item_Name = sequelize.define("Item_Name", {
      item_name_id: {
        type: DataTypes.INTERGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    return Item_Name;
  };
  
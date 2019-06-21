module.exports = function(sequelize, DataTypes) {
    var Store = sequelize.define("Store", {
      store_id: {
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
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    Store.associate = function(models) {
        Store.hasMany(models.List);
      };
  
    return Store;
  };
  
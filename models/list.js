module.exports = function(sequelize, DataTypes) {
    var List = sequelize.define("List", {
        list_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
        user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
        store_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    List.associate = function (models) {
        List.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      List.associate = function (models) {
        List.belongsTo(models.Store, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return List;
  };
  
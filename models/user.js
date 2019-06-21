module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
        user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
        password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    User.associate = function(models) {
        User.hasMany(models.List);
      };
  
    return User;
  };
  
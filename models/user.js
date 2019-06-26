/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const user = sequelize.define('user', {
		
		username: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'username'
		},
		password: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'password'
		}
		
	}, {
		tableName: 'user'
  });

  user.associate = function(models) {
    user.hasMany(models.list, {
	});
  };
  
  return user;
};

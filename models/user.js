/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const user = sequelize.define('user', {
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'user_id'
		},
		username: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'username'
		},
		password: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'password'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'updatedAt'
		}
	}, {
		tableName: 'user'
  });

  // user.associate = function(models) {
  //   user.hasMany(models.list);
  // };
  
  return user;
};

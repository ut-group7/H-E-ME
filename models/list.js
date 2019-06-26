/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const list = sequelize.define('list', {
		
		deleted: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'deleted'
		}
	
	}, {
		tableName: 'list'
  });
  
  list.associate = function (models) {
    list.belongsTo(models.user, {
	});
	list.belongsTo(models.store, {
	});
	list.hasMany(models.list_item, {
	});
  };


return list;

};

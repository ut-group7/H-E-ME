/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const item_name = sequelize.define('item_name', {
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'item_name'
  });

  item_name.associate = function(models) {
    models.item_name.hasMany(models.list_item, {
	});
	models.item_name.hasMany(models.item);
  };

  return item_name;
};

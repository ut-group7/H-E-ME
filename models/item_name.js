/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const item_name = sequelize.define('item_name', {
		itemNameId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'item_name_id'
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
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
		tableName: 'item_name'
  });

  // item_name.associate = function(models) {
  //   item_name.hasMany(models.list_item);
  // };

  // item_name.associate = function(models) {
  //   item_name.hasMany(models.item);
  // };
  
  return item_name;
};

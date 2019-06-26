/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const list_item = sequelize.define('list_item', {
		deleted: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'deleted'
		}
		
	}, {
		tableName: 'list_item'
  });
  
  list_item.associate = function (models) {
	models.list_item.belongsTo(models.item_name);
    models.list_item.belongsTo(models.list);
  };


  return list_item;
};

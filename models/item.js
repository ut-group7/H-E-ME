/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const item =  sequelize.define('item', {
		
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'item'
  });
  
  item.associate = function (models) {
    item.belongsTo(models.aisle, {
	});
	item.belongsTo(models.item_name, {
    });
  };

  return item;
};

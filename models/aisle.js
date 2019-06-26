/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const aisle = sequelize.define('aisle', {
		
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		}
	
	}, {
		tableName: 'aisle'
  });
  
  aisle.associate = function (models) {
    aisle.belongsTo(models.store, {
	});
	aisle.hasMany(models.item, {
	});
  };
  return aisle;
};

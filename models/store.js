/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const store = sequelize.define('store', {
		
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'address'
		}
		
	}, {
		tableName: 'store'
  });
  
  store.associate = function(models) {
    store.hasMany(models.list, {
	});
	store.hasMany(models.aisle, {
	});
  };


  return store;
};

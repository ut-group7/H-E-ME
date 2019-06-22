/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const store = sequelize.define('store', {
		storeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'store_id'
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'address'
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
		tableName: 'store'
  });
  
  store.associate = function(models) {
    store.hasMany(models.list);
  };

  return store;
};

/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const aisle = sequelize.define('aisle', {
		aisleId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'aisle_id'
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		},
		storeId: {
			type: DataTypes.INTEGER(40),
			allowNull: false,
			references: {
				model: 'store',
				key: 'store_id'
			},
			field: 'store_id'
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
		tableName: 'aisle'
  });
  
  aisle.associate = function (models) {
    aisle.belongsTo(models.store, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return aisle;
};

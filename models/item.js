/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const item =  sequelize.define('item', {
		itemId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'item_id'
		},
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'name'
		},
		aisleId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'aisle',
				key: 'aisle_id'
			},
			field: 'aisle_id'
		},
		nameId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'item_name',
				key: 'item_name_id'
			},
			field: 'name_id'
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
		tableName: 'item'
  });
  
  // item.associate = function (models) {
  //   item.belongsTo(models.aisle, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // item.associate = function (models) {
  //   item.belongsTo(models.item_name, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  
  return item;
};

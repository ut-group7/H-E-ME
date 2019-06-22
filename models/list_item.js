/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const list_item = sequelize.define('listItem', {
		listItemId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'list_item_id'
		},
		itemNameId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'item_name',
				key: 'item_name_id'
			},
			field: 'item_name_id'
		},
		listId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'list',
				key: 'list_id'
			},
			field: 'list_id'
		},
		deleted: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0',
			field: 'deleted'
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
		tableName: 'list_item'
  });
  
  list_item.associate = function (models) {
    list_item.belongsTo(models.item_name, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  list_item.associate = function (models) {
    list_item.belongsTo(models.list, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return list_item;
};

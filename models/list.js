/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const list = sequelize.define('list', {
		listId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'list_id'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'user_id'
			},
			field: 'user_id'
		},
		storeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'store',
				key: 'store_id'
			},
			field: 'store_id'
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
		tableName: 'list'
  });
  
  list.associate = function (models) {
    list.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  list.associate = function (models) {
    list.belongsTo(models.store, {
      foreignKey: {
        allowNull: false
      }
    });
  };

return list;

};

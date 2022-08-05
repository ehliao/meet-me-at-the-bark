const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OwnerInterest extends Model {}

OwnerInterest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:'owner',
                key:'id',
            },
        },
        interest_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'interest',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ownerinterest',
    }
);

module.exports = OwnerInterest;
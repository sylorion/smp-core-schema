// ./src/models/Follow.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums, assuming FollowedEntityType 
import FollowedEntityType from '../enums/FollowedEntityType.js'; 

export default (db) => {

    class Follow extends BaseEntityMixin(Model) { };

    Follow.init(db, DataTypes, 
        {
        follwID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        followedID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        followedEntity: {
            type: DataTypes.ENUM(Object.values(FollowedEntityType)),
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'Follow',
        tableName: 'Follow',
        timestamps: true,
        paranoid: true // This will add a "deletedAt" column and allow soft deletes
    });
}

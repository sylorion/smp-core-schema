
// ./src/models/NotificationTemplate.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// TODO Create NotificationTemplateCategory and import it

export default (db) => {
    class NotificationTemplates extends BaseEntityMixin(Model) { };

    NotificationTemplates.init(db, DataTypes, 
        {
        notificationTemplateID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
     
    },
        {
            sequelize: db,
            modelName: 'NotificationTemplate',
            tableName: 'NotificationTemplate',
            timestamps: true,
            paranoid: true // This will add a "deletedAt" column and allow soft deletes
        });
        return NotificationTemplates ;
}

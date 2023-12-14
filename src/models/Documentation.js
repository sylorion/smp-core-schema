// src/models/Documentation.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
    class Documentation extends BaseEntityMixin(Model) { };
    
    Documentation.init(db, DataTypes, 
        {
        documentID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // ForeignKey relation is established here
            references: {
                model: 'User', // Assuming the user table is defined as 'User'
                key: 'userID'
            }
        },
        serviceID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // ForeignKey relation is established here
            references: {
                model: 'Service', // Assuming the service table is defined as 'Service'
                key: 'serviceID'
            }
        },
        title: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: DataTypes.TEXT,
        parentDocumentationID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // ForeignKey relation is established here
            references: {
                model: 'Documentation',
                key: 'documentationID'
            }
        },
    },
        {
            sequelize: db,
            modelName: 'Documentation',
            tableName: 'Documentation',
            timestamps: true,
            paranoid: true // This will add a "deletedAt" column and allow soft deletes
        });

    // Establishing foreign key relationships
    Documentation.belongsTo(db.models.User, { foreignKey: 'authorID' });
    Documentation.belongsTo(db.models.Service, { foreignKey: 'serviceID' });
    Documentation.belongsTo(db.models.Documentation, { foreignKey: 'parentDocumentationID' });
    return Documentation;
}

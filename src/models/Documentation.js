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
            allowNull: false
            },
     
        serviceID: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
           
        },
    
            sequelize: db,
            modelName: 'Documentation',
            tableName: 'Documentation',
            timestamps: true,
            paranoid: true // This will add a "deletedAt" column and allow soft deletes
        });

   
     return Documentation;
}
  
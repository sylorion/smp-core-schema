// src/models/ServiceAttribute.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class ServiceAttribute extends BaseEntityMixin(Model) { }

  ServiceAttribute.init(db, DataTypes, 
  {
    attributeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    attributeName: DataTypes.STRING(32),
    attributeValue: DataTypes.STRING(255),
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    }, 
  },
  {
    sequelize: db,
    modelName: 'ServiceAttribute',
    tableName: 'ServiceAttribute',
    timestamps: true,
    paranoid: true,
  });
}
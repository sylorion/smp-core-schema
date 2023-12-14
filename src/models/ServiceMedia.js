// src/models/ServiceMedia.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class ServiceMedia extends BaseEntityMixin(Model) { }

  ServiceMedia.init(db, DataTypes, 
  {
    serviceMediaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    mediaID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    legend: DataTypes.STRING(255),
    listingPosition: DataTypes.INTEGER, 
  },
  {
    sequelize: db,
    modelName: 'ServiceMedia',
    tableName: 'ServiceMedia',
    timestamps: true,
    paranoid: true,
  });
  return ServiceMedia;
}
// src/models/ServiceAsset.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class ServiceAsset extends BaseEntityMixin(Model) { }

  ServiceAsset.init(db, DataTypes, 
  {
    serviceAssetID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    assetID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    legend: DataTypes.STRING(64), 
  },
  {
    sequelize: db,
    modelName: 'ServiceAsset',
    tableName: 'ServiceAsset',
    timestamps: true,
    paranoid: true,
  });

  return ServiceAsset;
}

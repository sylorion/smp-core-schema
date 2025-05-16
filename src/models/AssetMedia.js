// src/models/AssetMedia.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import ObjectStatus from '../enums/ObjectStatus.js';

export default (db) => {
  class AssetMedia extends BaseEntityMixin(Model) { }

  AssetMedia.init(db, DataTypes, 
    {
      assetMediaID: {
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
      assetID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      legend: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      listingPosition: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      state: {
        type: DataTypes.ENUM(Object.values(ObjectStatus)),
        allowNull: false,
        defaultValue: 'online'
      }
    },
    {
      sequelize: db,
      modelName: 'AssetMedia',
      tableName: 'AssetMedia',
      timestamps: true,
      paranoid: true,
    }
  );

  return AssetMedia;
}; 
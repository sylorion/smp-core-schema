// src/models/ServiceAsset.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

// Importing enums 
// No enum to load there
export default (db) => {

  class ServiceAsset extends BaseEntityMixin(Model) { }

  ServiceAsset.init(db, DataTypes, 
  {
    serviceAssetID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    assetID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    serviceID: { type: DataTypes.STRING,
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

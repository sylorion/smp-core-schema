// src/models/EstimateAsset.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class EstimateAsset extends BaseEntityMixin(Model) { };

  EstimateAsset.init(db, DataTypes, 
    {
    estimateAssetID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    legend: DataTypes.STRING(64),
    assetID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    estimateID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    }, 
  },
  {
    sequelize: db,
    modelName: 'EstimateAsset',
    tableName: 'EstimateAsset',
    timestamps: true,
    paranoid: true,
  });
  return EstimateAsset;
}
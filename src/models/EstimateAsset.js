// src/models/EstimateAsset.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/CreateId.js'


export default (db) => {
  class EstimateAsset extends BaseEntityMixin(Model) { };

  EstimateAsset.init(db, DataTypes, 
    {
    estimateAssetID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
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
    mandatry: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
    },
    initialPrice: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    quantity: {
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
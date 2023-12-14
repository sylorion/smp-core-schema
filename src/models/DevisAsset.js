// src/models/DevisAsset.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class DevisAsset extends BaseEntityMixin(Model) { };

  DevisAsset.init(db, DataTypes, 
    {
    devisAssetID: {
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
    devisID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    }, 
  },
  {
    sequelize: db,
    modelName: 'DevisAsset',
    tableName: 'DevisAsset',
    timestamps: true,
    paranoid: true,
  });
  return DevisAsset;
}
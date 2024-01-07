// src/models/Asset.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {

  class Asset extends BaseEntityMixin(Model) { };

  Asset.init(db, DataTypes, 
    {
    assetID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uniqRef: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    title: DataTypes.STRING(64),
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    organizationID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    mediaID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    legalVatPercent: DataTypes.INTEGER,
    stockQuantity: DataTypes.INTEGER,
    maxPerReservation: DataTypes.INTEGER,
    conflictingAssets: DataTypes.TEXT,
    applyableAssets: DataTypes.TEXT, 
  },
  {
    sequelize: db,
    modelName: 'Asset',
    tableName: 'Asset',
    timestamps: true,
    paranoid: true,
  });

  return Asset;
}

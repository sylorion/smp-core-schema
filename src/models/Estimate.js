// src/models/Estimate.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import EstimateStage from '../enums/EstimateStage.js';

export default (db) => {
  class Estimate extends BaseEntityMixin(Model) { };
  Estimate.init(db, DataTypes, 
    {
    estimateID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    operatorUserID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    buyerOrganizationID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    sellerOrganizationID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    expirationDueDate: DataTypes.DATE,
    expirationTimeLeft: DataTypes.INTEGER,
    referencePrice: DataTypes.INTEGER,
    previewPrice: DataTypes.INTEGER,
    proposedPrice: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    propositionCount :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      
    negociatedPrice: DataTypes.INTEGER,
    discountID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    details: DataTypes.JSON,
    stage: {
      type: DataTypes.ENUM(Object.values(EstimateStage)),
      defaultValue: EstimateStage.SUBMITTED,
      allowNull: false,
    }, 
  },
  {
    sequelize: db,
    modelName: 'Estimate',
    tableName: 'Estimate',
    timestamps: true,
    paranoid: true,
  });

  return Estimate;
}
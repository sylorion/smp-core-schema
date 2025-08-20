// src/models/Estimate.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import EstimateStage from '../enums/EstimateStage.js';
import createId from '../mixins/createId.js'


export default (db) => {
  class Estimate extends BaseEntityMixin(Model) { };
  Estimate.init(db, DataTypes, 
    {
    estimateID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    operatorUserID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    buyerOrganizationID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    sellerOrganizationID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    serviceID: { type: DataTypes.STRING,
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
      allowNull: true,
    },
      
    negociatedPrice: DataTypes.INTEGER,
    discountID: { type: DataTypes.STRING,
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
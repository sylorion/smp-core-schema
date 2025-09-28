// src/models/Affiliate.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

export default (db) => {
  class Affiliate extends BaseEntityMixin(Model) { };
  Affiliate.init(db, DataTypes, 
    {
    affiliateId: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    referrerUserId: { 
      type: DataTypes.STRING,
      allowNull: true, 
    },
    referredUserId: { 
      type: DataTypes.STRING,
      allowNull: true, 
    },
    affiliateToken: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
    isValidated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    validatedAt: DataTypes.DATE,
    expiresAt: DataTypes.DATE,
    commissionRate: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0,
      allowNull: true,
    },
    metadata: DataTypes.JSON,
  },
  {
    sequelize: db,
    modelName: 'Affiliate',
    tableName: 'Affiliate',
    timestamps: true,
    paranoid: true,
  });

  return Affiliate;
}


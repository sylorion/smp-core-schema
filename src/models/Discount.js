// src/models/Discount.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class Discount extends BaseEntityMixin(Model) { };

  Discount.init(db, DataTypes, 
    {
    discountID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    discountCode: DataTypes.STRING(32),
    discountValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountInPercent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: DataTypes.DATE,
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    organizationrID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tagID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Discount',
    tableName: 'Discount',
    timestamps: true,
    paranoid: true,
  });
  return Discount;
}
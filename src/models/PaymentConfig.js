// src/models/PaymentConfig.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// Nothing
export default (db) => {
  class PaymentConfig extends BaseEntityMixin(Model) { }

  PaymentConfig.init(db, DataTypes, 
    {
    paymentConfigID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    paymentMethodID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    partnerTokenAuthDetails: DataTypes.TEXT,
    paymentConfigDetails: DataTypes.TEXT, 
  },
  {
    sequelize: db,
    modelName: 'PaymentConfig',
    tableName: 'PaymentConfig',
    timestamps: true,
    paranoid: true,
  });
}
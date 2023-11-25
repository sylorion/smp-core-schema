// src/models/ServiceTransaction.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class Transaction extends BaseEntityMixin(Model) {}

  Transaction.init({
    transactionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    invoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dealMediaProofID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionDateTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Transaction',
    tableName: 'Transaction',
    timestamps: true,
    paranoid: true,
  });
}
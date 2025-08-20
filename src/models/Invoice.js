// src/models/Invoice.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
// Importing enums
import PaymentStatus from "../enums/PaymentStatus.js";
import createId from '../mixins/createId.js'


export default (db) => {
  class Invoice extends BaseEntityMixin(Model) {}

  Invoice.init(
    db,
    DataTypes,
    {
      invoiceID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
      },
      authorID: { type: DataTypes.STRING,
        allowNull: false,
      },
      estimateID: { type: DataTypes.STRING,
        allowNull: false,
      },
      buyerOrganizationID: { type: DataTypes.STRING,
        allowNull: true,
      },

      sellerOrganizationID: { type: DataTypes.STRING,
        allowNull: false,
      },
      thirdPartyFees: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      servicesFees: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      servicesVatPercent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      prestationsVatPercent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM(Object.values(PaymentStatus)),
        defaultValue: PaymentStatus.SUBMITTED,
      },
      emitDate: DataTypes.DATE,
      dueDate: DataTypes.DATE,
      digitalSignature: DataTypes.TEXT,
    },
    {
      sequelize: db,
      modelName: "Invoice",
      tableName: "Invoice",
      timestamps: true,
      paranoid: true,
    }
  );

  return Invoice;
};

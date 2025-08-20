// src/models/PaymentMethod.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import PaymentMethodType from '../enums/PaymentMethodType.js';
import createId from '../mixins/createId.js'


export default (db) => {
  class PaymentMethod extends BaseEntityMixin(Model) { }
  PaymentMethod.init(db, DataTypes, 
    {
    paymentMethodID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    },
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    organizationID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    paymentMethodKind: {
      type: DataTypes.STRING(16),
    },
    isActive: DataTypes.BOOLEAN,
    accountHolderName: DataTypes.STRING(64),
    expirationDate: DataTypes.DATE,
    bankName: DataTypes.STRING(64),
    cardNumber: DataTypes.STRING(31),
    cardType:  {
      type: DataTypes.ENUM(Object.values(PaymentMethodType)),
      allowNull: false,
    },
    methodDetails: DataTypes.TEXT,
    isDefault: DataTypes.BOOLEAN, 
  },
  {
    sequelize: db,
    modelName: 'PaymentMethod',
    tableName: 'PaymentMethod',
    timestamps: true,
    paranoid: true,
  });

  return PaymentMethod;
}
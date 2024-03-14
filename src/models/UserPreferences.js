// src/models/UserPreferences.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import ServicesAcceptedDevice from '../enums/ServicesAcceptedDevice.js';
import NotificationFrequencyPref from '../enums/NotificationFrequencyPref.js';

export default (db) => {

  class UserPreferences extends BaseEntityMixin(Model) { };

  UserPreferences.init(db, DataTypes,
    {
      preferenceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      lang: DataTypes.STRING(16),
      timeZone: DataTypes.STRING(64),
      notificationPreferences: DataTypes.TEXT,
      privacySettings: DataTypes.TEXT,
      theme: DataTypes.INTEGER,
      marketplaceConfig: DataTypes.TEXT,
      defaultCurrency: {
        type: DataTypes.ENUM(Object.values(ServicesAcceptedDevice)),
        defaultValue: ServicesAcceptedDevice.EUR,
      },
      defaultPaymentMethodID: DataTypes.INTEGER,
      notificationFrequency: DataTypes.STRING(32),
      showRecommendations: DataTypes.BOOLEAN,
      otherSettings: DataTypes.JSON,
    },
    {
      sequelize: db,
      modelName: 'UserPreferences',
      tableName: 'UserPreferences',
      timestamps: true,
      paranoid: true,
    });
  return UserPreferences;
}
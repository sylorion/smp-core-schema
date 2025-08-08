// src/models/UserPreferences.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

// Importing enums 
import ServicesAcceptedDevice from '../enums/ServicesAcceptedDevice.js';
import NotificationFrequencyPref from '../enums/NotificationFrequencyPref.js';

export default (db) => {

  class UserPreferences extends BaseEntityMixin(Model) { };

  UserPreferences.init(db, DataTypes,
    {
      userPreferencesID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      lang: DataTypes.STRING(16),
      timeZone: DataTypes.STRING(64),
      notificationPreferences: DataTypes.JSON,
      privacySettings: DataTypes.JSON,
      theme: DataTypes.INTEGER,
      marketplaceConfig: DataTypes.JSON,
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
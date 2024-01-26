'use strict';
// src/models/User.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import UserType from '../enums/UserType.js';

export default (db) => {

  class User extends BaseEntityMixin(Model) { };

  User.init(db, DataTypes,
    {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      username: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true,
      },

      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      previousEmail: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      passwordHash: {
        type: DataTypes.STRING(255),
      },
      previousPasswordHash: {
        type: DataTypes.STRING(255),
      },
      plan: {
        type: DataTypes.STRING(8),
      },

      profileID: {
        type: DataTypes.INTEGER,
        allowNull: true, // Allow to associate a profile some how in the futur
      },
      userKind: {
        type: DataTypes.ENUM(Object.values(UserType)), // Replace with your actual user types
        allowNull: true,
      },
      lastLogin: {
        type: DataTypes.DATE,
      },
      loginDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 604_800 * 4 // une semaine fois 4, un mois
      },
      twoFactorEnabled: {
        type: DataTypes.BOOLEAN,
      },
      rsaPublicKey: {
        type: DataTypes.TEXT,
      },
      passwordResetToken: {
        type: DataTypes.STRING(255),
      }
    }, {
    sequelize: db,
    modelName: 'User',
    tableName: 'User',
    timestamps: true,
    paranoid: true // This will add a "deletedAt" column and allow soft deletes
  });

  // Associations, méthodes du modèle, etc.

  return User;
};

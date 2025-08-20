'use strict';
// src/models/Profile.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import ProfileGender from '../enums/ProfileGender.js'; 
import createId from '../mixins/createId.js'


export default (db) => {

  class Profile extends BaseEntityMixin(Model) { }

  Profile.init(db, DataTypes,
    {
    profileID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    },
    firstName:{
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
    gender: {
      type: DataTypes.ENUM(Object.values(ProfileGender)), // Assuming ProfileGender is an enum
      allowNull: true,
    },
    nationality: DataTypes.STRING(32),
    phoneNumber: DataTypes.STRING(32),
    locationID: { type: DataTypes.STRING,
      allowNull: true,
     },
     userID: { type: DataTypes.STRING,
      allowNull: true,
     },
     authorID: { type: DataTypes.STRING,
      allowNull: true,
     },
    idCardNumber: DataTypes.STRING(32),
    passportNumber: DataTypes.STRING(32),
    socialSecurityNumber: DataTypes.STRING(16),
    profilePictureID: { type: DataTypes.STRING,
      allowNull: true,
     
    }
  },
  {
    sequelize: db,
    modelName: 'Profile',
    tableName: 'Profile', // Note: Ensure this matches the actual table name in your database
    timestamps: true,
    paranoid: true, // This enables soft deletes
  });

  return Profile
}

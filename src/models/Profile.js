'use strict';
// src/models/Profile.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import ProfileGender from '../enums/ProfileGender.js'; 

export default (db) => {

  class Profile extends BaseEntityMixin(Model) { }

  Profile.init(db, DataTypes,
    {
    profileID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING(64),
    lastName: DataTypes.STRING(64),
    dateOfBirth: DataTypes.DATE,
    gender: {
      type: DataTypes.ENUM(Object.values(ProfileGender)), // Assuming ProfileGender is an enum
      allowNull: true,
    },
    nationality: DataTypes.STRING(32),
    phoneNumber: DataTypes.STRING(32),
    locationID: {
      type:DataTypes.INTEGER,
      allowNull: true,
     },
    idCardNumber: DataTypes.STRING(32),
    passportNumber: DataTypes.STRING(32),
    socialSecurityNumber: DataTypes.STRING(16), 
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

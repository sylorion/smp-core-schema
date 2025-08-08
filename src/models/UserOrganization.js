// src/models/UserOrganization.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

// Importing enums 
//
export default (db) => {

  class UserOrganization extends BaseEntityMixin(Model) { };
  
  UserOrganization.init(db, DataTypes, 
  {
    userOrganizationID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    },
    legend: DataTypes.STRING(64),
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    organizationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
    {
      sequelize: db,
      modelName: 'UserOrganization',
      tableName: 'UserOrganization',
      timestamps: true,
      paranoid: true,
    }
  );
  return UserOrganization;
  } 
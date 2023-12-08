// src/models/UserRole.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 

export default (db) => {

  class UserRole extends BaseEntityMixin(Model) { };

  UserRole.init(db, DataTypes, 
  {
    userRoleID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    legend: DataTypes.STRING(64),
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userID: DataTypes.INTEGER,
    roleID: DataTypes.INTEGER, 
  },
  {
    sequelize: db,
    modelName: 'UserRole',
    tableName: 'UserRole',
    timestamps: true,
    paranoid: true,
  });
}
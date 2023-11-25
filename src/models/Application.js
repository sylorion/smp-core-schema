// src/models/Application.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class Application extends BaseEntityMixin(Model) { };
  Application.init(
  {
    applicationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    officialName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    developerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authKey: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    plan: DataTypes.STRING(32),
    isOfficialApp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    appConfiguration: {
      type: DataTypes.JSON,
      allowNull: false,
    }, 
  },
  {
    sequelize: db,
    modelName: 'Application',
    tableName: 'Application',
    timestamps: true,
    paranoid: true,
  });
}
// src/models/Application.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'


export default (db) => {
  class Application extends BaseEntityMixin(Model) { };
  Application.init(db, DataTypes,
  {
    applicationID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    authorID: { type: DataTypes.STRING,
      allowNull: false,
    },
    officialName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    developerID: { type: DataTypes.STRING,
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
  return Application;
}
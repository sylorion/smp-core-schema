// src/models/AuditLog.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class AuditLog extends BaseEntityMixin(Model) { };
  AuditLog.init(db, DataTypes, 
    {
    auditLogID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    actionType: DataTypes.STRING(255), // Replace with actual action type data type
    userID: {
      type: DataTypes.INTEGER, 
    },
    userIP: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    userOS: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    machineName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    applicationID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    applicationVersion: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    actionDetails: DataTypes.JSON,
    clientDetails: DataTypes.JSON,
  },
  {
    sequelize: db,
    modelName: 'AuditLog',
    tableName: 'AuditLog',
    timestamps: true,
    paranoid: true,
  });
  return AuditLog;
}

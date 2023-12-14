// src/models/Role.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class Role extends BaseEntityMixin(Model) { }

  Role.init(db, DataTypes, 
    {
    roleID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roleName: DataTypes.STRING(32),
    description: DataTypes.TEXT,
    permissions: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: 'Role',
    tableName: 'Role',
    timestamps: true,
    paranoid: true,
  });

  return Role;
}

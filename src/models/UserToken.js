// ./src/models/UserToken.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum dependant
export default (db) => {

  class UserToken extends Model {};

  UserToken.init(db, DataTypes, 
  {
    userTokenID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    applicationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    expiresIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    newTokenGeneratedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }, 
  }, 
  {
    sequelize: db,
    modelName: 'UserToken',
    tableName: 'UserToken',
    timestamps: true,
  });
  return UserToken;
}
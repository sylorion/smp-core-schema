// ./src/models/UserToken.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js';
import { DataTypes, Model } from 'sequelize';

export default (db) => {
  class UserToken extends BaseEntityMixin(Model) {};

  UserToken.init(db,DataTypes, {  
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
   
    newTokenGeneratedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize: db,
    modelName: 'UserToken',
    tableName: 'UserToken',
    timestamps: true,
    paranoid: true  // Si vous voulez activer 'deletedAt'
  });

  return UserToken;
};

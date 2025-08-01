// ./src/models/ApplicationToken.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class ApplicationToken extends BaseEntityMixin(Model) { };
  ApplicationToken.init(db, DataTypes, 
    {
    applicationTokenID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue:() => createId(),
    },
    applicationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // autres champs si nécessaire
  }, {
    sequelize: db,
    modelName: 'ApplicationToken',
    tableName: 'ApplicationToken',
    timestamps: true,
  });
  return ApplicationToken;
}
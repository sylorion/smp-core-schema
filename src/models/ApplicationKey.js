// ./src/models/ApplicationKey.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class ApplicationKey extends BaseEntityMixin(Model) { };
  ApplicationKey.init({
    ApplicationKeyID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    applicationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    key: {
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
    modelName: 'ApplicationKey',
    tableName: 'ApplicationKey',
    timestamps: true,
  });
}
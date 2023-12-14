// src/models/TermsAndConditions.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class TermsAndConditions extends BaseEntityMixin(Model) { }

  TermsAndConditions.init(db, DataTypes, 
  {
    termsAndConditionsID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    organizationID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    tacContent: DataTypes.TEXT, 
  },
  {
    sequelize: db,
    modelName: 'TermsAndConditions',
    tableName: 'TermsAndConditions',
    timestamps: true,
    paranoid: true,
  });

  return TermsAndConditions;
}
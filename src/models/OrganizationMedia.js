// src/models/OrganizationMedia.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// Nothing
export default (db) => {
  class OrganizationMedia extends BaseEntityMixin(Model) { }
  OrganizationMedia.init(db, DataTypes, 
    {
    organizationMediaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'userID',
      },
    },
    mediaID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Media,
        key: 'mediaID',
      },
    },
    organizationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Organization,
        key: 'organizationID',
      },
    },
    legend: DataTypes.STRING(255),
    listingPosition: DataTypes.INTEGER, 
  },
  {
    sequelize: db,
    modelName: 'OrganizationMedia',
    tableName: 'OrganizationMedia',
    timestamps: true,
    paranoid: true,
  });
}
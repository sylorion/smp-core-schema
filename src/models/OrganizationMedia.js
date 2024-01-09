// src/models/OrganizationMedia.js
// Use ES6 exports instead of CommonJS

import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js';
import { DataTypes, Model } from 'sequelize';

export default (db) => {
  class OrganizationMedia extends BaseEntityMixin(Model) {}

  OrganizationMedia.init(
    {
      organizationMediaID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      authorID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mediaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    }
  );

  return OrganizationMedia;
};

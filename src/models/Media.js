// src/models/Media.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import MediaType from '../enums/MediaType.js';

export default (db) => {

  class Media extends BaseEntityMixin(Model) { };

  Media.init(db, DataTypes, 
    {
    mediaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mediaType: {
      type: DataTypes.ENUM(Object.values(MediaType)),
      allowNull: false,
    },
    originalName: DataTypes.STRING(255),
    finalName: DataTypes.STRING(255),
    url: DataTypes.STRING(255),
    legend: DataTypes.STRING(64),
    size: DataTypes.INTEGER, // Size expressed in octet
    summary: DataTypes.TEXT, // tiny summary of the media 
  },
  {
    sequelize: db,
    modelName: 'Media',
    tableName: 'Media',
    timestamps: true,
    paranoid: true // This will add a "deletedAt" column and allow soft deletes
  });
}
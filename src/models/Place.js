// src/models/Place.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import PlaceKind from '../enums/PlaceKind.js' ; 

export default (db) => {
  class Place extends BaseEntityMixin(Model) { }

  Place.init(db, DataTypes, 
    {
    placeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    country: DataTypes.STRING(32),
    region: DataTypes.STRING(64),
    pstate: DataTypes.STRING(64),
    city: DataTypes.STRING(32),
    postalCode: DataTypes.STRING(16),
    placeKind: {
      type: DataTypes.ENUM(Object.values(PlaceKind)), // Assuming PlaceKind is an enum
      allowNull: false, 
    },
    addressLine1: DataTypes.STRING(255),
    addressLine2: DataTypes.STRING(64),
    coordinates: {
      type: DataTypes.GEOMETRY('POINT'),
      allowNull: true,
    }, 
  },
  {
    sequelize: db,
    modelName: 'Place',
    tableName: 'Place', // Note: Ensure this matches the actual table name in your database
    timestamps: true,
    paranoid: true, // This enables soft deletes
  });
return Place;
}

// src/models/Review.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class Review extends BaseEntityMixin(Model) { }

  Review.init(db, DataTypes, 
    {
    reviewID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    organizationID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    criteriaID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    rating: DataTypes.INTEGER,
    commentID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    }, 
  },
  {
    sequelize: db,
    modelName: 'Review',
    tableName: 'Review',
    timestamps: true,
    paranoid: true,
  });
}


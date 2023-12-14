// src/models/Topic.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
// No enum to load there
export default (db) => {

  class Topic extends BaseEntityMixin(Model) { }
  
  Topic.init(db, DataTypes, 
  {
    topicID: {
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
    title: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    parentID: {
      type:DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Topic,
        key: 'topicID',
      },
     },
    level: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: 'Topic',
    tableName: 'Topic',
    timestamps: true,
    paranoid: true,
  });

  return Topic;
}
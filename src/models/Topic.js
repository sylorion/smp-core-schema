// src/models/Topic.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/CreateId.js'

// Importing enums 
// No enum to load there
export default (db) => {

  class Topic extends BaseEntityMixin(Model) { }
  
  Topic.init(db, DataTypes, 
  {
    topicID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    
      },
    
    title: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    parentTopicID: {
      type:DataTypes.INTEGER,
      allowNull: true,
  
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
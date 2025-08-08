// src/models/Tag.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

// Importing enums 
// No enum to load there
export default (db) => {

  class Tag extends BaseEntityMixin(Model) { }

  Tag.init(db, DataTypes, 
  {
    tagID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topicID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: DataTypes.STRING(255),
  },
  {
    sequelize: db,
    modelName: 'Tag',
    tableName: 'Tag',
    timestamps: true,
    paranoid: true, 
  });

  return Tag;
}
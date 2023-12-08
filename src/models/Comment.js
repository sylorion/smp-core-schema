// src/models/Comment.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class Comment extends BaseEntityMixin(Model) { };
  Comment.init(db, DataTypes,
  {
    commentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    content: DataTypes.TEXT,
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    serviceID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    organizationID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    feedback: DataTypes.INTEGER, 
  },
  {
    sequelize: db,
    modelName: 'Comment',
    tableName: 'Comment',
    timestamps: true,
    paranoid: true,
  });
}
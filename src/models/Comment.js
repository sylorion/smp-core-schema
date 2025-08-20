// src/models/Comment.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

export default (db) => {
  class Comment extends BaseEntityMixin(Model) { };
  Comment.init(db, DataTypes,
  {
    commentID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    content: DataTypes.TEXT,
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    serviceID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    parentCommentID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    organizationID: { type: DataTypes.STRING,
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
  return Comment;
}
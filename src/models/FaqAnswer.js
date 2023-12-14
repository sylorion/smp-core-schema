// src/models/FaqAnswer.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class FaqAnswer extends BaseEntityMixin(Model) { };

  FaqAnswer.init(db, DataTypes, 
    {
    FaqAnswerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    topicID: {
      type: DataTypes.INTEGER,
      allowNull: true 
    },
    // If we want to clone an answer and provide more details
    parentFaqAnswerID: {
      type: DataTypes.INTEGER,
      allowNull: true 
    },
    lang: {
      type: DataTypes.STRING(8),
      allowNull: true 
    },
  },
  {
    sequelize: db,
    modelName: 'FaqOrganization',
    tableName: 'FaqOrganization',
    timestamps: true,
    paranoid: true
  });
  return FaqAnswer;
}

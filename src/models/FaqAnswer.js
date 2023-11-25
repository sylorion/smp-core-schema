// src/models/FaqAnswer.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class FaqAnswer extends BaseEntityMixin(Model) { };

  FaqAnswer.init({
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
    parentFaqAnswerID: {
      type: DataTypes.INTEGER,
      allowNull: true 
    },
    lang: {
      type: DataTypes.STRING(8),
      allowNull: true 
    },
    description: DataTypes.TEXT,
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: 'FaqOrganization',
    tableName: 'FaqOrganization',
    timestamps: true,
    paranoid: true
  });
}

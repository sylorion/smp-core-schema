// ./src/model/FaqQuestion.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
    class FaqQuestion extends BaseEntityMixin(Model) { };

    FaqQuestion.init({
        faqQuestionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        topicID: { 
            type: DataTypes.INTEGER,
            allowNull: true  // Associated to a specific topic ?
        },
        parentFaqQuestionID: {
            type: DataTypes.INTEGER,
            allowNull: true  
        },
        lang: {
            type: DataTypes.STRING(8),
            allowNull: true
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: 'FaqQuestion',
        tableName: 'FaqQuestion',
        timestamps: true,
        paranoid: true // This will add a "deletedAt" column and allow soft deletes
    });
}

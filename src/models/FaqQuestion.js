// ./src/model/FaqQuestion.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
    class FaqQuestion extends BaseEntityMixin(Model) { };

    FaqQuestion.init(db, DataTypes, 
        {
        faqQuestionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
        },
        topicID: { 
            type: DataTypes.INTEGER,
            allowNull: true 
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
            type: DataTypes.STRING(250),
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: 'FaqQuestion',
        tableName: 'FaqQuestion',
        timestamps: true,
        paranoid: true 
    });
    return FaqQuestion;
}

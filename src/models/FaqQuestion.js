// ./src/model/FaqQuestion.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'


export default (db) => {
    class FaqQuestion extends BaseEntityMixin(Model) { };

    FaqQuestion.init(db, DataTypes, 
        {
        faqQuestionID: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => createId(),
            allowNull: false
        }, 
        authorID: { type: DataTypes.STRING,
            allowNull: false,
           
        },
        topicID: { type: DataTypes.STRING,
            allowNull: true 
        },
        parentFaqQuestionID: { type: DataTypes.STRING,
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

// ./src/models/FaqService.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
    class FaqService extends BaseEntityMixin(Model) { };

    FaqService.init({
        faqServiceID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faqAnswerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faqQuestionID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        serviceID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: 'FaqService',
        tableName: 'FaqService',
        timestamps: true,
        paranoid: true // This will add a "deletedAt" column and allow soft deletes
    });
}

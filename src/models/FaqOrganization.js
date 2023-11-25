// ./src/models/FaqOrganization.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
    class FaqOrganization extends BaseEntityMixin(Model) { };

    FaqOrganization.init({
        faqOrganizationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        faqAnswerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faqQuestionID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        organizationID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'FaqOrganization',
        tableName: 'FaqOrganization',
        timestamps: true,
        paranoid: true  
    });
}

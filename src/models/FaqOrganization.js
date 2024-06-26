// ./src/models/FaqOrganization.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
    class FaqOrganization extends BaseEntityMixin(Model) { };

    FaqOrganization.init(db, DataTypes, 
        {
        faqOrganizationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
    return FaqOrganization;
}

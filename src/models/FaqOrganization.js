// ./src/models/FaqOrganization.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'


export default (db) => {
    class FaqOrganization extends BaseEntityMixin(Model) { };

    FaqOrganization.init(db, DataTypes, 
        {
        faqOrganizationID: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: () => createId(),
        },
        authorID: { type: DataTypes.STRING,
            allowNull: false
        }, 
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        faqAnswerID: { type: DataTypes.STRING,
            allowNull: false
        },
        faqQuestionID: { type: DataTypes.STRING,
            allowNull: false
        },
        organizationID: { type: DataTypes.STRING,
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

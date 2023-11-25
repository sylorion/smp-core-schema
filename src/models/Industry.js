// ./src/models/Industry.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums, assuming ObjectStatus is defined in your enums

export default (db) => {
    class Industry extends BaseEntityMixin(Model) { };

    Industry.init({
        industryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        authorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: DataTypes.STRING(255),
        description: DataTypes.TEXT,
        level: DataTypes.INTEGER,
        parentIndustryID: DataTypes.INTEGER,
    },
        {
            sequelize: db,
            modelName: 'Industry',
            tableName: 'Industry',
            timestamps: true,
            paranoid: true 
        });
}

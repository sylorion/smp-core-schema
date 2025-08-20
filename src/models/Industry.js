// ./src/models/Industry.js
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
// Importing enums, assuming ObjectStatus is defined in your enums
import createId from '../mixins/createId.js'


export default (db) => {
  class Industry extends BaseEntityMixin(Model) {}

  Industry.init(
    db,
    DataTypes,
    {
      industryID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
      },
      authorID: { type: DataTypes.STRING,
        allowNull: false,
      },
      title: DataTypes.STRING(255),
      description: DataTypes.TEXT,
      level: DataTypes.INTEGER,
      parentIndustryID: DataTypes.STRING,
    },
    {
      sequelize: db,
      modelName: "Industry",
      tableName: "Industry",
      timestamps: true,
      paranoid: true,
    }
  );
  return Industry;

};

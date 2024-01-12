// ./src/models/TagOrganization.js
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";

export default (db) => {
  class TagOrganization extends BaseEntityMixin(Model) {}

  TagOrganization.init(
    db,
    DataTypes,
    {
      tagOrganizationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tagID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
     
    },
    {
      sequelize: db,
      modelName: "TagOrganization",
      tableName: "TagOrganization",
      timestamps: true,
      paranoid: true,
    }
  );

   return TagOrganization;
};

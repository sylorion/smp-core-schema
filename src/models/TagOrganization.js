// ./src/models/TagOrganization.js
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import createId from '../mixins/CreateId.js'


export default (db) => {
  class TagOrganization extends BaseEntityMixin(Model) {}

  TagOrganization.init(
    db,
    DataTypes,
    {
      tagOrganizationID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
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

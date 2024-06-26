// ./src/models/TopicOrganization.js
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";

export default (db) => {
  class TopicOrganization extends BaseEntityMixin(Model) {}

  TopicOrganization.init(
    db,
    DataTypes,
    {
      topicOrganizationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      topicID: {
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
      modelName: "TopicOrganization",
      tableName: "TopicOrganization",
      timestamps: true,
      paranoid: true,
    }
  );

   return TopicOrganization;
};

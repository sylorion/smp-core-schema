import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import ObjectStatus from "../enums/ObjectStatus.js";

export default (db) => {
  class Campain extends BaseEntityMixin(Model) {}

  Campain.init( db, DataTypes,
    {
      campainID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uniqRef: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      emailCampainTemplateID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subject: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      contentHTML: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      contentText: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      groupIDs: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      scheduledAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      sentAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      state: {
        type: DataTypes.ENUM(...Object.values(ObjectStatus)),
        allowNull: false,
        defaultValue: ObjectStatus.ONLINE,
      },
    },
    {
      sequelize: db,
      modelName: "Campain",
      tableName: "Campain",
      timestamps: true,
      paranoid: true,
    }
  );

  return Campain;
};

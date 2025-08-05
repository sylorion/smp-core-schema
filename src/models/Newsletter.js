import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import ObjectStatus from "../enums/ObjectStatus.js";
import createId from '../mixins/CreateId.js'


export default (db) => {
  class Newsletter extends BaseEntityMixin(Model) {}

  Newsletter.init(db, DataTypes, 
    {
      newsletterID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
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
      emailNewsletterTemplateID: {
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
      modelName: "Newsletter",
      tableName: "Newsletter",
      timestamps: true,
      paranoid: true,
    }
  );

  return Newsletter;
};

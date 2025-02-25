import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import ObjectStatus from "../enums/ObjectStatus.js";

export default (db) => {
  class ContactGroup extends BaseEntityMixin(Model) {}

  ContactGroup.init( db,
    DataTypes,
    {
    contactGroupID: {
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
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true, 
      },
      criteria: {
        type: DataTypes.JSONB,
        allowNull: true, // Ex. : { "country": "France", "gender": "female", "minAge": 25 }
      },
      state: {
        type: DataTypes.ENUM(...Object.values(ObjectStatus)),
        allowNull: false,
        defaultValue: ObjectStatus.ONLINE,
      },
    },
    {
      sequelize: db,
      modelName: "ContactGroup",
      tableName: "ContactGroup",
      timestamps: true,
      paranoid: true,
    }
  );

  return ContactGroup;
};

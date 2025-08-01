import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import ObjectStatus from "../enums/ObjectStatus.js";

export default (db) => {
  class ContactGroupMembership extends BaseEntityMixin(Model) {}

  ContactGroupMembership.init( db,
    DataTypes,
    {
      contactGroupMembershipID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      contactID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      groupID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.ENUM(...Object.values(ObjectStatus)),
        allowNull: false,
        defaultValue: ObjectStatus.ONLINE,
      },
      joinedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize: db,
      modelName: "ContactGroupMembership",
      tableName: "ContactGroupMembership",
      timestamps: false, // On utilise joinedAt à la place de createdAt
    }
  );

  return ContactGroupMembership;
};

import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import ObjectStatus from "../enums/ObjectStatus.js";
import ContactSource from "../enums/ContactSource.js";
import ContactGender from "../enums/ProfileGender.js";

export default (db) => {
  class NewsletterContact extends BaseEntityMixin(Model) {}

  NewsletterContact.init( db,
    DataTypes,
    {
      newsletterContactID: {
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
      userID: {
        type: DataTypes.INTEGER,
        allowNull: true, // Peut être null si le contact n'est pas lié à un utilisateur
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      isNewsletterSubscriber: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      source: {
        type: DataTypes.ENUM(...Object.values(ContactSource)),
        allowNull: false,
        defaultValue: ContactSource.PLATFORM,
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM(...Object.values(ContactGender)),
        allowNull: true, // Possibilité de ne pas renseigner ce champ
      },
      birthDate: {
        type: DataTypes.DATEONLY,
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
      modelName: "NewsletterContact",
      tableName: "NewsletterContact",
      timestamps: true,
      paranoid: true, // Active soft delete (champ deletedAt)
    }
  );

  return NewsletterContact;
};

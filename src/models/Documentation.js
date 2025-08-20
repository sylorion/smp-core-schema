// src/models/Documentation.js
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
import createId from '../mixins/createId.js'


export default (db) => {
  class Documentation extends BaseEntityMixin(Model) {}

  Documentation.init(db, DataTypes, 
    { 
    documentationID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
      allowNull: false,
    },
    authorID: { type: DataTypes.STRING,
      allowNull: false,
    },

    serviceID: { type: DataTypes.STRING,
      allowNull: true,
    },

    title: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },

    organizationID: { type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    parentDocumentationID: { type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Documentation",
    tableName: "Documentation",
    timestamps: true,
    paranoid: true, // This will add a "deletedAt" column and allow soft deletes
  });

  return Documentation;
};

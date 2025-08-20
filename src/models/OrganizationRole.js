// src/models/OrganizationRole.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js';
import { DataTypes, Model } from 'sequelize';
import createId from '../mixins/createId.js'


export default (db) => {
  class OrganizationRole extends BaseEntityMixin(Model) {}
  
  OrganizationRole.init(
    db,
    DataTypes,
    {
      OrganizationRoleID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
      },
      authorID: { type: DataTypes.STRING,
        allowNull: false,
      },
      organizationID: { type: DataTypes.STRING,
        allowNull: false,
      },
      roleID: { type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: db,
      modelName: 'OrganizationRole',
      tableName: 'OrganizationRole',
      timestamps: true,
      paranoid: true,
    }
  );


  return OrganizationRole;
};
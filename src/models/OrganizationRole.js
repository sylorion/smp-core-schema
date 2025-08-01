// src/models/OrganizationRole.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js';
import { DataTypes, Model } from 'sequelize';

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
      authorID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roleID: {
        type: DataTypes.INTEGER,
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
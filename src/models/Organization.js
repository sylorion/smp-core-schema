// src/models/Organization.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import ServicesAcceptedDevice        from '../enums/ServicesAcceptedDevice.js' ;
import OrganizationEconomicSizeKind  from '../enums/OrganizationEconomicSizeKind.js' ;
import createId from '../mixins/createId.js'


export default (db) => {
  class Organization extends BaseEntityMixin(Model) { }

  Organization.init(db, DataTypes, 
    {
    organizationID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),

    },
    authorID: { type: DataTypes.STRING,
      allowNull: false,  
    },
    ownerID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    orgRef: DataTypes.STRING(32),
    sectorID: DataTypes.STRING,
    legalName: DataTypes.STRING(64),
    brand: DataTypes.STRING(32),
    sigle: DataTypes.STRING(8),
    smallLogo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    bigLogo: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    oSize: {
      type: DataTypes.ENUM(Object.values(OrganizationEconomicSizeKind)),
      defaultValue: OrganizationEconomicSizeKind.FREELANCER,
    },
    juridicForm: DataTypes.STRING(8),
    juridicCatLabel: DataTypes.STRING(64),
    juridicCatCode: DataTypes.STRING(8),
    currency: {
      type: DataTypes.ENUM(Object.values(ServicesAcceptedDevice)),
      defaultValue: ServicesAcceptedDevice.EUR,
    },
    legalUniqIdentifier: DataTypes.STRING(64),
    vatNumber: DataTypes.STRING(32),
    communityVATNumber: DataTypes.STRING(32),
    capital: DataTypes.INTEGER,
    insuranceRef: DataTypes.STRING(64),
    insuranceName: DataTypes.STRING(64),
    activityStartedAt: DataTypes.DATE,
    activityEndedAt: DataTypes.DATE,
    description: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    locationID: DataTypes.STRING,
    parentOrganizationID: DataTypes.STRING,
    advancedAttributes: DataTypes.JSON, 
  },
  {
    sequelize: db,
    modelName: 'Organization',
    tableName: 'Organization',
    timestamps: true,
    paranoid: true,
  });

  return Organization;

}
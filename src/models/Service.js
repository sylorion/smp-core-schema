// src/models/Service.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize' 
// Importing enums 
import ServiceSupplyForm  from '../enums/ServiceSupplyForm.js';
import ServiceUptakeType  from '../enums/ServiceUptakeType.js';
import ServiceBillingPlan from '../enums/ServiceBillingPlan.js';
import createId from '../mixins/createId.js'


export default (db) => {

  class Service extends BaseEntityMixin(Model) { }
  Service.init(db, DataTypes, 
    {
    serviceID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    title: DataTypes.STRING(128),
    description: DataTypes.TEXT,
    mediaBannerID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    termsAndConditionsID: { type: DataTypes.STRING,
      allowNull: true, 
     },
    parentServiceID: { type: DataTypes.STRING,
      allowNull: true, 
     },
    tagID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    topicID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    organizationID: { type: DataTypes.STRING,
      allowNull: true, 
     },
    locationID: { type: DataTypes.STRING,
      allowNull: true, 
     },
    paymentConfigID: { type: DataTypes.STRING,
      allowNull: true, 
     },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    legalVatPercent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lowerPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upperPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    negotiable: DataTypes.BOOLEAN,
    perimeter: DataTypes.INTEGER, // In metters
    supplyType: {
      type: DataTypes.ENUM(Object.values(ServiceSupplyForm)),
      defaultValue: ServiceSupplyForm.IRL,
    },
    uptakeForm: {
      type: DataTypes.ENUM(Object.values(ServiceUptakeType)),
      defaultValue: ServiceUptakeType.INSTANT,
    },
    billingPlan: {
      type: DataTypes.ENUM(Object.values(ServiceBillingPlan)),
      defaultValue: ServiceBillingPlan.DIRECT,
    },
    onlineService: DataTypes.BOOLEAN,
    advancedAttributes: DataTypes.JSON,
    poweredByAgent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    agentConfiguration: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Service',
    tableName: 'Service',
    timestamps: true,
    paranoid: true,
  });

  return Service;
}
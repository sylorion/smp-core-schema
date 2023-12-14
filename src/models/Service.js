// src/models/Service.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
// Importing enums 
import ServiceSupplyForm  from '../enums/ServiceSupplyForm.js';
import ServiceUptakeType  from '../enums/ServiceUptakeType.js';
import ServiceBillingPlan from '../enums/ServiceBillingPlan.js';

export default (db) => {

  class Service extends BaseEntityMixin(Model) { }
  Service.init(db, DataTypes, 
    {
    serviceID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    title: DataTypes.STRING(128),
    description: DataTypes.TEXT,
    mediaBannerID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    termsAndConditionsID: {
      type:DataTypes.INTEGER,
      allowNull: true, 
     },
    parentServiceID: {
      type:DataTypes.INTEGER,
      allowNull: true, 
     },
    tagID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    topicID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    organizationID: {
      type:DataTypes.INTEGER,
      allowNull: true, 
     },
    locationID: {
      type:DataTypes.INTEGER,
      allowNull: true, 
     },
    paymentConfigID: {
      type:DataTypes.INTEGER,
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
    advancedAttributes: DataTypes.TEXT, 
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
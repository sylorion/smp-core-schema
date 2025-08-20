// src/models/Discount.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'


export default (db) => {
  class Discount extends BaseEntityMixin(Model) { };

  Discount.init(db, DataTypes, 
    {
    discountID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    },
    authorID: { type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    discountCode: DataTypes.STRING(32),
    discountValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountInPercent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: DataTypes.DATE,
    serviceID: { type: DataTypes.STRING,
      allowNull: false,
    },
    organizationID: { type: DataTypes.STRING,
      allowNull: true,
    },
    topicID: { type: DataTypes.STRING,
      allowNull: true,
    },
    serviceID: { type: DataTypes.STRING,
      allowNull: true,
    },
    tagIDs: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Discount',
    tableName: 'Discount',
    timestamps: true,
    paranoid: true,
  });
  return Discount;
}
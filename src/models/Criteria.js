// src/models/Criteria.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import CriteriaTargetedEntity from '../enums/CriteriaTargetedEntity.js';
import createId from '../mixins/createId.js'


export default (db) => {
  class Criteria extends BaseEntityMixin(Model) { };
  Criteria.init(db, DataTypes, 
    {
    criteriaID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    title: {
      type: DataTypes.STRING(255),
      alowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CriteriaTargetedEntity: {
      type: DataTypes.ENUM(Object.values(CriteriaTargetedEntity)),

      defaultValue: CriteriaTargetedEntity.SERVICE,
    }, 
  }, 
  {
    sequelize: db,
    modelName: 'Criteria',
    tableName: 'Criteria',
    timestamps: true,
    paranoid: true,
  });
  return Criteria;
}

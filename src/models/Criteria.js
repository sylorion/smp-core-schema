// src/models/Criteria.js
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'

export default (db) => {
  class Criteria extends BaseEntityMixin(Model) { };
  Criteria.init(db, DataTypes, 
    {
    criteriaID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    title: {
      type: DataTypes.STRING(255),
      alowNull: fase
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
<<<<<<< HEAD
    CriteriaTargetedEntity: {
      type: DataTypes.ENUM(Object.values( )),
=======
    targetedEntityCriteria: {
      type: DataTypes.ENUM(Object.values(CriteriaTargetedEntity)),
>>>>>>> ffb9eeba00050400c4f1bec6f6b94b14ab0b4fab
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

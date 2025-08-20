// src/models/Review.js
// Use ES6 exporter to the outer and not CommonJS
import { BaseEntityMixin } from '../mixins/BaseEntityMixin.js'
import { DataTypes, Model } from 'sequelize'
import createId from '../mixins/createId.js'

// Importing enums 
// No enum to load there
export default (db) => {

  class Review extends BaseEntityMixin(Model) { }

  Review.init(db, DataTypes, 
    {
    reviewID: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => createId(),
    }, 
    serviceID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    organizationID: { type: DataTypes.STRING,
      allowNull: true, 
    },
    authorID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    criteriaID: { type: DataTypes.STRING,
      allowNull: false, 
    },
    rating: DataTypes.INTEGER,
    
    commentID: { type: DataTypes.STRING,
      allowNull: true, 
    }, 
  },
  {
    sequelize: db,
    modelName: 'Review',
    tableName: 'Review',
    timestamps: true,
    paranoid: true,
  });

  return Review ;
}


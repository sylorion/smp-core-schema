// ./src/mixins/BaseEntityMixin.js
// Importing enums
import ObjectStatus from '../enums/ObjectStatus.js';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
 
function slug(from) {
    return slugify(from, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match this regex, let to the defaults `undefined`
        lower: true,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: 'en',      // language code of the locale to use
        trim: true         // trim leading and trailing replacement chars, defaults to `true`
    })
}

function uuid() {
    return uuidv4();
}

function BaseEntityMixin(GivenModel) {
    return class extends GivenModel {
        slug(from) {
            return this.slug(from, {
                replacement: '-',  // replace spaces with replacement character, defaults to `-`
                remove: undefined, // remove characters that match this regex, let to the defaults `undefined`
                lower: true,      // convert to lower case, defaults to `false`
                strict: false,     // strip special characters except replacement, defaults to `false`
                locale: 'en',      // language code of the locale to use
                trim: true         // trim leading and trailing replacement chars, defaults to `true`
            })
        }
        slug(from, options){
            return slugify(from, options)
        }
        uuid(){
            return uuidv4();
        }
        static init(sequelize, DataTypes, nextAttributes, configs) {
            return super.init({
                uniqRef: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    unique: true,
                },
                slug: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    unique: true,
                },
                ...nextAttributes, // attributs déjà définis dans le modèle
                state: {
                    type: DataTypes.ENUM(Object.values(ObjectStatus)), // Assuming ObjectStatus is an enum
                    allowNull: false,
                    defaultValue: ObjectStatus.OFFLINE,
                },
                createdAt: {
                    type: DataTypes.DATE, 
                },
                updatedAt: DataTypes.DATE,
                deletedAt: DataTypes.DATE,
                // createdAt: { type: DataTypes.DATE, allowNull: false },
                // updatedAt: { type: DataTypes.DATE, allowNull: false },
                // deletedAt: { type: DataTypes.DATE },
            }, configs);
        }
    };
};

export { BaseEntityMixin };
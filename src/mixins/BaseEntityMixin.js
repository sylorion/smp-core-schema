// ./src/mixins/BaseEntityMixin.js
// Importing enums
import ObjectStatus from '../enums/ObjectStatus.js';
import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify';
 
function slug(from, lang='en') {
    return slugify(from, {
        replacement: '-',  // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match this regex, let to the defaults `undefined`
        lower: true,      // convert to lower case, defaults to `false`
        strict: false,     // strip special characters except replacement, defaults to `false`
        locale: lang,      // language code of the locale to use
        trim: true         // trim leading and trailing replacement chars, defaults to `true`
    })
}

function uuid() {
    return uuidv4();
}

const slugOptions = {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match this regex, let to the defaults `undefined`
    lower: true,      // convert to lower case, defaults to `false`
    strict: false,     // strip special characters except replacement, defaults to `false`
    locale: 'en',      // language code of the locale to use
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
} ; 
function BaseEntityMixin(GivenModel) {
    class BaseModelFromMixin extends GivenModel {
        static slug(from) {
            return BaseModelFromMixin.slug(from, slugOptions)
        }
        static slug(from, options){
            const ops = options ?? slugOptions;
            return slugify(from, ops)
        }
        static uuid(){
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
            }, configs);    
        }
    };
    return BaseModelFromMixin;
};

export { BaseEntityMixin };
// tests/models/user.js
const { Sequelize, Op , DataTypes, Model } = require('sequelize');
const sequelize = require('../src/mixins/BaseEntityMixin.js');
const userSchema = require('../src/schemas/userSchema');
 
const operatorsAliases = {
    _and: Op.and,
    _or: Op.or,
    _eq: Op.eq,
    _ne: Op.ne,
    _is: Op.is,
    _not: Op.not,
    _col: Op.col,
    _gt: Op.gt,
    _gte: Op.gte,
    _lt: Op.lt,
    _lte: Op.lte,
    _between: Op.between,
    _notBetween: Op.notBetween,
    _all: Op.all,
    _in: Op.in,
    _notIn: Op.notIn,
    _like: Op.like,
    _notLike: Op.notLike,
    _startsWith: Op.startsWith,
    _endsWith: Op.endsWith,
    _substring: Op.substring,
    _iLike: Op.iLike,
    _notILike: Op.notILike,
    _regexp: Op.regexp,
    _notRegexp: Op.notRegexp,
    _iRegexp: Op.iRegexp,
    _notIRegexp: Op.notIRegexp,
    _any: Op.any,
    _contains: Op.contains,
    _contained: Op.contained,
    _overlap: Op.overlap,
    _adjacent: Op.adjacent,
    _strictLeft: Op.strictLeft,
    _strictRight: Op.strictRight,
    _noExtendRight: Op.noExtendRight,
    _noExtendLeft: Op.noExtendLeft,
    _values: Op.values
}

const db = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password,
    {
        dialect: dbConfig.dialect,
        host: dbConfig.host,
        port: dbConfig.port,
        logging: false,
        schema: dbConfig.schema,
        benchmark: true,
        retry: {
            max: 3,
            typeValidation: true
        },
        native: true,
        operatorsAliases
    })

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

class User extends Model { }

User.init(
    Object.keys(userSchema).reduce((schema, key) => {
        schema[key] = { type: DataTypes[userSchema[key].toUpperCase()] };
        return schema;
    }, {}),
    { db, modelName: 'User' }
);

class BaseEntity {
    constructor({id, slug, state, createdAt, updatedAt, deletedAt }) {
        this.id = id;
        this.slug = slug;
        this.state = state;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    // Méthodes communes...
}

class UserEntity extends BaseEntity {
    constructor({ userID, username, email, ...baseProps }) {
        super(baseProps);
        this.userID = userID;
        this.username = username;
        this.email = email;
        // Autres propriétés spécifiques à l'utilisateur...
    }
    // Méthodes spécifiques à l'utilisateur...
}

// class User:
//     def __init__(self, userID, uniqRef, slug, username, email, passwordHash, plan, profile, userKind, lastLogin, loginDuration, twoFactorEnabled, rsaPublicKey, passwordResetToken, state, createdAt, updatedAt, deletedAt):
// self.userID = userID
// self.uniqRef = uniqRef
// self.slug = slug
// self.username = username
// self.email = email
// self.passwordHash = passwordHash
// self.plan = plan
// self.profile = profile
// self.userKind = userKind
// self.lastLogin = lastLogin
// self.loginDuration = loginDuration
// self.twoFactorEnabled = twoFactorEnabled
// self.rsaPublicKey = rsaPublicKey
// self.passwordResetToken = passwordResetToken
// self.state = state
// self.createdAt = createdAt
// self.updatedAt = updatedAt
// self.deletedAt = deletedAt

// class Profile:
//     def __init__(self, profileID, uniqRef, slug, firstName, lastName, dateOfBirth, gender, nationality, phoneNumber, location, idCardNumber, passportNumber, socialSecurityNumber, state, createdAt, updatedAt, deletedAt):
// self.profileID = profileID
// self.uniqRef = uniqRef
// self.slug = slug
// self.firstName = firstName
// self.lastName = lastName
// self.dateOfBirth = dateOfBirth
// self.gender = gender
// self.nationality = nationality
// self.phoneNumber = phoneNumber
// self.location = location
// self.idCardNumber = idCardNumber
// self.passportNumber = passportNumber
// self.socialSecurityNumber = socialSecurityNumber
// self.state = state
// self.createdAt = createdAt
// self.updatedAt = updatedAt
// self.deletedAt = deletedAt

module.exports = User;
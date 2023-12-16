
// ENUM 
// To search from a path to import from a list of path : ([a-z\/-]*)/([a-zA-Z]*).js  with import $2 from '$0.js' ;
import AuditLogActionType from './src/enums/AuditLogActionType.js';
import DevisStage from './src/enums/DevisStage.js';
import FollowedEntityType from './src/enums/FollowedEntityType.js';
import MediaType from './src/enums/MediaType.js';
import NotificationFrequencyPref from './src/enums/NotificationFrequencyPref.js';
import ObjectStatus from './src/enums/ObjectStatus.js';
import OrganizationEconomicSizeKind from './src/enums/OrganizationEconomicSizeKind.js';
import PaymentMethodType from './src/enums/PaymentMethodType.js';
import PaymentStatus from './src/enums/PaymentStatus.js';
import PlaceKind from './src/enums/PlaceKind.js';
import ProfileGender from './src/enums/ProfileGender.js';
import ServiceBillingPlan from './src/enums/ServiceBillingPlan.js';
import ServicesAcceptedDevice from './src/enums/ServicesAcceptedDevice.js';
import ServiceSupplyForm from './src/enums/ServiceSupplyForm.js';
import ServiceUptakeType from './src/enums/ServiceUptakeType.js';
import CriteriaTargetedEntity from './src/enums/CriteriaTargetedEntity.js';
import UserType from './src/enums/UserType.js';

// console.log(Object.values(ObjectStatus))
// console.log(Object.values(MediaType))
// console.log(ObjectStatus)
// console.log(MediaType)

import modelApplication from './src/models/Application.js';
import modelApplicationKey from './src/models/ApplicationKey.js';
import modelAsset from './src/models/Asset.js';
import modelAuditLog from './src/models/AuditLog.js';
import modelComment from './src/models/Comment.js';
import modelCriteria from './src/models/Criteria.js';
import modelDevis from './src/models/Devis.js';
import modelDevisAsset from './src/models/DevisAsset.js';
import modelDiscount from './src/models/Discount.js';
import modelDocumentation from './src/models/Documentation.js';
import modelFaqAnswer from './src/models/FaqAnswer.js';
import modelFaqOrganization from './src/models/FaqOrganization.js';
import modelFaqQuestion from './src/models/FaqQuestion.js';
import modelFaqService from './src/models/FaqService.js';
import modelFollow from './src/models/Follow.js';
import modelIndustry from './src/models/Industry.js';
import modelInvoice from './src/models/Invoice.js';
import modelMedia from './src/models/Media.js';
import modelNotification from './src/models/Notification.js';
import modelOrganization from './src/models/Organization.js';
import modelOrganizationMedia from './src/models/OrganizationMedia.js';
import modelPaymentConfig from './src/models/PaymentConfig.js';
import modelPaymentMethod from './src/models/PaymentMethod.js';
import modelPlace from './src/models/Place.js';
import modelProfile from './src/models/Profile.js';
import modelReview from './src/models/Review.js';
import modelRole from './src/models/Role.js';
import modelService from './src/models/Service.js';
import modelServiceAsset from './src/models/ServiceAsset.js';
import modelServiceAttribute from './src/models/ServiceAttribute.js';
import modelServiceMedia from './src/models/ServiceMedia.js';
import modelTag from './src/models/Tag.js';
import modelTermsAndConditions from './src/models/TermsAndConditions.js';
import modelTopic from './src/models/Topic.js';
import modelTransaction from './src/models/Transaction.js';
import modelUser from './src/models/User.js';
import modelUserOrganization from './src/models/UserOrganization.js';
import modelUserPreferences from './src/models/UserPreferences.js';
import modelUserRole from './src/models/UserRole.js';
import modelUserToken from './src/models/UserToken.js';

export {
    modelApplication, modelApplicationKey, modelAsset,
    modelAuditLog, modelComment, modelCriteria, modelDevis,
    modelDevisAsset, modelDiscount, modelDocumentation,
    modelFaqAnswer, modelFaqOrganization, modelFaqQuestion,
    modelFaqService, modelFollow, modelIndustry, modelInvoice,
    modelMedia, modelNotification, modelOrganization,
    modelOrganizationMedia, modelPaymentConfig,
    modelPaymentMethod, modelPlace, modelProfile, modelReview,
    modelRole, modelService, modelServiceAsset,
    modelServiceAttribute, modelServiceMedia, modelTag,
    modelTermsAndConditions, modelTopic, modelTransaction,
    modelUser,
    modelUserOrganization, modelUserPreferences,
    modelUserRole, modelUserToken,
    AuditLogActionType, DevisStage, FollowedEntityType,
    MediaType, NotificationFrequencyPref,
    ObjectStatus, OrganizationEconomicSizeKind,
    PaymentMethodType, PaymentStatus, PlaceKind,
    ProfileGender, ServiceBillingPlan, ServicesAcceptedDevice,
    ServiceSupplyForm, ServiceUptakeType, CriteriaTargetedEntity, UserType,
}
// ...

// ./src/models/Notification.js
import NotificationType from "../enums/NotificationType.js";
import { BaseEntityMixin } from "../mixins/BaseEntityMixin.js";
import { DataTypes, Model } from "sequelize";
// TODO Create NotificationCategory and import it
import createId from '../mixins/createId.js'


export default (db) => {
  class Notifications extends BaseEntityMixin(Model) {}

  Notifications.init(
    db,
    DataTypes,
    {
      notificationID: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => createId(),
        allowNull: false,
      },
      userID: { type: DataTypes.STRING,
        allowNull: false,
      },

      notificationTemplateID: { type: DataTypes.STRING,
      },

      notificationType: {
        type: DataTypes.ENUM(Object.values(NotificationType)),
        defaultValue: NotificationType.PUSH,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      // TODO: update to messageTemplateID which will help to built messages
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      readAt: DataTypes.DATE,
      link: DataTypes.STRING(255),
    },
    {
      sequelize: db,
      modelName: "Notification",
      tableName: "Notification",
      timestamps: true,
      paranoid: true, // This will add a "deletedAt" column and allow soft deletes
    }
  );
  return Notifications;
};

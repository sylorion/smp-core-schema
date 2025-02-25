import { ProfileResolvers, UserPreferencesResolvers } from "../../../src/graphql/Resolvers";

/**
 * Handles the User.created event to create a Profile and UserPreferences
 * for the new user.
 *
 * @param {Object} parsedData - The parsed data object containing the event information.
 * @param {Object} messageData - The original message data.
 * @param {Object} rabbitMQService - The RabbitMQ service instance.
 * @returns {Promise<void>}
 */
async function handleUserCreated(parsedData) {
  try {
    const { email, userID } = parsedData; // Assumes userID and email are included in parsedData.

    if (!userID) {
      console.error(`[handleUserCreated] Missing userID for email: ${email}`);
      return;
    }

    console.log(`[handleUserCreated] Processing user: ${email} with userID: ${userID}`);

    // Create Profile
    const profileInput = {
      firstName: null, // Placeholder values
      lastName: null,
      dateOfBirth: null,
      gender: null,
      nationality: null,
      phoneNumber: null,
      locationID: null,
      userID: userID,
      authorID: userID, 
      idCardNumber: null,
      passportNumber: null,
      socialSecurityNumber: null,
    };

    console.log(`[handleUserCreated] Creating Profile for userID: ${userID}`);
    const profile = await ProfileResolvers.createProfile({ input: profileInput });
    console.log(`[handleUserCreated] Profile created:`, profile);

    // Create UserPreferences
    const preferencesInput = {
      userID: userID,
      lang: "fr", // Default language
      timeZone: "UTC", // Default timezone
      notificationPreferences: { email: true, sms: false }, // JSON example
      privacySettings: { shareData: false }, // JSON example
      theme: 1, // Default theme
      marketplaceConfig: { showPrices: true }, // JSON example
      defaultCurrency: "eur", // Default currency
      defaultPaymentMethodID: null, // No payment method by default
      notificationFrequency: "daily", // Default notification frequency
      showRecommendations: true, // Default recommendation setting
      otherSettings: {}, // Empty JSON
    };

    console.log(`[handleUserCreated] Creating UserPreferences for userID: ${userID}`);
    const userPreferences = await UserPreferencesResolvers.createUserPreferences({ input: preferencesInput });
    console.log(`[handleUserCreated] UserPreferences created:`, userPreferences);

    console.log(`[handleUserCreated] Successfully completed processing for user: ${email}`);
  } catch (error) {
    console.error(`[handleUserCreated] Error processing user creation for email: ${email}`, error);
  }
}

export { handleUserCreated };

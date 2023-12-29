// ./src/mixins/BaseConfigurationMixin.js

function BaseConfigurationMixin(GivenConfiguration) {
  const baseConfigs = {
    interfaceAppearance: {
      theme: 'light' | 'dark' | 'auto', // User interface theme preference
      fontSize: 'small' | 'medium' | 'large' | 'auto', // Font size preference
      interfaceElementSize: 'small' | 'normal' | 'large', // Interface element size preference
      colorScheme: 'gray' | 'orange' | 'red' | 'black' | 'custom', // Preferred color scheme
      borderStyle: 'solid' | 'dotted' | 'dashed', // Element border style preference
      spacing: 'compact' | 'standard' | 'spacious', // Spacing between elements preference
      shadow: 'none' | 'subtle' | 'strong', // Intensity of element shadows preference
      visualEffects: true | false, // Global visual effects preference
      animation: 'smooth' | 'fast' | 'none', // Animation preferences
      compactMode: true | false, // Compact mode for reduced space usage
      displayDensity: 'low' | 'medium' | 'high', // Display density preference
      toolbarPosition: 'top' | 'bottom', // Toolbar position preference 
    },
    languageFormatting: {
      preferredLanguage: 'FR_fr', // User's preferred language
      dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD', // Date format preference
      timeFormat: '12h' | '24h', // Time display format preference
      timezone: 'GMT' | 'UTC' | 'EST', // Preferred timezone
      languageVariety: 'formal' | 'informal', // Preferred language variety
      pronunciation: 'accented' | 'neutral', // Pronunciation preference
      punctuationStyle: 'standard' | 'minimal', // Preferred punctuation style
    },
    notificationsCommunication: {
      channalMode: 'email', // | 'push' | 'sms', // Preferred notification mode
      frequency: 'immediate', // | 'daily' | 'weekly' | 'monthly' | 'never', // Frequency of notifications
      allowPersonalMailChannel: true,
      allowBusinessMailChannel: true,
      allowMobileCallChannel: true,
      allowMobileSMSChannel: true,
      allowMobileAppPushChannel: true,
      allowMobileAppPopUpChannel: true,
      allowInboxChannel: true,
      allowDirectMessage: true,
      allowGroupMessage: true,
      allowTeamMessage: true,
      blockUnknownMessages: true,
      GroupMessageSound: true,
      directMessageSound: true,
      notificationPopup: true, // Display notification pop-ups
      conversationTone: 'formal', // | 'casual' | 'friendly', // Preferred conversation tone
      contactAvatars: 'show', // | 'hide', // Display contact avatars 
    },
    privacySecurity: {
      privacyInfoVisibility: 'public', // | 'private' | 'friends_only', // Privacy settings
      displaySensitiveInfo: 'hide' | 'partially' | 'fully', // Display of sensitive information when privacyInfoVisibility is set to public
      allowCookies: true,  // Cookie consent
      allowPersonalBehaviourCookies: true, // Cookie consent
      allowAdsCookies: true, // Cookie consent
      allowTracingCookies: true, // Cookie consent
      allowPerformanceCookies: true,  // Cookie consent
      allowAnalyticCookies: true, // Cookie consent
      allowMetricCookies: true, // Cookie consent
      allowUserSpaceCookies: true, // Cookie consent
      allowOrganizationCookies: true, // Cookie consent
      allowPartenersCookies: true,  // Cookie consent
      allowFunctionnalCookies: true, // Cookie consent
      allowOptimizationCookies: true, // Cookie consent
      enablePasswordTwoFactorEmail: true, // 2FEmail
      enablePasswordTwoFactorMobileCall: true, // 2FMobile Call
      enablePasswordTwoFactorMobileSMS: true, // 2FMobile SMS
      enablePasswordTwoFactorMobileApp: true, // 2FMobile APP
      enablePasswordTwoFactorTokenGen: true, // 2FMobile Token Generator
      passwordTwoFactorTokenGenProvider: 'google', // | microsoft, github, authoz 2FMobile Token Generator Provider
      passwordSecurityComplexity: 'medium', // 'complex' | 'high' | 'medium', 'low', 'pin',  // Password security settings
      allowBiometricAccess: true | false, // Biometric access permission
      lockScreenTimeout: '15s' | '30s' | '1m' | '5m' | 'never', // Screen lock timeout Nm = Xs = X secondes, N minutes, Mh = M hours
      autoClearCache: true, // Automatic cache clearance
      anonymousBrowsing: false, // Anonymous browsing 
    },
    advancedPreferences: {
      allowPersonalizedAdvertising: true, // Advertising preferences
      allowedThirdPartyIntegrations: 'Google_Drive', // | 'Dropbox' | 'social_networks', // Allowed third-party integrations
      automaticSyncData: true, // Data automatic synchronization  
      advancedEditingTools: 'full', // | 'basic', // Advanced editing tools
      dataStorageLocation: 'local', // | 'cloud', // Data storage location
      dataExportFormat: 'JSON', // | 'CSV' | 'XML', // Data export format 
    },
    financialPreferences: {
      defaultCurrency: 'usd' | 'eur' | 'gbp' | 'jpy', // Devise par défaut pour les transactions financières
      budgetDisplay: 'monthly' | 'annual', // Affichage du budget par mois ou par an
      currencyFormatting: 'symbol' | 'code' | 'name',  // Formatage de la devise (symbole, code, nom)
      investmentRiskLevel: 'low' | 'medium' | 'high', // Niveau de risque d'investissement préféré
      portfolioPerformanceDisplay: 'chart' | 'table' | 'summary', // Affichage des performances de portefeuille (graphique, tableau, résumé)
      taxReportingMethod: 'fifo' | 'lifo' | 'average', // Méthode de déclaration fiscale (FIFO, LIFO, moyenne)
      expenseCategories: '', // Catégories personnalisées de dépenses
      incomeSources: '', // Sources personnalisées de revenus
      // ... Ajoutez d'autres préférences financières si nécessaire
    },
    unitsOfMeasurement: {
      length: 'metric', //| 'imperial', // Unité de mesure pour la longueur (métrique ou impérial)
      weight: 'metric', // | 'imperial', // Unité de mesure pour le poids (métrique ou impérial)
      temperature: 'metric', // | 'imperial', // Unité de mesure pour la température (métrique ou impérial)
      volume: 'metric', // | 'imperial', // Unité de mesure pour le volume (métrique ou impérial)
      speed: 'metric', // | 'imperial', // Unité de mesure pour la vitesse (métrique ou impérial)
      area: 'metric', // | 'imperial', // Unité de mesure pour la surface (métrique ou impérial)
      pressure: 'metric', // | 'imperial', // Unité de mesure pour la pression (métrique ou impérial)
      energy: 'metric', // | 'imperial', // Unité de mesure pour l'énergie (métrique ou impérial)
      time: '24h', // | '12h', // Format de l'heure (24 heures ou 12 heures)
    },
    accountingPreferences: {
      accountingMethod: 'cash', // Méthode de comptabilité (caisse ou engagement)
      fiscalYearStartMonth: 'January', // Mois de début de l'exercice fiscal
      chartOfAccounts: [], // Plan comptable personnalisé (tableau de chaînes)
      useDoubleEntryAccounting: true, // Utilisation de la comptabilité en partie double
      enableAutoReconciliation: false, // Activation de la réconciliation automatique
      taxIdentificationNumber: '', // Numéro d'identification fiscale
      expenseApprovalRequired: true, // Validation des dépenses requise
      incomeRecognitionMethod: 'completed_contract', // Méthode de reconnaissance du revenu
      // ... Ajoutez d'autres préférences de comptabilité si nécessaire
    },
    additionalPreferences: {
      option101: '', // Example of an additional preference of type string
      option102: 0, // Example of an additional preference of type int
      option200: false, // Example of an additional preference of type boolean
    },
  };

  if (GivenConfiguration) {
    return class extends GivenConfiguration {
      static init(newAttributes, config = {}) {
        return super.init({
          ...newAttributes, 
          ...baseConfigs}, configs);
      }
    };
  } else {
    return class {
      constructor(newAttributes, config = {}) {
        this.preferences = {
          ...newAttributes, // attributs transmis 
          ...baseConfigs
        };
      }
    };
  }
}

export { BaseConfigurationMixin };
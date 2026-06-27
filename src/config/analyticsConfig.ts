import type { AnalyticsConfig } from "../types/analyticsConfig";

export const analyticsConfig: AnalyticsConfig = {
  // Google Analytics ID
  googleAnalyticsId: "",

  // Microsoft Clarity ID
  microsoftClarityId: "",

  // Umami analytics configuration
  umamiAnalytics: {
    // Umami Website ID
    websiteId: "",

    // Umami script URL. Supports self hosted instances
    scriptUrl: "https://cloud.umami.is/script.js",

    // Umami session replay script URL. Supports self hosted instances
    replaysScriptUrl: "https://cloud.umami.is/recorder.js",

    // Track outbound links
    trackOutboundLinks: true,

    // Collect Web Vitals metrics
    collectWebVitals: false,

    // Session replay configuration
    replays: {
      // Enable session replay
      enabled: false,

      // Session recording sample rate. Range: 0 to 1.
      // For example, 0.15 records 15% of all sessions
      sampleRate: 0.15,

      // Privacy masking level:
      // "moderate" masks all input fields.
      // "strict" additionally masks all page text
      maskLevel: "moderate",

      // Maximum recording duration per session (milliseconds)
      maxDuration: 300000,

      // CSS selector for elements excluded from recording
      // Example: ".sensitive-widget"
      blockSelector: "",
    },
  },

  // 51la analytics configuration
  la51Analytics: {
    // 51la analytics ID
    Id: "",

    // Custom SDK script URL.
    // Leave empty to use the default URL
    sdkUrl: "",

    // Data isolation identifier for multiple analytics IDs.
    // Leave empty to use the Id value
    ck: "",

    // Enable event tracking
    autoTrack: false,

    // Enable Hash routing mode.
    // This project uses the History API, so this should remain false
    hashMode: false,

    // Enable session recording
    screenRecord: true,
  },
};

import type { ExpressiveCodeConfig } from "../types/expressiveCodeConfig";

/**
 * Expressive Code Configuration
 *
 * @see https://expressive-code.com/
 *
 * Note:
 * After modifying this configuration, you must restart
 * the Astro development server for the changes to take effect.
 */
export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Dark theme (used in dark mode)
  darkTheme: "one-dark-pro",

  // Light theme (used in light mode)
  lightTheme: "one-light",

  // For more themes and styling options, see the official documentation:
  // https://expressive-code.com/guides/themes/

  // Collapsible code block plugin configuration
  pluginCollapsible: {
    // Enable collapsible code blocks
    enable: true,

    // Show the collapse button when the code block
    // exceeds this number of lines
    lineThreshold: 15,

    // Number of lines visible when collapsed
    previewLines: 8,

    // Collapse long code blocks by default
    defaultCollapsed: true,
  },

  // Language badge plugin configuration
  pluginLanguageBadge: {
    // Enable language badges
    enable: false,
  },
};

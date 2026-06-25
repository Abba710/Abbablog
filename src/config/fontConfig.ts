/**
 * Font Configuration (Centralized Entry Point)
 *
 * All font related settings are defined in this file.
 *
 * For detailed usage, see the Astro documentation:
 * https://docs.astro.build/en/guides/fonts
 *
 * - fonts:
 *   Astro Font API font definitions
 *   (automatic download, caching, and optimized loading)
 *
 * - fontConfig:
 *   Font selection and region specific overrides
 *
 * To add a new font:
 *
 * 1. Add a font definition to the `fontsList` array below.
 * 2. Reference its `cssVariable` in `fontConfig.selected`
 *    or one of the region specific font settings.
 *
 * Supported providers:
 * https://docs.astro.build/en/reference/font-provider-reference/#built-in-providers
 *
 *   "google"     - Google Fonts
 *   "fontsource" - Fontsource
 *   "local"      - Local font files
 *   "bunny"      - Bunny Fonts
 *   "fontshare"  - Fontshare
 *   "npm"        - NPM packages (such as @fontsource/*)
 *
 * Local font subsetting:
 * Add configuration for the corresponding cssVariable
 * in `fontConfig.subsetFonts`.
 *
 * During the build process, the subsetting script will
 * automatically scan page content and generate lightweight
 * WOFF2 subsets containing only the required characters.
 */

import type { FontDefinition, FontSelectionConfig } from "@/types/fontConfig";

// ─── Astro Font API Font Definitions ─────────────────────────────
//
// Font configuration used by the Astro Font API.
// Supports automatic downloading, caching, and optimized loading.
//
// Note:
// When developing locally, changes require restarting
// the development server to take effect.
//
export const fontsList: FontDefinition[] = [
  {
    name: "Zen Maru Gothic",
    cssVariable: "--font-zen-maru-gothic",
    provider: "fontsource",
    weights: ["300", "400", "500", "600", "700"],
    styles: ["normal"],
    subsets: ["latin", "cyrillic"],
    fallbacks: ["sans-serif"],
  },
  {
    name: "Inter",
    cssVariable: "--font-inter",
    provider: "fontsource",
    weights: ["300", "400", "500", "600", "700"],
    styles: ["normal"],
    subsets: ["latin", "cyrillic"],
    fallbacks: ["sans-serif"],
  },
  {
    name: "JetBrains Mono",
    cssVariable: "--font-jetbrains-mono",
    provider: "fontsource",
    weights: ["400", "700"],
    styles: ["normal"],
    subsets: ["latin", "cyrillic"],
    fallbacks: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace",
    ],
  },

  // ─── Local Font Example ─────────────────────────────
  //
  // Setup steps:
  //
  // 1. Place your TTF, OTF, or WOFF2 font files in:
  //    public/assets/fonts/
  //
  // 2. Configure the font information below.
  //
  // 3. Reference the cssVariable in
  //    fontConfig.selected or one of the region settings.
  //
  {
    name: "GreatVibes Regular 2",
    cssVariable: "--font-greatvibes",
    provider: "local",
    options: {
      variants: [
        {
          src: ["./public/assets/fonts/GreatVibes-Regular-2.otf"],
        },
      ],
    },
    fallbacks: ["sans-serif"],
  },
];

// ─── Font Selection & Region Overrides ──────────────────────────

export const fontConfig: FontSelectionConfig = {
  // Enable custom font support
  enable: true,

  // Currently selected font CSS variable(s)
  // Must match a cssVariable defined above.
  //
  // Use "system" to use the system font stack
  // without loading any custom fonts.
  selected: ["system"],

  // Region specific font overrides.
  //
  // Use a cssVariable defined in fontsList.
  // Leave empty to use the global selected font.
  //
  // Example:
  // bannerTitleFont: "--font-inter"
  // Uses Inter for the homepage banner title.

  // Homepage banner title font
  bannerTitleFont: "--font-zen-maru-gothic",

  // Homepage banner subtitle font
  bannerSubtitleFont: "--font-inter",

  // Navigation bar title font
  navbarTitleFont: "",

  // Code block font
  // Used for syntax highlighting and monospaced content
  codeFont: "--font-jetbrains-mono",

  // Local font subsetting configuration
  // Processed by scripts/subset-fonts.ts during build
  //
  // Key:
  // Corresponding cssVariable from fontsList
  //
  // Value:
  // Font subsetting options
  subsetFonts: {
    "--font-greatvibes": {
      // Additional characters to include
      extraChars: "",
    },
  },
};

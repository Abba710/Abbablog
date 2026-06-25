// Configuration Index File
// Exports all configurations from a single entry point.
// This allows components to import multiple related configurations
// at once, reducing repetitive import statements.

// Type Exports
export type {
  AdConfig,
  AnalyticsConfig,
  AnnouncementConfig,
  BackgroundWallpaperConfig,
  CommentConfig,
  CoverImageConfig,
  ExpressiveCodeConfig,
  FooterConfig,
  GalleryAlbum,
  GalleryConfig,
  LicenseConfig,
  MusicPlayerConfig,
  NavBarConfig,
  PlantUMLConfig,
  ProfileConfig,
  SakuraConfig,
  SidebarLayoutConfig,
  SiteConfig,
  SponsorConfig,
  SponsorItem,
  SponsorMethod,
  WidgetComponentConfig,
  WidgetComponentType,
  WidgetSpecificConfig,
} from "../types/config";

export type {
  BuiltinFontProvider,
  CustomFontProvider,
  FontDefinition,
  FontSelectionConfig,
} from "../types/fontConfig"; // Font type definitions

// Analytics Configuration
export { analyticsConfig } from "./analyticsConfig";

// Announcement Configuration
export { announcementConfig } from "./announcementConfig";

// Style Configuration
export { backgroundWallpaper } from "./backgroundWallpaper"; // Background wallpaper configuration

// Feature Configuration
export { commentConfig } from "./commentConfig"; // Comment system configuration
export { coverImageConfig } from "./coverImageConfig"; // Cover image configuration
export { sakuraConfig } from "./effectsConfig"; // Visual effects configuration (sakura petals, etc.)
export { expressiveCodeConfig } from "./expressiveCodeConfig"; // Code highlighting configuration
export { fontConfig, fontsList } from "./fontConfig"; // Font configuration
export { footerConfig } from "./footerConfig"; // Footer configuration
export { friendsPageConfig, getEnabledFriends } from "./friendsConfig"; // Friends links configuration
export { galleryConfig } from "./galleryConfig"; // Gallery configuration
export { licenseConfig } from "./licenseConfig"; // License configuration

// Component Configuration
export { musicPlayerConfig } from "./musicConfig"; // Music player configuration
export { navBarConfig, navBarSearchConfig } from "./navBarConfig"; // Navigation bar and search configuration
export { live2dWidgetConfig, spineModelConfig } from "./pioConfig"; // Live2D / virtual assistant configuration
export { plantumlConfig } from "./plantumlConfig"; // PlantUML diagram configuration
export { profileConfig } from "./profileConfig"; // User profile configuration

// Layout Configuration
export { sidebarLayoutConfig } from "./sidebarConfig"; // Sidebar layout configuration

// Core Configuration
export { siteConfig } from "./siteConfig"; // Site configuration
export { sponsorConfig } from "./sponsorConfig"; // Sponsorship / donation configuration

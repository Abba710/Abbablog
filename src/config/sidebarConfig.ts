import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * Sidebar layout configuration
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  // Enable sidebar functionality
  enable: true,

  // Sidebar position:
  // left: left sidebar only
  // right: right sidebar only
  // both: dual sidebars
  // On screens wider than 1280px both sidebars are shown.
  // On tablets (769-1279px), only one sidebar is shown based on tabletSidebar.
  position: "both",

  // Which sidebar to show on tablets (769-1279px)
  // Only applies when position is set to "both"
  // left: show left sidebar
  // right: show right sidebar
  tabletSidebar: "left",

  // When using a single sidebar (left or right),
  // show the opposite sidebar on post pages
  showBothSidebarsOnPostPage: true,

  // Left sidebar components
  // Rendering order follows the array order
  // Components with position "top" render before "sticky" components
  leftComponents: [
    {
      // Profile component
      type: "profile",

      // Enable component
      enable: true,

      // Component position
      position: "top",

      // Show on post pages
      showOnPostPage: true,
    },
    {
      // Announcement component
      type: "announcement",

      // Enable component
      enable: false,

      // Component position
      position: "top",

      // Show on post pages
      showOnPostPage: true,
    },
    {
      // Music player component
      type: "music",

      // Enable component
      enable: false,

      // Component position
      position: "sticky",

      // Show on post pages
      showOnPostPage: true,
    },
    {
      // Categories component
      type: "categories",

      // Enable component
      enable: true,

      // Component position
      position: "sticky",

      // Show on post pages
      showOnPostPage: true,

      // Component specific configuration
      specificConfig: {
        // Auto collapse when category count exceeds 5
        collapseThreshold: 5,
      },
    },
    {
      // Tags component
      type: "tags",

      // Enable component
      enable: true,

      // Component position
      position: "sticky",

      // Show on post pages
      showOnPostPage: true,

      // Component specific configuration
      specificConfig: {
        // Auto collapse when tag count exceeds 10
        collapseThreshold: 10,
      },
    },
  ],

  // Right sidebar components
  rightComponents: [
    {
      // Site statistics component
      type: "stats",

      // Enable component
      enable: true,

      // Component position
      position: "top",

      // Show on post pages
      showOnPostPage: true,
    },
    {
      // Site information component
      type: "siteInfo",

      // Enable component
      enable: true,

      // Component position
      position: "top",

      // Show on post pages
      showOnPostPage: true,

      // Component specific configuration
      specificConfig: {
        siteInfo: {
          // Fallback text when build platform cannot be detected
          unknownBuildPlatform: "Unknown CI",
        },
      },
    },
    {
      // Calendar component
      type: "calendar",

      // Enable component
      enable: true,

      // Hide component title
      showTitle: false,

      // Component position
      position: "sticky",

      // Hide on post pages
      showOnPostPage: false,

      // Component specific configuration
      specificConfig: {
        calendar: {
          // Show yearly post activity heatmap
          showHeatmap: true,
        },
      },
    },
    {
      // Table of contents component
      // Only displayed on post pages
      type: "sidebarToc",

      // Enable component
      enable: true,

      // Component position
      position: "sticky",

      // Show on post pages
      showOnPostPage: true,

      // Hide on non-post pages
      hideOnNonPostPage: true,
    },
    {
      // Advertisement component #1
      type: "advertisement",

      // Enable component
      enable: false,

      // Hide component title
      showTitle: false,

      // Component position
      position: "sticky",

      // Show on post pages
      showOnPostPage: true,

      // Advertisement configuration
      specificConfig: {
        ad: {
          image: {
            src: "/assets/images/ad/ad1.webp",
            alt: "Advertisement Banner",
            link: "https://haoka.lot-ml.com/plugreg.html?agentid=1423316",
            external: true,
          },

          // Allow users to close the ad
          closable: false,

          // Display limit (-1 = unlimited)
          displayCount: -1,

          // Component padding
          padding: {
            all: "1rem",
          },
        },
      },
    },
    {
      // Advertisement component #2
      type: "advertisement",

      // Enable component
      enable: true,

      // Component position
      position: "sticky",

      // Show on post pages
      showOnPostPage: true,

      // Advertisement configuration
      specificConfig: {
        ad: {
          title: "Support the Author",

          content:
            "If you find the content on this site helpful, consider supporting my work. Your support helps keep the project alive and growing.",

          link: {
            text: "Buy me a coffee",
            url: "https://buymeacoffee.com/Abba710",
            external: true,
          },

          closable: false,

          // Display limit (-1 = unlimited)
          displayCount: -1,
        },
      },
    },
  ],

  // Mobile bottom components
  // Displayed only on screens smaller than 768px
  mobileBottomComponents: [
    {
      // Profile component
      type: "profile",
      enable: true,
      showOnPostPage: true,
    },
    {
      // Announcement component
      type: "announcement",
      enable: true,
      showOnPostPage: true,
    },
    {
      // Music player component
      type: "music",
      enable: false,
      showOnPostPage: false,
    },
    {
      // Categories component
      type: "categories",
      enable: true,
      showOnPostPage: true,
      specificConfig: {
        // Auto collapse when category count exceeds 5
        collapseThreshold: 5,
      },
    },
    {
      // Tags component
      type: "tags",
      enable: true,
      showOnPostPage: true,
      specificConfig: {
        // Auto collapse when tag count exceeds 10
        collapseThreshold: 10,
      },
    },
    {
      // Site statistics component
      type: "stats",
      enable: true,
      showOnPostPage: true,
    },
    {
      // Site information component
      type: "siteInfo",
      enable: true,
      showOnPostPage: true,
      specificConfig: {
        siteInfo: {
          // Fallback text when build platform cannot be detected
          unknownBuildPlatform: "Unknown CI",
        },
      },
    },
  ],
};

import type { SiteConfig } from "@/types/siteConfig";

// Site language
// Language code, e.g. 'zh_CN', 'zh_TW', 'en', 'ja', 'ru'.
const SITE_LANG = "en";

export const siteConfig: SiteConfig = {
  // Site title
  title: "Abba Blog",

  // Site subtitle
  subtitle: "",

  // Site URL
  site_url: "https://abbablog.me",

  // Site description
  description:
    "A personal blog about indie hacking, self improvement, technology, and the journey of building things that matter.",

  // Site keywords
  keywords: [
    "indie hacking",
    "startup",
    "software development",
    "web development",
    "astro",
    "typescript",
    "programming",
    "self improvement",
    "learning in public",
    "building in public",
    "technology",
    "personal blog",
  ],

  // Theme color settings
  themeColor: {
    // Default theme hue (0-360)
    // Examples: red = 0, cyan = 200, teal = 250, pink = 345
    hue: 290,

    // Hide theme color selector from visitors
    fixed: false,

    // Default mode: "light", "dark", or "system"
    defaultMode: "dark",
  },

  // Overall page width (rem)
  // Larger values make the content area wider
  // For layouts with a sidebar, a smaller width is recommended
  pageWidth: 100,

  // Card style configuration
  card: {
    // Enable card borders and shadows
    border: true,

    // Make card colors follow the selected theme hue
    followTheme: false,
  },

  // Favicon configuration
  favicon: [
    {
      // Icon file path
      src: "/favicon/favicon.ico",

      // Optional theme: "light" | "dark"
      // theme: "light",

      // Optional icon size
      // sizes: "32x32",
    },
  ],

  // Navbar configuration
  navbar: {
    // Navbar logo
    // Supported logo types:
    // 1. Astro icon
    // 2. Public image (not optimized)
    // 3. Src image (optimized at build time)
    // 4. External image
    logo: {
      type: "image",
      value: "assets/images/firefly.png",
      alt: "🍀",
    },

    // Navbar title
    title: "Abba Blog",

    // Full width navbar
    widthFull: false,

    // Menu alignment: "left" or "center"
    menuAlign: "center",

    // Apply theme color to logo and title
    followTheme: false,

    // Keep navbar visible at the top while scrolling
    stickyNavbar: true,
  },

  // Site launch date used for uptime/day counter
  siteStartDate: "2025-09-01",

  // Site timezone (IANA timezone string)
  // Used for formatting dates in RSS, Bangumi, etc.
  timezone: "Asia/Almaty",

  // Page visibility settings
  // Disabled pages return 404 and are hidden from navigation
  pages: {
    // Friends page
    friends: false,

    // Sponsor page
    sponsor: true,

    // Guestbook page
    guestbook: true,

    // Bangumi page
    bangumi: false,

    // Gallery page
    gallery: false,

    // Anime tracking page
    anime: false,
  },

  // Category navigation bar
  // Display category shortcuts on the homepage and archive page
  categoryBar: true,

  // Collapse articles from older years on archive pages
  foldArticle: true,

  // Post list layout configuration
  postListLayout: {
    // Default layout mode:
    // "list" = single column
    // "grid" = multi-column layout
    defaultMode: "list",

    // Default mobile layout
    mobileDefaultMode: "list",

    // Show tags in post list
    showTags: true,

    // Number of description lines before truncation
    descriptionLines: 2,

    // Allow visitors to switch layouts
    allowSwitch: true,

    // Grid layout configuration
    grid: {
      // Enable masonry layout
      masonry: false,

      // Minimum card width in grid layout (px)
      columnWidth: 320,
    },
  },

  // Post page configuration
  post: {
    // Admonition / Callout settings
    rehypeCallouts: {
      theme: "github",

      // Enable Python-Markdown style admonitions (!!! and ???)
      enablePythonMarkdownAdmonitions: false,
    },

    // Show "Last Modified" card below posts
    showLastModified: true,

    // Days before a post is considered outdated
    outdatedThreshold: 30,

    // Enable share poster generation
    sharePoster: true,

    // Generate OpenGraph images
    generateOgImages: false,
  },

  // Pagination settings
  pagination: {
    // Number of posts per page
    postsPerPage: 10,
  },

  // Image optimization settings
  imageOptimization: {
    // Output image format:
    // "avif" | "webp" | "both"
    formats: "webp",

    // Image quality (1-100)
    quality: 85,

    // Add referrerpolicy="no-referrer" for specific domains
    noReferrerDomains: ["*.hdslb.com", "*.bilibili.com"],
  },

  // Site language
  lang: SITE_LANG,
};

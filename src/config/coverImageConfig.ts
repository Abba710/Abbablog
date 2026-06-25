import type { CoverImageConfig } from "../types/coverImageConfig";

/**
 * Article Cover Image Configuration
 *
 * enableInPost:
 * Controls whether cover images are displayed on article detail pages.
 *
 * Random Cover Image Usage:
 *
 * 1. Add `image: "api"` to an article's frontmatter to enable
 *    random cover image generation.
 *
 * 2. The system will try each configured API in order.
 *    If all APIs fail, the fallback image will be used.
 *
 * Frontmatter Example:
 *
 * ---
 * title: Article Title
 * image: "api"
 * ---
 */
export const coverImageConfig: CoverImageConfig = {
  // Display cover image on article pages
  enableInPost: true,

  randomCoverImage: {
    // Enable random cover image feature
    enable: false,

    // Random image API endpoints
    apis: [
      "https://t.alcy.cc/pc",
      "https://www.dmoe.cc/random.php",
      "https://uapis.cn/api/v1/random/image?category=acg&type=pc",
    ],

    // Fallback image path used if all APIs fail
    // Can be a path relative to the src directory
    // or a path inside the public directory starting with "/"
    fallback: "assets/images/cover.avif",

    // Show loading animation while fetching images
    showLoading: false,
  },
};

import type { CommentConfig } from "../types/commentConfig";

export const commentConfig: CommentConfig = {
  // Comment system type:
  // none, twikoo, waline, giscus, disqus, artalk
  //
  // Default: none (comments disabled)
  type: "none",

  // Twikoo configuration
  twikoo: {
    envId: "https://twikoo.vercel.app",

    // Twikoo language
    lang: "en",

    // Enable page view statistics
    visitorCount: true,

    // Twikoo JavaScript file URL (CDN supported)
    //
    // Recommended for China:
    // https://registry.npmmirror.com/twikoo/1.7.12/files/dist/twikoo.min.js
    // https://s4.zstatic.net/npm/twikoo@1.7.13/dist/twikoo.min.js
    //
    // Recommended internationally:
    // https://cdn.jsdelivr.net/npm/twikoo@1.7.13/dist/twikoo.min.js
    jsUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.13/dist/twikoo.min.js",

    // Custom Twikoo CSS file
    // Leave empty to disable custom styling
    cssUrl: "/assets/css/twikoo-custom.css",
  },

  // Waline configuration
  waline: {
    // Waline backend service URL
    serverURL: "https://waline.vercel.app",

    // Waline language
    lang: "en",

    // Emoji packs
    emoji: [
      "https://unpkg.com/@waline/emojis@1.4.0/weibo",
      "https://unpkg.com/@waline/emojis@1.4.0/bilibili",
      "https://unpkg.com/@waline/emojis@1.4.0/bmoji",
    ],

    // Comment login mode:
    //
    // 'enable'
    // Default. Allows anonymous comments and third party OAuth login.
    //
    // 'force'
    // Requires users to log in before commenting.
    // Suitable for stricter communities.
    //
    // 'disable'
    // Disables all login and OAuth functionality.
    // Only anonymous comments are allowed.
    login: "enable",

    // Enable page view statistics
    visitorCount: true,
  },

  // Artalk configuration
  artalk: {
    // Artalk backend API URL
    server: "https://artalk.example.com/",

    // Artalk language
    locale: "en",

    // Enable page view statistics
    visitorCount: true,
  },

  // Giscus configuration
  giscus: {
    // GitHub repository
    repo: "CuteLeaf/Firefly",

    // Repository ID
    repoId: "R_kgD2gfdFGd",

    // Discussion category
    category: "General",

    // Category ID
    categoryId: "DIC_kwDOKy9HOc4CegmW",

    // Mapping strategy
    mapping: "title",

    // Strict matching mode
    strict: "0",

    // Enable reactions
    reactionsEnabled: "1",

    // Enable metadata
    emitMetadata: "1",

    // Comment input position
    inputPosition: "top",

    // Giscus language
    lang: "en",

    // Loading strategy
    loading: "lazy",
  },

  // Disqus configuration
  disqus: {
    // Disqus shortname
    shortname: "firefly",
  },
};

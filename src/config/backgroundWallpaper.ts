import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
  // Wallpaper mode:
  // "banner"     = Banner wallpaper
  // "fullscreen" = Fullscreen wallpaper
  // "overlay"    = Transparent fullscreen overlay
  // "none"       = Solid color background without wallpaper
  mode: "banner",

  // Allow users to switch wallpaper modes from the navigation bar
  //
  // Maintaining multiple wallpaper modes simultaneously is quite complex
  // (the implementation has become rather messy over time).
  // Occasionally, switching modes may cause unexpected transitions or visual bugs.
  //
  // It is recommended to choose your preferred mode and disable switching.
  switchable: true,

  // Enable background video playback
  // When enabled, a video control button will appear in the navigation bar.
  playerEnable: true,

  /**
   * Background Image Configuration
   *
   * Supported image path formats:
   *
   * 1. Public directory (starts with "/")
   *    Not optimized:
   *    "/assets/images/banner.avif"
   *
   * 2. Src directory (does not start with "/")
   *    Automatically optimized (recommended)
   *    but increases build time:
   *    "assets/images/banner.avif"
   *
   * 3. Remote URL:
   *    "https://example.com/banner.jpg"
   *
   * Note:
   * Images from remote URLs and the public directory
   * are not optimized automatically.
   * Make sure file sizes are reasonably small to avoid
   * slower page loading.
   *
   * It is recommended not to replace the default example
   * images named d1-d6 and m1-m6.
   *
   * Future updates may replace these example images,
   * which could overwrite your custom files.
   *
   * If you use your own images, give them unique names
   * instead of reusing d1-d6 or m1-m6.
   *
   * If you only use a single image or a random image API,
   * using a string value is recommended:
   *
   * desktop: "https://t.alcy.cc/pc" // Random image API
   * desktop: "assets/images/DesktopWallpaper/d1.avif" // Single image
   *
   * mobile: "https://t.alcy.cc/mp" // Random image API
   * mobile: "assets/images/MobileWallpaper/m1.avif" // Single image
   *
   * Multiple images are also supported.
   * One image will be selected randomly on each page refresh:
   *
   * desktop: [
   *   "assets/images/DesktopWallpaper/d1.avif",
   *   "assets/images/DesktopWallpaper/d2.avif",
   * ]
   *
   * mobile: [
   *   "assets/images/MobileWallpaper/m1.avif",
   *   "assets/images/MobileWallpaper/m2.avif",
   * ]
   */
  src: {
    // Desktop wallpapers
    // Supports a single image or multiple random images
    desktop: [""],

    // Mobile wallpapers
    // Supports a single image or multiple random images
    mobile: [""],

    // Background video source
    //
    // Supports:
    // - A single video URL (string)
    // - Multiple videos (array)
    //
    // Local videos should be placed in:
    // public/assets/videos/
    playerUrl: ["/assets/videos/2031.mp4"],
  },

  // Shared configuration for banner and fullscreen wallpaper modes
  common: {
    // Darkness of the text overlay mask
    // Range: 0-1
    // Higher values produce a darker overlay
    dimOpacity: 0.2,

    // Multi video playback mode:
    // "order"  = Sequential loop
    // "random" = Random selection
    //
    // Only applies when playerUrl is an array.
    playerMode: "order",

    // Homepage banner text configuration
    homeText: {
      // Enable homepage banner text
      enable: true,

      // Allow users to toggle banner titles
      switchable: true,

      // Main homepage banner title
      title: "Indie-Hacker Ethos",

      // Main title font size
      titleSize: "3.8rem",

      // Homepage banner subtitles
      subtitle: [
        "Build Before You Talk.",
        "Ship Fast. Learn Faster.",
        "Solve Real Problems.",
        "One User Today. One Thousand Tomorrow.",
        "Distribution Is A Feature.",
        "Done Is Better Than Perfect.",
        "Feedback Beats Assumptions.",
        "Revenue Is Validation.",
        "Stay Small. Move Fast.",
        "Create More Than You Consume.",
        "The Best Time To Launch Was Yesterday.",
        "Nobody Is Coming. Build It Yourself.",
      ],

      // Subtitle font size
      subtitleSize: "1.5rem",

      typewriter: {
        // Enable typewriter effect
        //
        // Enabled:
        // Cycles through all subtitles.
        //
        // Disabled:
        // Displays one random subtitle per page load.
        enable: true,

        // Typing speed (ms)
        speed: 100,

        // Character deletion speed (ms)
        deleteSpeed: 50,

        // Pause duration after full text is displayed (ms)
        pauseTime: 2000,
      },
    },

    // Navigation bar configuration
    navbar: {
      // Transparency mode:
      // "semi"     = Semi transparent
      // "full"     = Fully transparent
      // "semifull" = Dynamic transparency
      transparentMode: "semi",

      // Enable glassmorphism blur effect
      //
      // May affect performance on some devices.
      // If disabled, a standard semi transparent navbar is used.
      enableBlur: true,

      // Blur intensity
      blur: 5,
    },

    // Wave animation effect
    //
    // May affect page performance.
    waves: {
      enable: {
        // Enable waves on desktop
        desktop: true,

        // Enable waves on mobile
        mobile: true,
      },

      // Allow users to toggle wave animations
      switchable: true,
    },

    // Gradient transition effect
    //
    // Automatically used when waves are disabled.
    // Creates a smooth transition between the wallpaper
    // and the page background.
    gradient: {
      enable: {
        // Enable on desktop
        desktop: true,

        // Enable on mobile
        mobile: true,
      },

      // Gradient height
      height: "15vh",

      // Allow users to toggle gradients
      switchable: true,
    },

    // Wallpaper slideshow configuration
    //
    // Shared by banner and fullscreen modes.
    // Only applies when multiple images are configured.
    carousel: {
      // Enable slideshow
      //
      // If disabled, a random wallpaper
      // is chosen on page refresh.
      enable: false,

      // Slide interval (ms)
      interval: 5000,

      // Transition effect:
      // "fade"     = Fade
      // "zoom"     = Zoom
      // "slide"    = Slide
      // "kenburns" = Ken Burns effect
      transitionEffect: "zoom",

      // Allow users to toggle slideshow mode
      switchable: false,
    },
  },

  // Banner mode specific settings
  banner: {
    // Image position
    //
    // Supports all CSS object-position values:
    // "top"
    // "center"
    // "bottom"
    // "left top"
    // "right bottom"
    // "25% 75%"
    // "10px 20px"
    //
    // Recommended values:
    // center = centered
    // top = top center
    // bottom = bottom center
    // left = left center
    // right = right center
    position: "0% 20%",
  },

  // Transparent fullscreen overlay mode settings
  overlay: {
    // Allow users to adjust overlay parameters
    switchable: {
      opacity: true,
      blur: true,
      cardOpacity: true,
    },

    // Ensure wallpaper stays in the background layer
    zIndex: -1,

    // Wallpaper opacity
    opacity: 0.8,

    // Background blur amount
    blur: 10,

    // Card transparency
    // Range: 0-1
    // Lower values = more transparent
    cardOpacity: 0.5,
  },

  // Fullscreen wallpaper mode settings
  fullscreen: {
    // Image position
    position: "center",
  },
};

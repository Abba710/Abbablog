import type { Live2DWidgetConfig, SpineModelConfig } from "../types/pioConfig";

// Spine Character Configuration
export const spineModelConfig: SpineModelConfig = {
  // Enable Spine character
  enable: false,

  // Spine model settings
  model: {
    // Path to Spine model file
    path: "/pio/models/spine/firefly/1310.json",

    // Model scale
    scale: 1.0,

    // Horizontal offset
    x: 0,

    // Vertical offset
    y: 0,
  },

  // Position settings
  position: {
    // Available positions:
    // bottom-left, bottom-right, top-left, top-right
    // Note: bottom-right may overlap the Back to Top button
    corner: "bottom-left",

    // Distance from screen edge (px)
    offsetX: 0,

    // Distance from bottom edge (px)
    offsetY: 0,
  },

  // Size settings
  size: {
    // Container width
    width: 135,

    // Container height
    height: 165,
  },

  // Interaction settings
  interactive: {
    // Enable interactions
    enabled: true,

    // Random animations played on click
    clickAnimations: [
      "emoji_0",
      "emoji_1",
      "emoji_2",
      "emoji_3",
      "emoji_4",
      "emoji_5",
    ],

    // Random messages displayed on click
    clickMessages: [
      "Hello there! I'm Firefly~",
      "Let's do our best today! ✨",
      "Want to go stargazing together? 🌟",
      "Don't forget to get some rest~",
      "Is there anything you'd like to tell me? 💫",
      "Let's explore the unknown together! 🚀",
      "Every star has its own story~ ⭐",
      "I hope I can bring you warmth and happiness! 💖",
    ],

    // Message display duration (ms)
    messageDisplayTime: 3000,

    // Idle animation list
    idleAnimations: ["idle", "emoji_0", "emoji_1", "emoji_3", "emoji_4"],

    // Idle animation switch interval (ms)
    idleInterval: 8000,
  },

  // Responsive settings
  responsive: {
    // Hide on mobile devices
    hideOnMobile: true,

    // Mobile breakpoint
    mobileBreakpoint: 768,
  },

  // Z-index
  zIndex: 1000,

  // Opacity
  opacity: 1.0,
};

// Live2D Character Configuration
// Uses the l2d-widget library: https://l2d-widget.hacxy.cn
export const live2dWidgetConfig: Live2DWidgetConfig = {
  // Enable Live2D character
  enable: false,

  // Model configuration
  // Supports a single model or an array for model switching
  model: [
    {
      // Local Live2D model path
      path: "/pio/models/live2d/snow_miku/model.json",

      // Voice volume (0-1, default 0 = muted)
      volume: 0,

      // Model scale
      scale: 1,

      // Horizontal offset (-2 to 2, positive = right)
      x: 0,

      // Vertical offset (-2 to 2, positive = up)
      y: 0,
    },
    {
      // External model URL
      path: "https://model.hacxy.cn/cat-black/model.json",

      volume: 0,
      scale: 1,
      x: 0,
      y: 0,
    },
  ],

  // Display position: bottom-left or bottom-right
  position: "bottom-left" as const,

  // Canvas size (px)
  size: {
    width: 200,
    height: 200,
  },

  // Theme color used for menus, status bars, and other UI elements
  primaryColor: "var(--l2d-msg-bg)",

  // Entrance/exit animation duration (ms)
  transitionDuration: 1500,

  // Entrance/exit animation type
  transitionType: "slide" as const,

  // Menu configuration
  menus: {
    // Completely replace default menu items
    items: [
      {
        icon: "mdi:home",
        label: "Home",
        action: "home",
      },
      {
        icon: "mdi:arrow-up",
        label: "Back to Top",
        action: "scrollToTop",
      },
      {
        icon: "mdi:bed",
        label: "Sleep",
        action: "sleep",
      },
      {
        icon: "mdi:swap-horizontal",
        label: "Switch Model",
        action: "switchModel",
      },
      {
        icon: "mdi:github",
        label: "GitHub",
        action: "github",
      },
    ],

    // Menu alignment
    align: "right" as const,
  },

  // Tooltip configuration
  tips: {
    // Enable tooltips
    enable: true,

    // Initial welcome messages
    welcomeMessage: ["Hello there!", "Welcome to my world!"],

    // Rotating tooltip messages
    messages: [
      "Need any help?",
      "The weather is lovely today!",
      "Want to play a game together?",
      "Don't forget to take breaks!",
    ],

    // Message display duration (ms)
    duration: 3000,

    // Message rotation interval (ms)
    interval: 6000,

    // Position offset (px)
    // Relative to the default position above the model
    offset: {
      // Positive = move right, negative = move left
      x: 0,

      // Positive = move down, negative = move up
      y: 0,
    },
  },

  // Responsive settings
  responsive: {
    // Hide on mobile devices
    hideOnMobile: true,

    // Mobile breakpoint
    mobileBreakpoint: 768,
  },
};

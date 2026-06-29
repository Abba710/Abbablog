import type { SakuraConfig } from "../types/effectsConfig";

// Visual Effects Configuration
// Centralized configuration for animation effects
export const sakuraConfig: SakuraConfig = {
  // Enable sakura (falling cherry blossom) effect
  enable: true,

  // Allow users to toggle the effect in settings
  switchable: true,

  // Number of sakura petals
  sakuraNum: 21,

  // Maximum number of times a petal can respawn
  // -1 = infinite loop
  limitTimes: -1,

  // Sakura size settings
  size: {
    // Minimum size multiplier
    min: 0.5,

    // Maximum size multiplier
    max: 1.1,
  },

  // Sakura opacity settings
  opacity: {
    // Minimum opacity
    min: 0.3,

    // Maximum opacity
    max: 0.9,
  },

  // Sakura movement settings
  speed: {
    // Horizontal movement
    horizontal: {
      // Minimum horizontal speed
      min: -1.7,

      // Maximum horizontal speed
      max: -1.2,
    },

    // Vertical movement
    vertical: {
      // Minimum vertical speed
      min: 1.5,

      // Maximum vertical speed
      max: 2.2,
    },

    // Rotation speed
    rotation: 0.03,

    // Fade out speed
    // Should not exceed the minimum opacity value
    fadeSpeed: 0.03,
  },

  // Z-index to ensure petals appear at the correct layer
  zIndex: 100,
};

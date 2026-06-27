import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
  // Avatar
  // Supported image sources:
  // 1. public directory (starts with "/", not optimized)
  //    "/assets/images/avatar.webp"
  // 2. src directory (does not start with "/", optimized automatically, recommended)
  //    "assets/images/avatar.webp"
  // 3. Remote URL
  //    "https://example.com/avatar.jpg"
  avatar: "assets/images/avatar1.jpg",

  // Display name
  name: "Abba",

  // Short bio
  bio: "🚀 Ascending to digital divinity | Astro, React, TypeScript, React Native, Deno, Supabase | Full-stack Architect & AI Enthusiast",

  // Social links
  // Preinstalled icon sets:
  // fa7-brands, fa7-regular, fa7-solid,
  // material-symbols, simple-icons
  //
  // Browse icons at:
  // https://icones.js.org/
  //
  // To use an icon set that is not installed:
  // pnpm add @iconify-json/<icon-set-name>
  //
  // showName:
  // true  = show icon and label
  // false = show icon only
  links: [
    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/Abba710",
      showName: false,
    },
    {
      name: "X",
      icon: "fa7-brands:x-twitter",
      url: "https://x.com/ldust710",
      showName: false,
    },
    {
      name: "Reddit",
      icon: "fa7-brands:reddit",
      url: "https://www.reddit.com/user/Sad-Bed-3125/",
      showName: false,
    },
    {
      name: "Email",
      icon: "fa7-solid:envelope",
      url: "mailto:abba4game@gmail.com",
      showName: false,
    },
  ],
};

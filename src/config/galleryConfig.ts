import type { GalleryConfig } from "@/types/galleryConfig";

// Gallery Configuration
export const galleryConfig: GalleryConfig = {
  // Album list
  albums: [
    // Supported formats: jpg, png, webp, avif, gif
    //
    // id:
    // Unique album identifier used for folder names and URL paths.
    // Example: id: "firefly-2026"
    // Corresponding directory:
    // public/gallery/firefly-2026/
    //
    // cover:
    // Manually specify a cover image (optional).
    // If omitted, the system will use:
    // 1. cover.* file if available
    // 2. otherwise the first image in the album
    //
    // name:
    // Album name
    //
    // description:
    // Album description
    //
    // location:
    // Photo location
    //
    // date:
    // Album date in YYYY-MM-DD format.
    // Used for sorting and display.
    //
    // tags:
    // Album tags used for filtering and categorization.
    //
    // password:
    // Optional access password.
    // Users must enter the correct password to view the album.
    //
    // passwordHint:
    // Optional password hint.
    // Displayed when an incorrect password is entered.
    // Requires `password` to be set.
    //
    // Each item in this array represents a gallery album.
    // Remember to create the corresponding folder inside
    // public/gallery/ and place the images there.

    {
      id: "firefly-2026",
      name: "Cute Firefly",
      description:
        "A firefly's light shines through the endless night, blooming into the tomorrow that awaits.",
      location: "Honkai: Star Rail",
      date: "2026-01-01",
      tags: ["Honkai: Star Rail", "Firefly"],
    },

    {
      id: "encrypted-test",
      name: "Protected Album Example",
      description:
        "This is an example of a password protected album. Only users who enter the correct password can view its contents.",
      location: "Honkai: Star Rail",
      date: "2026-02-01",
      tags: ["Protected Album", "Example"],
      password: "123456",
      passwordHint: "Example password: 123456",
    },
  ],

  // Minimum waterfall grid column width (px).
  // The browser automatically calculates the number of columns
  // based on the container width.
  //
  // Default: 240
  // Smaller value = more columns
  // Larger value = fewer columns
  columnWidth: 240,
};

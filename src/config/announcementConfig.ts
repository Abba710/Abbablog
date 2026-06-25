import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
  // Announcement title
  title: "Announcement",

  // Announcement content
  content: "Welcome to my blog! This is a sample announcement.",

  // Allow users to close the announcement
  closable: true,

  link: {
    // Enable link
    enable: true,

    // Link text
    text: "Learn More",

    // Link URL
    url: "/about/",

    // Internal link
    external: false,
  },
};

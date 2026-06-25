import {
  type NavBarConfig,
  type NavBarLink,
  type NavBarSearchConfig,
  NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// Navigation Bar Configuration
// Dynamically generates navigation links based on the specified order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: NavBarLink[] = [
    // Home page
    LinkPresets.Home,
  ];

  // Blog section
  links.push({
    name: "Blog",
    url: "#",
    icon: "material-symbols:article",
    children: [LinkPresets.Archive, LinkPresets.Categories, LinkPresets.Tags],
  });

  // Projects
  links.push(LinkPresets.Projects);

  // Guestbook
  // links.push(LinkPresets.Guestbook);

  // About section
  links.push({
    name: "About",
    url: "#",
    icon: "material-symbols:person",
    children: [LinkPresets.About],
  });

  // External links
  links.push({
    name: "Links",
    url: "#",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/Abba710",
        external: true,
        icon: "fa7-brands:github",
      },
      {
        name: "X",
        url: "https://x.com/ldust710",
        external: true,
        icon: "fa7-brands:x-twitter",
      },
      {
        name: "Reddit",
        url: "https://www.reddit.com/user/Sad-Bed-3125/",
        external: true,
        icon: "fa7-brands:reddit",
      },
    ],
  });

  return { links } as NavBarConfig;
};

// Search configuration
export const navBarSearchConfig: NavBarSearchConfig = {
  method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// Link Presets
// Customize navigation labels, icons, and URLs here
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
  Home: {
    name: "Home",
    url: "/",
    icon: "material-symbols:home",
  },

  Archive: {
    name: "Archive",
    url: "/archive/",
    icon: "material-symbols:archive",
  },

  Categories: {
    name: "Categories",
    url: "/categories/",
    icon: "material-symbols:folder-open-rounded",
  },

  Tags: {
    name: "Tags",
    url: "/tags/",
    icon: "material-symbols:tag-rounded",
  },

  Projects: {
    name: "Projects",
    url: "/projects/",
    icon: "material-symbols:code-blocks",
    pageKey: "projects",
  },

  Guestbook: {
    name: "Guestbook",
    url: "/guestbook/",
    icon: "material-symbols:chat",
    pageKey: "guestbook",
  },
  Anime: {
    name: "My anime",
    url: "/anime/",
    icon: "material-symbols:live-tv",
    pageKey: "anime",
  },

  About: {
    name: "About me",
    url: "/about/",
    icon: "material-symbols:person",
  },
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();

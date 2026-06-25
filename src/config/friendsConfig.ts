import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// You can add custom content below the friends page
// by editing src/content/spec/friends.md

// Friends Page Configuration
export const friendsPageConfig: FriendsPageConfig = {
  // Page title
  // Leave empty to use the translation from i18n
  title: "",

  // Page description
  // Leave empty to use the translation from i18n
  description: "",

  // Show custom content at the bottom of the page
  // (content from friends.mdx)
  showCustomContent: true,

  // Show comment section
  // Requires the comment system to be enabled in commentConfig.ts
  showComment: true,

  // Enable random sorting
  // If enabled, weights will be ignored and links will be shuffled
  // once during the build process
  randomizeSort: false,
};

// Friends Links Configuration
export const friendsConfig: FriendLink[] = [
  {
    title: "Summer Night Firefly",
    imgurl:
      "https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
    desc: "A firefly's light shines through the endless night, blooming into the tomorrow that awaits.",
    siteurl: "https://blog.cuteleaf.cn",
    tags: ["Blog"],

    // Weight: higher values appear first
    weight: 10,

    // Whether this link is enabled
    enabled: true,
  },
  {
    title: "Firefly Docs",
    imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
    desc: "Documentation for the Firefly theme template.",
    siteurl: "https://docs-firefly.cuteleaf.cn",
    tags: ["Docs"],
    weight: 9,
    enabled: true,
  },
  {
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
    desc: "The web framework for content driven websites. ⭐️ Star the project to support the team!",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
    weight: 8,
    enabled: true,
  },
];

// Get enabled friend links and sort them
export const getEnabledFriends = (): FriendLink[] => {
  const friends = friendsConfig.filter((friend) => friend.enabled);

  if (friendsPageConfig.randomizeSort) {
    return friends.sort(() => Math.random() - 0.5);
  }

  return friends.sort((a, b) => b.weight - a.weight);
};

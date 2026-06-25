import type { MusicPlayerConfig } from "../types/musicConfig";

// Music Player Configuration
export const musicPlayerConfig: MusicPlayerConfig = {
  // How to disable the music player:
  // By default, the music player is displayed in both the sidebar and navbar.
  //
  // 1. Sidebar:
  //    Set the music component's `enable` option to `false`
  //    in sidebarConfig.ts.
  //
  // 2. Navbar:
  //    Set `showInNavbar` to `false` in this configuration file.

  // Show music player entry in the navigation bar
  showInNavbar: false,

  // Mode:
  // "meting" = Use Meting API
  // "local"  = Use local playlist
  mode: "meting",

  // Default volume (0-1)
  volume: 0.7,

  // Playback mode:
  // 'list'   = Playlist loop
  // 'one'    = Single track loop
  // 'random' = Shuffle
  playMode: "list",

  // Enable lyrics display
  showLyrics: true,

  // Meting API configuration
  meting: {
    // Meting API endpoint
    // You can use the official API or your own custom API
    api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",

    // Music platform:
    // netease = NetEase Cloud Music
    // tencent = QQ Music
    // kugou   = KuGou Music
    // xiami   = Xiami Music
    // baidu   = Baidu Music
    server: "netease",

    // Content type:
    // song      = Single track
    // playlist  = Playlist
    // album     = Album
    // search    = Search
    // artist    = Artist
    type: "playlist",

    // Playlist / Album / Song ID or search keyword
    id: "10046455237",

    // Authentication token (optional)
    auth: "",

    // Fallback APIs used if the primary API fails
    fallbackApis: [
      "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
      "https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
    ],
  },

  // Local music configuration
  // Used when mode is set to "local"
  //
  // Option 1: Provide a path to an LRC lyrics file
  // lrc: "/assets/music/lrc/song.lrc",
  //
  // Option 2: Provide lyrics directly as a string
  // lrc: "[00:00.00]Lyrics content..."
  local: {
    playlist: [
      {
        name: "Hope Is the Thing With Feathers",
        artist: "Robin / HOYO-MiX / Chevy",
        url: "/assets/music/使一颗心免于哀伤-哼唱.mp3",
        cover: "/assets/music/cover/109951169585655912.webp",
        lrc: "",
      },
    ],
  },
};

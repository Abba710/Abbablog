# 📦 Components Directory

A centralized collection of all reusable components used in the Firefly project. Components are organized by purpose and responsibility to provide a clear architecture and maintainable codebase.

## 📁 Directory Structure

### 🏗️ layout/ - Page Layout Components

Components responsible for the overall page structure and layout.

* `CategoryBar.astro` - Category bar
* `ConfigCarrier.astro` - Configuration provider
* `DropdownMenu.astro` - Dropdown menu
* `Footer.astro` - Footer
* `Navbar.astro` - Navigation bar
* `NavMenuPanel.astro` - Navigation menu panel
* `PostCard.astro` - Post card
* `PostMeta.astro` - Post metadata
* `PostPage.astro` - Post page layout
* `SideBar.astro` - Sidebar

### 🎮 controls/ - Navigation & Interaction Controls

Components for page navigation and user interaction.

**Navigation Controls**

* `BackToComment.astro` - Back to comments button
* `BackToHome.astro` - Back to home button
* `BackToTop.astro` - Back to top button
* `FloatingControls.astro` - Floating controls container
* `FloatingTOC.astro` - Floating table of contents
* `ScrollDownIndicator.astro` - Scroll down indicator

**Interactive Components**

* `ArchivePanel.svelte` - Archive panel
* `DisplaySettings.svelte` - Display settings
* `DisplaySettingsIntegrated.svelte` - Integrated display settings
* `LayoutSwitchButton.svelte` - Layout switch button
* `LightDarkSwitch.svelte` - Theme switch
* `Search.svelte` - Search component
* `WallpaperSwitch.svelte` - Wallpaper mode switch

### 🔧 common/ - Shared Reusable Components

General UI and utility components that can be reused across multiple projects.

**Core UI Components**

* `ButtonLink.astro` - Link button
* `ButtonTag.astro` - Tag button
* `DropdownItem.astro` / `.svelte` - Dropdown item
* `DropdownPanel.astro` / `.svelte` - Dropdown panel container
* `FloatingButton.astro` - Base floating button
* `Icon.svelte` - Icon component with loading state and error handling
* `WidgetLayout.astro` - Widget layout container

**Content & Display Components**

* `CoverImage.astro` - Cover image component with support for local images and random image APIs
* `ImageWrapper.astro` - Image wrapper supporting both local and remote images
* `Markdown.astro` - Markdown content wrapper
* `PioMessageBox.astro` - Message box for Live2D and Spine characters

**Pagination Components**

* `ClientPagination.svelte` - Client side pagination powered by JavaScript
* `Pagination.astro` - Static route pagination using Astro

### 🧩 widget/ - Sidebar Widgets

Feature widgets displayed in the sidebar.

* `Advertisement.astro` - Advertisement widget
* `Announcement.astro` - Announcement widget
* `Calendar.astro` - Calendar widget
* `Categories.astro` - Categories widget
* `Music.astro` - Music player widget
* `Profile.astro` - Profile and social links widget
* `SidebarTOC.astro` - Sidebar table of contents
* `SiteInfo.astro` - Site information widget
* `SiteStats.astro` - Site statistics widget
* `SpineModel.astro` - Spine character widget
* `Tags.astro` - Tags widget

### ✨ features/ - Global Features & Effects

Globally loaded components that enhance site functionality.

**Managers (Initialization & Feature Management)**

* `FancyboxManager.astro` - Fancybox image viewer manager
* `FontSetup.astro` - Font loading and management using the Astro Font API
* `KatexManager.astro` - KaTeX math rendering manager
* `MusicManager.astro` - Global music playback manager. A singleton responsible for the shared audio element, playback state, and synchronization between all `MusicPlayer` instances using `CustomEvent`.

**Feature Components**

* `EncryptedContent.astro` - Encrypted content
* `EncryptedPost.astro` - Encrypted post
* `Live2DWidget.astro` - Live2D character widget
* `MusicPlayer.astro` - Music player UI controller. Handles only the interface while delegating playback logic to `MusicManager`.
* `SakuraEffect.astro` - Falling sakura effect
* `SpineModel.astro` - Spine character widget
* `TypewriterText.astro` - Typewriter animation

### 📃 pages/ - Page Specific Components

Components used exclusively on specific pages.

* `AdvancedSearch.svelte` - Advanced search component

**pages/bangumi/** - Bangumi Page Components

* `BangumiGrid.svelte` - Bangumi grid layout
* `BangumiSection.astro` - Bangumi category section
* `Card.svelte` - Bangumi card
* `FilterControls.svelte` - Filter controls
* `TabNav.svelte` - Tab navigation

**pages/gallery/** - Gallery Page Components

* `AlbumCard.astro` - Album card
* `PhotoCard.astro` - Photo card

### 💬 comment/ - Comment System Components

Integrations with third party comment systems.

* `index.astro` - Main comment component
* `Artalk.astro` - Artalk integration
* `Disqus.astro` - Disqus integration
* `Giscus.astro` - Giscus integration using GitHub Discussions
* `Twikoo.astro` - Twikoo integration
* `Waline.astro` - Waline integration

### 📊 analytics/ - Analytics Components

Website analytics and tracking integrations.

* `GoogleAnalytics.astro` - Google Analytics
* `La51Analytics.astro` - 51la Analytics
* `MicrosoftClarity.astro` - Microsoft Clarity
* `UmamiAnalytics.astro` - Umami Analytics

### 🔧 misc/ - Miscellaneous Components

Utility and helper components.

* `License.astro` - License information
* `RecommendedPost.astro` - Recommended posts
* `SharePoster.svelte` - Share poster generator

---

## 🗂️ Organization Principles

| Directory      | Purpose                  | Description                                      |
| -------------- | ------------------------ | ------------------------------------------------ |
| **layout/**    | Page layout              | Defines the overall page structure               |
| **controls/**  | Navigation & interaction | User interaction and navigation                  |
| **common/**    | Shared components        | Reusable across multiple pages and components    |
| **widget/**    | Sidebar widgets          | Components designed specifically for the sidebar |
| **features/**  | Global features          | Site wide enhancements loaded globally           |
| **pages/**     | Page specific            | Used only on specific pages                      |
| **comment/**   | Comment system           | Third party comment integrations                 |
| **analytics/** | Analytics                | Website analytics and tracking services          |
| **misc/**      | Utilities                | Miscellaneous helper components                  |

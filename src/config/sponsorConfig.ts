import type { SponsorConfig } from "../types/sponsorConfig";
import qrCode from "@/assets/images/qr-code.png"

export const sponsorConfig: SponsorConfig = {
	// Page title, leave empty to use translation from i18n
	title: "Support Me",

	// Page description text, leave empty to use translation from i18n
	description: "If my content has been helpful to you, welcome to sponsor me through the following methods. Your support is the driving force for my continued creation!",

	// Description of how sponsorship funds will be used
	usage:
		"Your donations will be used for server maintenance, content creation, and feature development, helping me to continuously provide high-quality content.",

	// Whether to show the list of sponsors
	showSponsorsList: true,

	// Whether to show the comment section (must enable comment system in commentConfig.ts first)
	showComment: true,

	// Whether to show the sponsor button at the bottom of article detail pages
	showButtonInPost: true,

	// List of sponsorship methods
	methods: [
		{
			name: "buymeacoffee",
			// icon: "simple-icons:kofi",
			qrCode: `${qrCode.src}`,
			link: "buymeacoffee.com/Abba710",
			description: "Buy a Coffee for Abba",
			enabled: true,
		},
	],

	// List of sponsors (optional)
	sponsors: [
		// Example: verified sponsor
		{
			name: "Shivam Dalmia",
			avatar:
				"https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/EFC16D/SD.png",
			amount: "$5.00",
			date: "2025-12-01",
		},

		// Example: anonymous sponsor
		{
			name: "Someone",
			avatar: "https://cdn.buymeacoffee.com/uploads/profile_pictures/default/v2/80BEAF/SO.png",
			amount: "$5.00",
			date: "2025-12-07",
		},
	],
};

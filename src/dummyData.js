import turkishRivieraImage from "./assets/turkish-riviera.jpg";
import krabiThailandImage from "./assets/krabi-thailand.jpg";
import snowmassCoUsaImage from "./assets/snowmass-co-usa.jpg";

export const dummyOffers = [
	{
		id: 1,
		title: "Four-star hotel on the Turkish Riviera",
		description:
			"4 nights in a four-star hotel incl. flight, transfer and half board. Alanya, Antalya, Turkey.",
		image: turkishRivieraImage,
		badge: "Best Price",
		usps: [
			"Children up to 12 years free",
			"Free beach transfer",
			"Free WLAN access",
		],
		rating: 4,
		fromPrice: 299,
	},
	{
		id: 2,
		title: "Exotic holiday in Thailand",
		description:
			"7 days in the beautiful nature in Thailand. Ao Nang, Krabi, Thailand.",
		image: krabiThailandImage,
		badge: "Most popular",
		usps: [
			"Free baby stuff (stroller, crib, etc.)",
			"Free breakfast every day",
		],
		rating: 5,
		fromPrice: 499,
	},
	{
		id: 3,
		title: "Christmas in USA",
		description:
			"Experience the most beatuful Christmas holiday with us. Snowmass Village, Colorado, USA.",
		image: snowmassCoUsaImage,
		badge: "Most purchased",
		usps: [
			"Two-way flight tickets are included in the price",
			"Christmas show for the kids",
		],
		rating: 4,
		fromPrice: 549,
	},
];

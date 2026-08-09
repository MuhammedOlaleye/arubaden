// Arubaden placeholder data — replace with CMS content later

// Registration fee required to hold a spot on any Signature Escape. Credited towards the total trip cost.
export const REGISTRATION_FEE_NGN = 500000
export const REGISTRATION_FEE_USD = 320

export type TravelStyle =
  | 'Beach & Island'
  | 'Adventure'
  | 'Culture & Heritage'
  | 'Romantic'
  | 'Family'
  | 'Group'
  | 'Wellness'
  | 'Luxury'

export interface Destination {
  slug: string
  name: string
  country: string
  tagline: string
  description: string
  image: string
  featured: boolean
  highlights: string[]
  travelStyles: TravelStyle[]
}

export interface Package {
  slug: string
  title: string
  theme?: string
  destination: string
  country: string
  departure?: string
  travelDate?: string
  destinationSlug: string
  travelStyle: TravelStyle
  shortDescription: string
  days: number
  nights?: number
  groupSize: string
  suitableFor?: string[]
  startingPrice: number
  startingPriceNGN: number
  priceTBA?: boolean
  earlyBirdPriceNGN?: number
  earlyBirdPriceUSD?: number
  standardPriceNGN?: number
  standardPriceUSD?: number
  paymentPlan?: { label: string; amount: string }[]
  currency: string
  bestPeriod: string
  image: string
  badge?: 'New' | 'Popular' | 'Limited Spaces' | 'Coming Soon'
  featured: boolean
  comingSoon?: boolean
  overview: string
  highlights: string[]
  included: string[]
  excluded: string[]
  itinerary: { day: number; title: string; description: string }[]
  accommodation: string
  faqs: { question: string; answer: string }[]
}

export interface Testimonial {
  name: string
  location: string
  quote: string
  trip: string
  avatar: string
  rating: number
}

export interface JournalPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
}

// ── Destinations ──────────────────────────────────────────────────────────────

export const destinations: Destination[] = [
  {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    tagline: 'Overwater serenity beyond compare',
    description:
      'A collection of coral islands in the Indian Ocean renowned for crystal-clear lagoons, thriving reefs and unmatched overwater luxury.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop',
    featured: true,
    highlights: ['Overwater bungalows', 'World-class snorkelling', 'Pristine white-sand beaches', 'Sunset dolphin cruises'],
    travelStyles: ['Beach & Island', 'Romantic', 'Luxury', 'Wellness'],
  },
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Where culture meets coastline',
    description:
      'An island of terraced rice paddies, ancient temples, volcanic highlands and surf-kissed shores that draws seekers of beauty from across the world.',
    image: '/images/destinations/banjul-gambia.png',
    featured: true,
    highlights: ['Temple ceremonies', 'Rice terrace walks', 'Ubud arts scene', 'Seminyak beaches'],
    travelStyles: ['Culture & Heritage', 'Wellness', 'Romantic', 'Beach & Island'],
  },
  {
    slug: 'zanzibar',
    name: 'Zanzibar',
    country: 'Tanzania',
    tagline: 'Spice island, soul island',
    description:
      'A dreamy archipelago off the Tanzanian coast where Swahili culture, turquoise waters and powdery coral sands converge in unforgettable harmony.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80&auto=format&fit=crop',
    featured: true,
    highlights: ['Stone Town history', 'Pristine Nungwi beach', 'Spice plantation tours', 'Dolphin watching'],
    travelStyles: ['Beach & Island', 'Culture & Heritage', 'Romantic'],
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    tagline: 'Volcanic beauty, endless blue',
    description:
      'Perched on ancient caldera cliffs, Santorini is a canvas of whitewashed villages, sunset-drenched terraces and deep-blue Aegean waters.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Oia sunset views', 'Caldera boat tours', 'Wine tasting', 'Akrotiri excavations'],
    travelStyles: ['Romantic', 'Luxury', 'Culture & Heritage'],
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    country: 'Costa Rica',
    tagline: 'Pure life, pure adventure',
    description:
      'A biodiversity powerhouse where cloud forests, active volcanoes, surf beaches and wildlife-rich jungles promise thrilling experiences at every turn.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Arenal Volcano hikes', 'Zip-lining canopy tours', 'Manuel Antonio wildlife', 'Pacific surfing'],
    travelStyles: ['Adventure', 'Family', 'Group'],
  },
  {
    slug: 'morocco',
    name: 'Morocco',
    country: 'Morocco',
    tagline: 'Ancient medinas, desert horizons',
    description:
      'From the labyrinthine medinas of Marrakech to the sweeping dunes of the Sahara, Morocco is a sensory feast of colour, spice and living history.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Marrakech souks', 'Sahara desert camp', 'Chefchaouen blue city', 'Atlas Mountain treks'],
    travelStyles: ['Culture & Heritage', 'Adventure', 'Group'],
  },
  {
    slug: 'cape-verde',
    name: 'Sal Island',
    country: 'Cape Verde',
    tagline: "The Atlantic's best-kept secret",
    description:
      'A volcanic archipelago off the West African coast, Cape Verde blends Afro-Portuguese culture with turquoise Atlantic waters, trade winds and a laid-back pace that instantly unwinds you.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80&auto=format&fit=crop',
    featured: true,
    highlights: ['Santa Maria beach', 'Blue Eye rock pools', 'Kite Beach watersports', 'Pedra de Lume salt crater'],
    travelStyles: ['Beach & Island', 'Adventure', 'Wellness'],
  },
  {
    slug: 'gambia',
    name: 'Banjul',
    country: 'Gambia',
    tagline: 'The Smiling Coast of West Africa',
    description:
      "The Gambia is West Africa's smallest and most welcoming country — a river nation flanked by Atlantic beaches, alive with birdlife, vibrant markets and an infectious warmth.",
    image: '/images/destinations/banjul-gambia.png',
    featured: true,
    highlights: ['River Gambia pirogue cruises', 'Abuko Nature Reserve birdwatching', 'Albert Market', 'Atlantic beaches'],
    travelStyles: ['Culture & Heritage', 'Adventure', 'Group'],
  },
  {
    slug: 'mauritius',
    name: 'Mauritius',
    country: 'Mauritius',
    tagline: 'Tropical paradise, perfectly polished',
    description:
      'A jewel of the Indian Ocean, Mauritius combines lush mountains, colonial heritage, coral-fringed lagoons and some of the most gracious hospitality in the world.',
    image: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Le Morne turquoise lagoon', 'Black River Gorges National Park', 'Chamarel coloured earth', 'Luxury beach resorts'],
    travelStyles: ['Luxury', 'Romantic', 'Beach & Island', 'Wellness'],
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    tagline: 'Where the future is always now',
    description:
      'Dubai is a city of superlatives — soaring architecture, world-class dining and shopping, desert safaris at sunset and a coastline of perfect beaches.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Burj Khalifa observation deck', 'Desert safari and dune dinner', 'Dubai Marina yacht cruise', 'Gold and spice souks'],
    travelStyles: ['Luxury', 'Family', 'Group', 'Adventure'],
  },
  {
    slug: 'turkey',
    name: 'Istanbul & Cappadocia',
    country: 'Turkey',
    tagline: 'Civilisations layered in every stone',
    description:
      'Turkey spans two continents and thousands of years of history — from the Byzantine grandeur of Istanbul to the fairy-chimney landscapes of Cappadocia and the turquoise Aegean coast.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Hot air balloon over Cappadocia', 'Hagia Sophia and Grand Bazaar', 'Bosphorus sunset cruise', 'Pamukkale thermal pools'],
    travelStyles: ['Culture & Heritage', 'Adventure', 'Romantic', 'Group'],
  },
  {
    slug: 'seychelles',
    name: 'Seychelles',
    country: 'Seychelles',
    tagline: 'Islands that exist outside of time',
    description:
      'The Seychelles archipelago is a scattering of granite and coral islands in the western Indian Ocean — fringed by powder beaches, dramatic boulders and some of the clearest water on earth.',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=1600&q=80&auto=format&fit=crop',
    featured: false,
    highlights: ['Anse Source d\'Argent on La Digue', 'Vallée de Mai nature reserve', 'Snorkelling with whale sharks', 'Private island retreats'],
    travelStyles: ['Luxury', 'Romantic', 'Beach & Island', 'Wellness'],
  },
]

// ── Packages ─────────────────────────────────────────────────────────────────

export const packages: Package[] = [
  {
    slug: 'zanzibar-island-retreat',
    title: 'Zanzibar White Paradise Experience',
    theme: 'White Paradise Experience',
    destination: 'Zanzibar',
    country: 'Tanzania',
    departure: 'Lagos, Nigeria',
    destinationSlug: 'zanzibar',
    travelStyle: 'Beach & Island',
    shortDescription:
      '7 days / 7 nights on the Spice Island — Stone Town heritage, Jozani Forest, Maasai village, a sunset white party cruise and a farewell gala dinner.',
    days: 7,
    nights: 7,
    groupSize: '2–30',
    suitableFor: ['Couples', 'Singles', 'Friends', 'Families', 'Corporate Groups'],
    startingPrice: 2800,
    startingPriceNGN: 3850000,
    earlyBirdPriceNGN: 3850000,
    earlyBirdPriceUSD: 2800,
    standardPriceNGN: 4150000,
    standardPriceUSD: 3000,
    currency: 'USD',
    bestPeriod: 'Year-round',
    travelDate: 'December 2026',
    image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&q=80&auto=format&fit=crop',
    badge: 'Popular',
    featured: true,
    comingSoon: false,
    overview:
      "Experience paradise in white on this carefully crafted 7-night Zanzibar escape departing from Lagos. You will stay in a premium 4-star beach resort, explore the UNESCO-listed Stone Town, walk through Jozani Forest with its famous red colobus monkeys, tour a working spice farm, and visit a Maasai village — all crowned with an unforgettable sunset white party cruise and a farewell gala dinner.",
    highlights: [
      'Sunset White Party Cruise',
      'Stone Town Heritage Tour',
      'Jozani Forest & Spice Farm',
      'Nungwi & Kendwa Beach day',
      'Maasai Village visit',
      'Farewell Gala Dinner',
      'Branded Welcome Pack',
    ],
    included: [
      'Return flight from Lagos',
      '7 nights at a premium 4-star beach resort',
      'Daily breakfast',
      'Executive ground transportation',
      'Sunset White Party Cruise',
      'Farewell Gala Dinner',
      'Travel insurance',
      'Professional tour coordinator',
      'Branded welcome pack',
    ],
    excluded: [
      'Lunch and additional dinners (outside included meals)',
      'Personal shopping and souvenirs',
      'Optional excursions not listed',
      'Laundry and personal expenses',
      'Visa fees (if applicable)',
    ],
    itinerary: [
      { day: 1, title: 'Arrival — Welcome Dinner', description: 'Fly from Lagos to Zanzibar. Meet your tour coordinator on arrival, transfer to your premium 4-star beach resort, check in and enjoy a welcome dinner.' },
      { day: 2, title: 'Stone Town Heritage Tour', description: 'Spend the day exploring UNESCO-listed Stone Town — winding alleys, carved doorways, palace ruins, the old slave market and vibrant spice bazaars, all with your professional guide.' },
      { day: 3, title: 'Jozani Forest & Spice Farm', description: 'Morning walk through Jozani Chwaka Bay National Park to see the rare endemic red colobus monkeys, followed by a tour of a working spice plantation where you taste and learn about cloves, vanilla and cardamom.' },
      { day: 4, title: 'Nungwi & Kendwa Beach', description: 'Full day at the legendary white-sand beaches of Nungwi and Kendwa on the northern tip of the island. Swim in crystal-clear turquoise water and soak up the sun at leisure.' },
      { day: 5, title: 'Maasai Village — Sunset White Party Cruise', description: 'Morning visit to an authentic Maasai village for a cultural exchange. Evening: dress in white for the iconic Sunset White Party Cruise — sail, dance and celebrate as the sun melts into the Indian Ocean.' },
      { day: 6, title: 'Free Day — Shopping — Gala Dinner', description: 'A free day to explore at your own pace — browse local boutiques, relax on the beach or book an optional spa treatment. In the evening, gather for the Farewell Gala Dinner with the full group.' },
      { day: 7, title: 'Departure', description: 'Enjoy a final breakfast at the resort before executive ground transfer to Abeid Amani Karume International Airport for your return flight to Lagos.' },
    ],
    accommodation: '7 nights at a premium 4-star beach resort in Zanzibar, including daily breakfast. Resort features direct beach access, swimming pool and ocean views.',
    faqs: [
      { question: 'Is the return flight from Lagos included?', answer: 'Yes — a return flight from Lagos is included in the package price. We handle all flight bookings on your behalf.' },
      { question: 'What is the White Party Cruise?', answer: 'On Day 5, guests board a sailing vessel at sunset dressed in white attire. The cruise includes music, dancing, sundowners and a stunning Indian Ocean sunset.' },
      { question: 'Is there a payment plan available?', answer: 'Yes. We offer a flexible instalment plan. Contact us on WhatsApp to discuss your preferred schedule.' },
      { question: 'Is Zanzibar safe for Nigerian travellers?', answer: 'Zanzibar is very safe and welcoming. Your professional tour coordinator is with you throughout the trip.' },
      { question: 'What is the difference between Early Bird and Standard pricing?', answer: 'Early Bird pricing (₦3,850,000) is available for guests who register and make payment ahead of the deadline. Standard pricing (₦4,150,000) applies thereafter. Both include the same full package.' },
    ],
  },
  {
    slug: 'cape-verde-sal-island-escape',
    title: 'Cape Verde Romance & Island Escape',
    theme: 'Romance & Island Escape',
    destination: 'Sal Island',
    country: 'Cape Verde',
    departure: 'Lagos, Nigeria',
    travelDate: 'March 2027',
    destinationSlug: 'cape-verde',
    travelStyle: 'Romantic',
    shortDescription:
      '7 days / 6 nights of luxury island living — ocean-view hotel, island excursions, catamaran cruise, Cidade Velha UNESCO site, and a farewell gala dinner.',
    days: 7,
    nights: 6,
    groupSize: '2–30',
    suitableFor: ['Couples', 'Newly Married Couples', 'Friends', 'Families', 'Professionals', 'Corporate Groups', 'Church Groups', 'Singles'],
    startingPrice: 3400,
    startingPriceNGN: 4650000,
    earlyBirdPriceNGN: 4650000,
    earlyBirdPriceUSD: 3400,
    standardPriceNGN: 4950000,
    standardPriceUSD: 3600,
    currency: 'USD',
    bestPeriod: 'March 2027',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
    featured: true,
    comingSoon: false,
    overview:
      "Imagine waking up to breathtaking ocean views, walking along white sandy beaches, enjoying romantic sunsets and exploring beautiful islands. This exclusive luxury group vacation is designed for honeymooners, couples, friends and adventure lovers — departing Lagos in March 2027. This isn't just another holiday. It's an experience.",
    highlights: [
      'Return flight from Lagos',
      'Luxury hotel with ocean views',
      'Praia City Tour & UNESCO Cidade Velha',
      'Sal Island — ATV ride & beach lunch',
      'Blue Eye & Pedra de Lume Salt Crater',
      'Catamaran cruise on the Atlantic',
      'Professional group photographer',
      'Welcome dinner & Farewell Gala',
    ],
    included: [
      'Return flight',
      'Airport transfers',
      'Luxury hotel accommodation',
      'Daily breakfast',
      'Island tours & excursions',
      'Welcome dinner',
      'Farewell dinner',
      'Professional photographer',
      'Travel insurance',
      'Tour coordinator',
      'Souvenir gift',
    ],
    excluded: [
      'Lunch',
      'Dinner (except included meals)',
      'Personal shopping',
      'Laundry',
      'Additional excursions',
      'Extra baggage',
      'Visa fees (if applicable)',
    ],
    itinerary: [
      { day: 1, title: 'Lagos → Dakar → Cape Verde', description: 'Airport check-in and group departure from Lagos. Transit experience in Dakar, then arrival in Cape Verde. Hotel check-in and welcome cocktail to start the escape.' },
      { day: 2, title: 'Praia City Tour', description: 'Explore the capital — visit the Presidential Palace, local museum and vibrant markets. Stroll the beachfront promenade and capture the golden-hour sunset with the group photographer.' },
      { day: 3, title: 'UNESCO Cidade Velha', description: 'Visit Cidade Velha, a UNESCO World Heritage Site and the first European colonial settlement in the tropics. Experience local culture, traditional dance and an evening dinner by the ocean.' },
      { day: 4, title: 'Sal Island', description: 'Travel to the sun-drenched Sal Island for a day of beach relaxation and swimming in the crystal-clear Atlantic. Optional ATV ride across volcanic terrain, followed by a luxury beach lunch and night entertainment.' },
      { day: 5, title: 'Island Adventure', description: 'Morning excursion to the Blue Eye natural rock pools and the dramatic Pedra de Lume salt crater. Afternoon catamaran cruise along the Atlantic coastline, followed by a luxury dinner.' },
      { day: 6, title: 'Free Day — Farewell Gala Dinner', description: 'A free day to shop, enjoy an optional spa, relax on the beach or schedule a personal photo session. Evening: the Farewell Gala Dinner with awards and certificates celebrating the group.' },
      { day: 7, title: 'Departure', description: 'Final breakfast at the hotel. Airport transfer and flight home.' },
    ],
    accommodation: '6 nights at a luxury ocean-view hotel in Cape Verde with daily breakfast. Hotel features beach access, pool and stunning Atlantic views.',
    faqs: [
      { question: 'What is the travel date?', answer: 'This trip departs in March 2027 from Lagos. Exact dates will be confirmed to registered guests.' },
      { question: 'What is the difference between Early Bird and Standard pricing?', answer: 'Early Bird pricing (₦4,650,000 / ≈$3,400) is available for guests who register and make payment ahead of the deadline. Standard pricing (₦4,950,000 / ≈$3,600) applies thereafter. Both include the same full package.' },
      { question: 'Is there a payment plan?', answer: 'Yes — you can secure your spot with a ₦500,000 (≈$320) registration fee, which is credited towards your total trip cost, then spread the balance across further instalments. Contact us on WhatsApp to get started.' },
      { question: 'Does the package include flights?', answer: 'Yes. A return flight from Lagos to Cape Verde is included in the package price.' },
      { question: 'Is this suitable for honeymooners?', answer: 'Absolutely — this package is designed with couples and newly married pairs in mind, with romantic settings and a professional photographer throughout.' },
      { question: 'Why book early?', answer: 'Early registration secures the lower Early Bird rate, your guaranteed hotel room, priority visa processing and access to the flexible instalment plan. Seats are limited.' },
    ],
  },
  {
    slug: 'gambia-cultural-escape',
    title: 'The Gambia Cultural Escape',
    destination: 'Banjul',
    country: 'Gambia',
    destinationSlug: 'gambia',
    travelStyle: 'Culture & Heritage',
    shortDescription:
      'Seven days exploring West Africa\'s friendliest destination — river cruises, bird watching, vibrant markets and Atlantic beaches.',
    days: 7,
    groupSize: '2–10',
    startingPrice: 0,
    startingPriceNGN: 0,
    priceTBA: true,
    currency: 'USD',
    bestPeriod: 'Nov – Apr',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop',
    badge: 'Coming Soon',
    featured: true,
    comingSoon: true,
    overview:
      "The Gambia — West Africa's smallest country and one of its most rewarding. Known as The Smiling Coast, it offers an authentic West African experience: a river teeming with wildlife, markets bursting with colour, untouched Atlantic beaches and a warmth from its people that stays with you long after you leave.",
    highlights: [
      'River Gambia pirogue cruise at sunset',
      'Kachikally Crocodile Pool and sacred site',
      'Abuko Nature Reserve birdwatching',
      'Albert Market and craft bazaar in Banjul',
      'Atlantic Coast beach sunset',
    ],
    included: [
      'Airport transfers',
      'Seven nights hotel accommodation',
      'Daily breakfast',
      'River cruise excursion',
      'Abuko Nature Reserve guided walk',
      'Albert Market guided tour',
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Lunches and dinners',
      'Optional spa or watersport activities',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Banjul', description: 'Welcome transfer to your hotel. Evening walk along the Atlantic coastline.' },
      { day: 2, title: 'Banjul City & Albert Market', description: 'Guided morning tour of Banjul, including the arch monument, Albert Market and local crafts.' },
      { day: 3, title: 'Kachikally Sacred Pool', description: 'Visit the Kachikally Crocodile Pool, a sacred Mandinka site with a resident population of Nile crocodiles.' },
      { day: 4, title: 'River Gambia Cruise', description: 'Full-day pirogue cruise on the River Gambia — spot hippos, monitor lizards and rare birds.' },
      { day: 5, title: 'Abuko Nature Reserve', description: 'Guided birdwatching walk through one of West Africa\'s finest small nature reserves.' },
      { day: 6, title: 'Beach & Craft Village', description: 'Morning at the Atlantic beach, afternoon visit to a local craft village and batik workshop.' },
      { day: 7, title: 'Departure', description: 'Transfer to Banjul International Airport for your return flight.' },
    ],
    accommodation: 'Seven nights at a well-appointed Atlantic coast hotel near Senegambia Strip.',
    faqs: [
      { question: 'Is The Gambia safe?', answer: 'The Gambia is considered one of the safest destinations in West Africa and is very welcoming to visitors.' },
      { question: 'When will pricing and this trip be available?', answer: 'Pricing is being finalised and will be announced soon. Register your interest and we will notify you the moment pricing and bookings open.' },
      { question: 'Can Nigerians fly direct?', answer: 'There are connecting flights from Lagos and Abuja. We advise on the best routing for your dates.' },
    ],
  },
]

// ── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    name: 'Inioluwa Adekunle',
    location: 'Lagos, Nigeria',
    quote:
      'Every detail was handled beautifully before we even landed. The experience in Zanzibar felt truly personal — not like something off a shelf. Arubaden understands what it means to travel well.',
    trip: 'Zanzibar Island Retreat',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&auto=format&fit=crop&face=center',
    rating: 5,
  },
  {
    name: 'Dallah O.',
    location: 'Abuja, Nigeria',
    quote:
      'I had been planning a solo trip for two years without getting anywhere. Arubaden sorted everything within a week. Sal Island was breathtaking — and far easier to reach than I imagined.',
    trip: 'Sal Island Escape',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop&face=center',
    rating: 5,
  },
  {
    name: 'Anderlin Dorcas',
    location: 'Port Harcourt, Nigeria',
    quote:
      'From my first WhatsApp message to the moment I returned home, the team were incredible. Zanzibar was everything I dreamed it would be — and more. I will absolutely book with them again.',
    trip: 'Zanzibar Island Retreat',
    avatar: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=200&q=80&auto=format&fit=crop&face=center',
    rating: 5,
  },
  {
    name: 'Akindele Subomi',
    location: 'Lagos, Nigeria',
    quote:
      "We were nervous about planning our first international trip as a couple. Arubaden made it effortless — every detail was taken care of. Cape Verde was magical and we can't wait to book our next trip.",
    trip: 'Sal Island Escape',
    avatar: 'https://images.unsplash.com/photo-1583394293214-0b84f9f34f7c?w=200&q=80&auto=format&fit=crop&face=center',
    rating: 5,
  },
]

// ── Travel Styles ─────────────────────────────────────────────────────────────

export const travelStyles: { slug: string; title: string; description: string; image: string; style: TravelStyle }[] = [
  {
    slug: 'beach-island',
    title: 'Beach & Island Escapes',
    description: 'Powdery shores, turquoise lagoons and the gentle rhythm of island life.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop',
    style: 'Beach & Island',
  },
  {
    slug: 'adventure',
    title: 'Adventure Travel',
    description: 'Volcano hikes, river rapids and canopy soars for those who seek the extraordinary.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80&auto=format&fit=crop',
    style: 'Adventure',
  },
  {
    slug: 'culture-heritage',
    title: 'Culture & Heritage',
    description: 'Ancient medinas, sacred temples and living traditions that enrich the soul.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80&auto=format&fit=crop',
    style: 'Culture & Heritage',
  },
  {
    slug: 'romantic',
    title: 'Romantic Getaways',
    description: 'Intimate escapes crafted for two — from cliffside sunsets to private sandbanks.',
    image: 'https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=800&q=80&auto=format&fit=crop',
    style: 'Romantic',
  },
  {
    slug: 'family',
    title: 'Family Experiences',
    description: 'Thoughtful journeys that bring families together through shared discovery.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80&auto=format&fit=crop',
    style: 'Family',
  },
  {
    slug: 'group',
    title: 'Group Trips',
    description: 'Small-group adventures designed for friends, colleagues and communities.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop',
    style: 'Group',
  },
  {
    slug: 'wellness',
    title: 'Wellness Retreats',
    description: 'Restorative escapes combining nature, stillness and intentional living.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop',
    style: 'Wellness',
  },
  {
    slug: 'luxury',
    title: 'Luxury Escapes',
    description: 'Bespoke experiences at the world\'s finest resorts, refined to the last detail.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop',
    style: 'Luxury',
  },
]

// ── Journal Posts ─────────────────────────────────────────────────────────────

export const journalPosts: JournalPost[] = [
  {
    slug: 'best-time-to-visit-maldives',
    title: 'The Best Time to Visit the Maldives',
    excerpt:
      'Weather windows, peak seasons and the insider knowledge that separates a good Maldives trip from an extraordinary one.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80&auto=format&fit=crop',
    category: 'Travel Tips',
    date: 'June 2025',
    readTime: '5 min',
  },
  {
    slug: 'bali-beyond-the-instagram',
    title: 'Bali Beyond the Instagram',
    excerpt:
      'Discovering the quieter, more authentic side of Bali — the side that still belongs to the Balinese.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format&fit=crop',
    category: 'Destination Stories',
    date: 'May 2025',
    readTime: '7 min',
  },
  {
    slug: 'packing-for-a-safari',
    title: 'How to Pack for an African Safari',
    excerpt:
      'A practical and elegant guide to what to bring — and what to leave behind — for your first safari experience.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80&auto=format&fit=crop',
    category: 'Travel Tips',
    date: 'April 2025',
    readTime: '6 min',
  },
]

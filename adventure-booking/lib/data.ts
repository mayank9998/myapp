export type Ad = {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  imageUrl: string;
  category: string;
  vendorId: string;
  description: string;
  rating?: number;
};

export const sampleAds: Ad[] = [
  {
    id: 'adv-1',
    title: 'White Water Rafting',
    location: 'Rishikesh, India',
    price: 59,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156b46f66?q=80&w=1600&auto=format&fit=crop',
    category: 'Water Sports',
    vendorId: 'vendor-1',
    description: 'Thrilling rafting experience suitable for beginners and pros. Safety gear provided.',
    rating: 4.7,
  },
  {
    id: 'adv-2',
    title: 'Mountain Paragliding',
    location: 'Interlaken, Switzerland',
    price: 129,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1600&auto=format&fit=crop',
    category: 'Aerial',
    vendorId: 'vendor-2',
    description: 'Soar over breathtaking alpine vistas with certified pilots.',
    rating: 4.9,
  },
  {
    id: 'adv-3',
    title: 'Desert Quad Biking',
    location: 'Dubai, UAE',
    price: 89,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1571771715221-3f8f0a2f84c2?q=80&w=1600&auto=format&fit=crop',
    category: 'Motorsports',
    vendorId: 'vendor-1',
    description: 'Ride across golden dunes with expert guides. Helmets included.',
    rating: 4.6,
  },
  {
    id: 'adv-4',
    title: 'Scuba Diving Course',
    location: 'Koh Tao, Thailand',
    price: 199,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1526481280698-8fcc13fd9648?q=80&w=1600&auto=format&fit=crop',
    category: 'Water Sports',
    vendorId: 'vendor-3',
    description: 'Get PADI certified with crystal clear waters and diverse marine life.',
    rating: 4.8,
  },
  {
    id: 'adv-5',
    title: 'Bungee Jumping',
    location: 'Queenstown, New Zealand',
    price: 139,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop',
    category: 'Aerial',
    vendorId: 'vendor-4',
    description: 'Leap from iconic bridges with world-class safety standards.',
    rating: 4.5,
  },
  {
    id: 'adv-6',
    title: 'Rock Climbing Guided Tour',
    location: 'Yosemite, USA',
    price: 179,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1600&auto=format&fit=crop',
    category: 'Climbing',
    vendorId: 'vendor-2',
    description: 'Climb classic routes with experienced guides. Gear rental available.',
    rating: 4.7,
  },
  {
    id: 'adv-7',
    title: 'Kayaking Fjord Explorer',
    location: 'Geirangerfjord, Norway',
    price: 99,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
    category: 'Water Sports',
    vendorId: 'vendor-5',
    description: 'Paddle through serene fjords and waterfalls with a small group.',
    rating: 4.8,
  },
  {
    id: 'adv-8',
    title: 'Snowboarding Camp',
    location: 'Whistler, Canada',
    price: 249,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    category: 'Snow Sports',
    vendorId: 'vendor-6',
    description: 'Improve your skills with pro instructors across pristine slopes.',
    rating: 4.4,
  },
  {
    id: 'adv-9',
    title: 'Safari Hot Air Balloon',
    location: 'Masai Mara, Kenya',
    price: 399,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
    category: 'Aerial',
    vendorId: 'vendor-7',
    description: 'Sunrise flight over stunning savannah teeming with wildlife.',
    rating: 4.9,
  },
  {
    id: 'adv-10',
    title: 'Canyoning Adventure',
    location: 'Madeira, Portugal',
    price: 119,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1526481280698-8fcc13fd9648?q=80&w=1600&auto=format&fit=crop',
    category: 'Canyoning',
    vendorId: 'vendor-8',
    description: 'Abseil, slide and jump through lush canyons with certified guides.',
    rating: 4.6,
  },
];

export const featuredAdIds = ['adv-2', 'adv-9', 'adv-4'];

export function getAds(): Ad[] {
  return sampleAds;
}

export function getAdById(id: string): Ad | undefined {
  return sampleAds.find((a) => a.id === id);
}

export function getVendorAds(vendorId: string): Ad[] {
  return sampleAds.filter((a) => a.vendorId === vendorId);
}

export function getFeaturedAds(): Ad[] {
  const set = new Set(featuredAdIds);
  return sampleAds.filter((a) => set.has(a.id));
}
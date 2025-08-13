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
];

export function getAds(): Ad[] {
  return sampleAds;
}

export function getAdById(id: string): Ad | undefined {
  return sampleAds.find((a) => a.id === id);
}

export function getVendorAds(vendorId: string): Ad[] {
  return sampleAds.filter((a) => a.vendorId === vendorId);
}
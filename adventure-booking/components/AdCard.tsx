import { Image, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export type AdCardProps = {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  imageUrl: string;
  category: string;
};

export function AdCard({ id, title, location, price, currency, imageUrl, category }: AdCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/ad/${id}`)}
      style={{ backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', borderColor: '#eee', borderWidth: 1 }}
    >
      <Image source={{ uri: imageUrl }} accessibilityLabel={title} style={{ width: '100%', height: 160 }} />
      <View style={{ padding: 12, gap: 4 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
        <Text style={{ color: '#666' }}>{category} • {location}</Text>
        <Text style={{ marginTop: 4, fontWeight: '700' }}>
          {currency}{price.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
}
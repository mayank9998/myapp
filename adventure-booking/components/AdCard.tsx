import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { NetImage } from './NetImage';

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
      <NetImage uri={imageUrl} altKey={id} height={180} />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{title}</Text>
        <Text style={{ color: '#666', marginTop: 2 }}>{category} • {location}</Text>
        <Text style={{ marginTop: 6, fontWeight: '700' }}>
          {currency}{price.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
}
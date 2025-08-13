import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { ScrollView, Text, View, Button } from 'react-native';
import { NetImage } from '../../components/NetImage';
import { getAdById } from '../../lib/data';
import { Screen } from '../../components/Screen';

export default function AdDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const ad = id ? getAdById(id) : undefined;

  if (!ad) {
    return (
      <Screen>
        <View style={{ padding: 16 }}>
          <Text>Ad not found.</Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen options={{ title: ad.title }} />
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <NetImage uri={ad.imageUrl} altKey={`detail-${ad.id}`} height={280} />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: '700' }}>{ad.title}</Text>
          <Text style={{ color: '#666', marginTop: 4 }}>{ad.category} • {ad.location}</Text>
          <Text style={{ fontWeight: '700', marginTop: 8 }}>{ad.currency}{ad.price.toFixed(2)}</Text>
          <Text style={{ marginTop: 12, lineHeight: 20 }}>{ad.description}</Text>
          <View style={{ marginTop: 16 }}>
            <Button title="Book Now" onPress={() => router.push(`/booking/${ad.id}`)} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
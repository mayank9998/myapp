import { FlatList, Text, View } from 'react-native';
import { Screen } from '../../components/Screen';
import { AdCard } from '../../components/AdCard';
import { getAds } from '../../lib/data';

export default function ExploreScreen() {
  const ads = getAds();

  return (
    <Screen>
      <FlatList
        contentContainerStyle={{ padding: 16, gap: 12 }}
        data={ads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AdCard
            id={item.id}
            title={item.title}
            location={item.location}
            price={item.price}
            currency={item.currency}
            imageUrl={item.imageUrl}
            category={item.category}
          />
        )}
        ListHeaderComponent={() => (
          <View style={{ paddingVertical: 8 }}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>Explore Adventures</Text>
            <Text style={{ color: '#666', marginTop: 4 }}>Book thrilling experiences around the world</Text>
          </View>
        )}
      />
    </Screen>
  );
}
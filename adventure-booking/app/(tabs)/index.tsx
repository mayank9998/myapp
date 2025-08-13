import { FlatList, Text, View } from 'react-native';
import { Screen } from '../../components/Screen';
import { AdCard } from '../../components/AdCard';
import { getAds, getFeaturedAds } from '../../lib/data';
import { NetImage } from '../../components/NetImage';

export default function ExploreScreen() {
  const featured = getFeaturedAds();
  const ads = getAds();

  return (
    <Screen>
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={ads}
        keyExtractor={(item) => item.id}
        numColumns={1}
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
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListHeaderComponent={() => (
          <View>
            <View>
              <Text style={{ fontSize: 28, fontWeight: '800' }}>Explore Adventures</Text>
              <Text style={{ color: '#666', marginTop: 4 }}>Book thrilling experiences around the world</Text>
            </View>

            <View style={{ marginTop: 16 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 8 }}>Featured</Text>
              {featured.map((item, idx) => (
                <View key={item.id} style={{ borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#eee', marginBottom: idx === featured.length - 1 ? 0 : 12 }}>
                  <NetImage uri={item.imageUrl} altKey={`featured-${item.id}`} height={200} />
                  <View style={{ padding: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.title}</Text>
                    <Text style={{ color: '#666', marginTop: 2 }}>{item.category} • {item.location}</Text>
                  </View>
                </View>
              ))}
            </View>

            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 16, marginBottom: 8 }}>All Activities</Text>
          </View>
        )}
      />
    </Screen>
  );
}
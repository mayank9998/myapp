import { FlatList, Text, View } from 'react-native';
import { Screen } from '../../components/Screen';
import { AdCard } from '../../components/AdCard';
import { getAds, getFeaturedAds } from '../../lib/data';
import { Image } from 'expo-image';

export default function ExploreScreen() {
  const featured = getFeaturedAds();
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
          <View style={{ gap: 12 }}>
            <View>
              <Text style={{ fontSize: 28, fontWeight: '800' }}>Explore Adventures</Text>
              <Text style={{ color: '#666', marginTop: 4 }}>Book thrilling experiences around the world</Text>
            </View>

            <View style={{ gap: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: '700' }}>Featured</Text>
              {featured.map((item) => (
                <View key={item.id} style={{ borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#eee' }}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={{ width: '100%', height: 200 }}
                    contentFit="cover"
                    transition={200}
                  />
                  <View style={{ padding: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.title}</Text>
                    <Text style={{ color: '#666' }}>{item.category} • {item.location}</Text>
                  </View>
                </View>
              ))}
            </View>

            <Text style={{ fontSize: 18, fontWeight: '700' }}>All Activities</Text>
          </View>
        )}
      />
    </Screen>
  );
}
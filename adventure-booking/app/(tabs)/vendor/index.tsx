import { FlatList, Text, View } from 'react-native';
import { Screen } from '../../../components/Screen';
import { AdCard } from '../../../components/AdCard';
import { getVendorAds } from '../../../lib/data';

// In a real app, this would be the authenticated vendor ID
const CURRENT_VENDOR_ID = 'vendor-1';

export default function VendorDashboard() {
  const ads = getVendorAds(CURRENT_VENDOR_ID);

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
            <Text style={{ fontSize: 24, fontWeight: '700' }}>Vendor Dashboard</Text>
            <Text style={{ color: '#666', marginTop: 4 }}>Manage your adventure listings</Text>
          </View>
        )}
      />
    </Screen>
  );
}
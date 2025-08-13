import { Screen } from '../../../components/Screen';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <Screen>
      <View style={{ padding: 16, gap: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Profile</Text>
        <Text style={{ color: '#666' }}>Sign in and manage your bookings and ads.</Text>
      </View>
    </Screen>
  );
}
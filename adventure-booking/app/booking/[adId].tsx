import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { getAdById } from '../../lib/data';
import { Screen } from '../../components/Screen';

export default function BookingScreen() {
  const { adId } = useLocalSearchParams<{ adId: string }>();
  const router = useRouter();
  const ad = adId ? getAdById(adId) : undefined;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState('1');
  const [date, setDate] = useState('');

  if (!ad) {
    return (
      <Screen>
        <View style={{ padding: 16 }}>
          <Text>Invalid booking link.</Text>
        </View>
      </Screen>
    );
  }

  const submit = () => {
    if (!name || !email || !participants || !date) {
      Alert.alert('Missing info', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Booking confirmed', `${ad.title} on ${date} for ${participants} people.`, [
      { text: 'OK', onPress: () => router.replace('/(tabs)') },
    ]);
  };

  return (
    <Screen>
      <Stack.Screen options={{ title: `Book: ${ad.title}` }} />
      <View style={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{ad.title}</Text>
        <Text style={{ color: '#666' }}>{ad.location}</Text>
        <Text style={{ fontWeight: '700' }}>{ad.currency}{ad.price.toFixed(2)}</Text>

        <TextInput
          placeholder="Full name"
          value={name}
          onChangeText={setName}
          style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 }}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 }}
        />
        <TextInput
          placeholder="Participants"
          keyboardType="number-pad"
          value={participants}
          onChangeText={setParticipants}
          style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 }}
        />
        <TextInput
          placeholder="Preferred date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
          style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 }}
        />
        <Button title="Confirm Booking" onPress={submit} />
      </View>
    </Screen>
  );
}
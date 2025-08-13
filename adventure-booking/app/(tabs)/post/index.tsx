import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { Screen } from '../../../components/Screen';

export default function PostAdScreen() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');

  const submit = () => {
    if (!title || !location || !price || !category) {
      Alert.alert('Missing info', 'Please fill out the required fields.');
      return;
    }
    Alert.alert('Posted', 'Your ad has been submitted for review.');
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Post an Adventure</Text>

        <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={s.input} />
        <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={s.input} />
        <TextInput placeholder="Category" value={category} onChangeText={setCategory} style={s.input} />
        <TextInput placeholder="Price (USD)" keyboardType="decimal-pad" value={price} onChangeText={setPrice} style={s.input} />
        <TextInput placeholder="Image URL (optional)" value={imageUrl} onChangeText={setImageUrl} style={s.input} />

        <View style={{ marginTop: 8 }}>
          <Button title="Submit" onPress={submit} />
        </View>
      </ScrollView>
    </Screen>
  );
}

const s = {
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
  },
};
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const courts = [
  { id: 1, name: 'Court A', price: '$120', slots: '10:00 • 18:00' },
  { id: 2, name: 'Court B', price: '$140', slots: '11:00 • 19:00' },
  { id: 3, name: 'Court C', price: '$160', slots: '13:00 • 20:00' }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Reservation</Text>
      <Text style={styles.subtitle}>Book your favorite court</Text>

      <FlatList
        data={courts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardText}>Price: {item.price}</Text>
            <Text style={styles.cardText}>Slots: {item.slots}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Reserve</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071b2f',
    paddingTop: 80,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#bfdbfe',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    color: '#dbeafe',
    fontSize: 14,
    marginBottom: 6,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#22c55e',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

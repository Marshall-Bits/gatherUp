// app/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="people-circle-outline" size={100} color="#fff" />
        <Text style={styles.title}>GatherUp</Text>
        <Text style={styles.subtitle}>Connect  |  Organize  |  Enjoy</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/auth-form')}
        >
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '700',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 30,
    elevation: 2,
    width: 250,
  },
  buttonText: {
    color: '#2575fc',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

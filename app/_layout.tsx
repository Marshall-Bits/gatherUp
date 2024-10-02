// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }}  // This hides the header for the home screen
      />
      <Stack.Screen 
        name="create-event" 
        options={{ title: 'Create Event' }}  // This sets a custom title
      />
    </Stack>
  );
}

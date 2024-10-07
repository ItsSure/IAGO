import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Button, SafeAreaView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function Settings() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    router.replace('/login'); // Redirige al login después de cerrar sesión
  };
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ThemedText type="default">Settings Screen</ThemedText>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
}

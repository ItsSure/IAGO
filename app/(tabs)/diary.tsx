import { SafeAreaView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function Diary() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ThemedText type="default">Diary Screen</ThemedText>
    </SafeAreaView>
  );
}

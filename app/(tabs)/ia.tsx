import { SafeAreaView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function Ia() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ThemedText type="default">IA Screen</ThemedText>
    </SafeAreaView>
  );
}

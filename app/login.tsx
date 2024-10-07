import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    const userToken = 'fake-token';
    await AsyncStorage.setItem('userToken', userToken);
    router.replace('/(tabs)/diary');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Iniciar sesión</Text>
          <Text style={styles.cardDescription}>
            Ingresa tus credenciales para acceder
          </Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre de usuario</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="person-outline"
                size={16}
                color="#A1A1AA"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre de usuario"
                placeholderTextColor="#71717A"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color="#A1A1AA"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#71717A"
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerText}
            onPress={() => router.replace('/register')}
          >
            <Text style={styles.link}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 350,
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
    borderColor: '#0A0A0A',
    borderWidth: 3,
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDescription: {
    color: '#A1A1AA',
  },
  cardContent: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#D4D4D8',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#18181B',
    borderRadius: 5,
    paddingLeft: 35,
    borderColor: '#3F3F46',
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    height: 40,
  },
  cardFooter: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#A1A1AA',
    fontSize: 12,
    marginTop: 10,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

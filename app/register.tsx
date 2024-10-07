import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Crear una cuenta</Text>
          <Text style={styles.cardDescription}>
            Ingresa tus datos para registrarte
          </Text>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre completo</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="person-outline"
                size={16}
                color="#A1A1AA"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre completo"
                placeholderTextColor="#71717A"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="mail-outline"
                size={16}
                color="#A1A1AA"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo electrónico"
                placeholderTextColor="#71717A"
                keyboardType="email-address"
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
                placeholder="Crea tu contraseña"
                placeholderTextColor="#71717A"
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar contraseña</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color="#A1A1AA"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirma tu contraseña"
                placeholderTextColor="#71717A"
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            Al registrarte, aceptas nuestros{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('#')}>
              términos de servicio
            </Text>{' '}
            y{' '}
            <Text style={styles.link} onPress={() => Linking.openURL('#')}>
              política de privacidad
            </Text>
            .
          </Text>
          <TouchableOpacity
            style={styles.footerText}
            onPress={() => router.replace('/login')}
          >
            <Text style={styles.link}>Ya tengo una cuenta</Text>
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
    width: 400,
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
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  footerText: {
    color: '#A1A1AA',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

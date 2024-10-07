import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('@userToken', token);
  } catch (e) {
    console.error('Error saving token:', e);
  }
};

export const getUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@userToken');
    return token;
  } catch (e) {
    console.error('Error retrieving token:', e);
    return null;
  }
};

export const removeUserToken = async () => {
  try {
    await AsyncStorage.removeItem('@userToken');
  } catch (e) {
    console.error('Error removing token:', e);
  }
};

export default AsyncStorage;

module.exports = {
  extends: [
    'universe/native', // Tu configuración actual de Expo
    'plugin:prettier/recommended', // Tu configuración actual de Prettier
    'plugin:react/recommended', // Reglas recomendadas de React
    'plugin:react/jsx-runtime', // Soporte para React 17+ y JSX runtime
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    // Puedes agregar más reglas personalizadas si es necesario
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
};

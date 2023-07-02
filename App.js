import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require('./src/Fonts/Roboto-Bold.ttf'), 
    RobotoRegular: require('./src/Fonts/Roboto-Regular.ttf'), 
    RobotoMedium: require('./src/Fonts/Roboto-Medium.ttf'), 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </>
  );
}
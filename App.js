import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPageScreen from './App/screens/MainPageScreen';
import ConstructionScreen from './App/screens/ConstructionScreen';
import ConsultantScreen from './App/screens/ConsultantScreen';
import ContactUsScreen from './App/screens/ContactUsScreen';
import FacilityScreen from './App/screens/FacilityScreen';
import PMScreen from './App/screens/PMScreen';
import AboutUsScreen from './App/screens/AboutUsScreen';
import CareerScreen from './App/screens/CareerScreen';
import BookingScreen from './App/screens/BookingScreen';
import BookingHistoryScreen from './App/components/BookingHistoryModal';

export default function App() {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HOME">
				<>
					<Stack.Screen name="HOME" component={MainPageScreen} options={{ headerShown: false }} />
					<Stack.Screen name="CONSTRUCTION" component={ConstructionScreen} options={{ headerShown: false }} />
					<Stack.Screen
						name="MANAGEMENT CONSULTANTS"
						component={ConsultantScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="FACILITY MANAGEMENT"
						component={FacilityScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="PROJECT MANAGEMENT" component={PMScreen} options={{ headerShown: false }} />
					<Stack.Screen name="ABOUT US" component={AboutUsScreen} options={{ headerShown: false }} />
					<Stack.Screen name="CAREER" component={CareerScreen} options={{ headerShown: false }} />
					<Stack.Screen name="CONTACT US" component={ContactUsScreen} options={{ headerShown: false }} />
					<Stack.Screen name="BOOKING" component={BookingScreen} options={{ headerShown: false }} />
					<Stack.Screen name="BOOKING HISTORY" component={BookingHistoryScreen} options={{ headerShown: false }} />
				</>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
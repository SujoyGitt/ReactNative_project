import Home from "./src/screen/Home";
import About from "./src/screen/About";
import Contact from "./src/screen/Contact";
import UserData from "./src/screen/Userdata";
import Course from "./src/screen/Course";
import CourseDetails from "./src/screen/CourseDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home appName={"Online Education"} />}
        </Stack.Screen>
        {/* About Screen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: { fontSize: 25 },
            headerTitleAlign: "center",
          }}
        />
        {/* Course Screen */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* UserData Screen */}
        <Stack.Screen
          name="Userdata"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerTitle: "Students Data",
          }}
        />
        {/* Contact Screen */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        {/* CourseDetails Screen */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Text,Button } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import NewsList from "./src/screens/NewsList";
import News from "./src/screens/News";
import { TouchableOpacity } from "react-native-gesture-handler";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Noticias: NewsList,
    Noticia: News,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Tecnologia I - Brian Rios",
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(navigator);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import NewsList from "./src/screens/NewsList";
import News from "./src/screens/News";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Noticias: NewsList,
    Noticia: News,
  },
  {
    initialRouteName: "Noticias",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

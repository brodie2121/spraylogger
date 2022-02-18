import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/landingPage";
import MyLogs from "./screens/myLogs/MyLogs";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateLog from "./screens/CreateLog/CreateLog";
import SingleLog from "./screens/SingleLog/SingleLog";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/logs" component={() => <MyLogs />} />
      <Route path="/createlog" component={CreateLog} />
      <Route path="/log/:id" component={SingleLog} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;

import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/landingPage";
import MyLogs from "./screens/myLogs/MyLogs";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/mylogs" component={() => <MyLogs />} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;

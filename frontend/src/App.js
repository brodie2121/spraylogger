import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/landingPage";

const App = () => (
  <>
    <Header />
    <main>
      <LandingPage />
    </main>
    <Footer />
  </>
);

export default App;

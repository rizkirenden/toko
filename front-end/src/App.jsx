import "./App.css";
import { Navbar } from "./components/molecules/landingpage/nav-bar";
import { Introduction } from "./components/molecules/landingpage/introduction";
import { Tokocard } from "./components/molecules/landingpage/toko-card";
import { Menucard } from "./components/molecules/landingpage/menu-card";
function App() {
  return (
    <>
      <div className="">
        <Introduction />
        <Navbar />
        <Tokocard />
        <Menucard />
      </div>
    </>
  );
}

export default App;

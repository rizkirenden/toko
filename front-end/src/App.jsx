import "./App.css";
import { Navbar } from "./components/molecules/landingpage/nav-bar";
import { Introduction } from "./components/molecules/landingpage/introduction";
import { Tokocard } from "./components/molecules/landingpage/toko-card";
import { Menucard } from "./components/molecules/landingpage/menu-card";
import { Imageabout } from "./components/molecules/landingpage/image-about";
import { Aboutlist } from "./components/molecules/landingpage/about-list";
import { Divider } from "./components/molecules/landingpage/divider";
import { Judul } from "./components/molecules/landingpage/judul";
function App() {
  return (
    <>
      <div className="">
        <Introduction />
        <Navbar />
        <Imageabout />
        <Aboutlist />
        <Menucard />
        <Tokocard />
        <Divider />
        <Judul />
      </div>
    </>
  );
}

export default App;

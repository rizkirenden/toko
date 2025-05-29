import "./App.css";
import Header from "./components/organisms/landingpage/header";
import About from "./components/organisms/landingpage/about";
import Kategori from "./components/organisms/landingpage/kategori";
import { Tokocard } from "./components/molecules/landingpage/toko-card";
import { Divider } from "./components/molecules/landingpage/divider";
import { Judul } from "./components/molecules/landingpage/judul";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <About />
        <Kategori />
        <Tokocard />
        <Divider />
        <Judul />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/organisms/landingpage/header";
import About from "./components/organisms/landingpage/about";
import Kategori from "./components/organisms/landingpage/kategori";
import { Divider } from "./components/molecules/landingpage/divider";
import { Judul } from "./components/molecules/landingpage/judul";
import Toko from "./components/organisms/landingpage/toko";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Divider />
        <About />
        <Divider />
        <Kategori />
        <Divider />
        <Toko />
        <Judul />
      </div>
    </>
  );
}

export default App;

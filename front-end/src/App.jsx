import "./App.css";
import Header from "./components/organisms/landingpage/header";
import About from "./components/organisms/landingpage/about";
import Kategori from "./components/organisms/landingpage/kategori";
import { Divider } from "./components/molecules/landingpage/divider";
import Toko from "./components/organisms/landingpage/toko";
import Produk from "./components/organisms/landingpage/produk";
import Footer from "./components/organisms/landingpage/footer";

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
        <Divider />
        <Produk />
        <Footer />
      </div>
    </>
  );
}

export default App;

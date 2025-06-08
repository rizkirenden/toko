import React from "react";
import Header from "../components/organisms/landingpage/header";
import About from "../components/organisms/landingpage/about";
import Kategori from "../components/organisms/landingpage/kategori";
import { Divider } from "../components/molecules/landingpage/divider";
import Toko from "../components/organisms/landingpage/toko";
import Produk from "../components/organisms/landingpage/produk";
import Footer from "../components/organisms/landingpage/footer";

const LandingpageLayout = () => {
  return (
    <div className="bg-white  w-full">
      <Header />

      <main className="w-full">
        <section className=" w-full">
          <div className="mb-10">
            <Divider />
          </div>
          <div className="mb-10">
            <About />
          </div>
        </section>

        <section className=" w-full">
          <div className="mb-10">
            <Divider />
          </div>
          <div className="mb-10">
            <Kategori />
          </div>
        </section>

        <section className=" w-full">
          <div className="mb-10">
            <Divider />
          </div>
          <div className="mb-10">
            <Toko />
          </div>
        </section>

        <section className=" w-full">
          <div className="mb-10">
            <Divider />
          </div>
          <div className="mb-10">
            <Produk />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingpageLayout;

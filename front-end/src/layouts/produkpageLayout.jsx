import React from "react";

import Produkwithfilter from "../components/organisms/produk/produk";
import Footer from "../components/organisms/landingpage/footer";
import Header from "../components/organisms/produk/header";

const ProdukpageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mb-10">
            <Produkwithfilter />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProdukpageLayout;

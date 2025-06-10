import React from "react";
import Footer from "../components/organisms/landingpage/footer";
import Header from "../components/organisms/produk/header";
import Tokotoko from "../components/organisms/toko/toko";
const TokopageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mb-10">
            <Tokotoko />
          </div>
        </section>
      </main>

      {/* Footer selalu di bawah */}
      <Footer />
    </div>
  );
};

export default TokopageLayout;

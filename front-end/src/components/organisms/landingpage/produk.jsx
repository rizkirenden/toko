import React, { useEffect } from "react";
import { Judul } from "../../molecules/landingpage/judul";
import { Produkcard } from "../../molecules/landingpage/produk-card";
import useProdukStore from "../../../store/produkStore";

const Produk = () => {
  const { produks, loading, error, fetchProduks } = useProdukStore();

  useEffect(() => {
    fetchProduks();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl w-64 h-96 opacity-20"
            ></div>
          ))}
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-8">
        <div className="inline-block p-4 bg-[#1a1a1a] rounded-lg border border-red-500/30">
          <span className="text-red-400 font-mono">Error: {error}</span>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex items-center mb-12 w-full max-w-5xl mx-auto px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-[#A0C878]/0 via-[#A0C878]/50 to-[#A0C878]/0"></div>
        <Judul className="mx-6 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A0C878] to-[#DDEB9D] whitespace-nowrap">
          Our Products
        </Judul>
        <div className="flex-1 h-px bg-gradient-to-r from-[#A0C878]/0 via-[#A0C878]/50 to-[#A0C878]/0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {produks.map((produk) => (
          <Produkcard
            key={produk.id}
            toko_id={produk.toko_id}
            category_id={produk.category_id}
            name={produk.name}
            harga={produk.harga}
            deskripsi_bahan={produk.deskripsi_bahan}
            gambar_product={produk.gambar_product}
            video_product={produk.video_product}
            status={produk.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Produk;

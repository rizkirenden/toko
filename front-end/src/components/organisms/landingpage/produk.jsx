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
    <div>
      <div className="flex items-center justify-center mb-5">
        <Judul className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A0C878] to-[#DDEB9D] whitespace-nowrap">
          Our Products
        </Judul>
      </div>

      {/* Container scroll horizontal mirip Toko */}
      <div className="overflow-x-auto w-full no-scrollbar">
        <div className="flex relative w-max px-5 py-2 gap-4">
          {produks.map((produk) => (
            <div key={produk.id} className="flex-shrink-0 w-56">
              <Produkcard
                toko_id={produk.toko_id}
                category_id={produk.category_id}
                name={produk.name}
                harga={produk.harga}
                deskripsi_bahan={produk.deskripsi_bahan}
                gambar_product={produk.gambar_product}
                video_product={produk.video_product}
                status={produk.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produk;

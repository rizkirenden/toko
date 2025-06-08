import React, { useEffect, useState } from "react";
import useProdukStore from "../../../store/produkStore";
import { Filterproduk } from "../../molecules/produk/filter-produk";
import { Produkcardproduk } from "../../molecules/produk/produk-card";

const Produkwithfilter = () => {
  const { produks, loading, error, fetchProduks } = useProdukStore();
  const [filter, setFilter] = useState({
    kategori: "",
    toko: "",
    name: "",
    search: "",
  });

  useEffect(() => {
    fetchProduks();
  }, []);

  const filteredProduks = produks.filter((p) => {
    return (
      (!filter.kategori || p.nama_kategori === filter.kategori) &&
      (!filter.toko || p.nama_toko === filter.toko) &&
      (!filter.name || p.name === filter.name) &&
      (!filter.search ||
        p.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        p.nama_toko.toLowerCase().includes(filter.search.toLowerCase()) ||
        p.nama_kategori.toLowerCase().includes(filter.search.toLowerCase()))
    );
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl w-64 h-96 opacity-20"
            />
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
    <>
      <Filterproduk produks={produks} onFilterChange={setFilter} />
      <div className="grid grid-cols-2 justify-center items-center gap-6">
        {filteredProduks.map((produk) => (
          <div key={produk.id} className="w-44 h-96 mx-auto">
            <Produkcardproduk {...produk} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Produkwithfilter;

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

  const groupedByToko = filteredProduks.reduce((acc, produk) => {
    if (!acc[produk.nama_toko]) {
      acc[produk.nama_toko] = [];
    }
    acc[produk.nama_toko].push(produk);
    return acc;
  }, {});

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
      <div className="space-y-10 px-4 mt-10 max-w-6xl mx-auto">
        {Object.entries(groupedByToko).map(([toko, produkList]) => (
          <div key={toko}>
            <h2 className="text-lg font-bold text-[#DDEB9D] mb-4">
              TOKO: {toko}
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {produkList.map((produk) => (
                <div
                  key={produk.id}
                  className="min-w-[250px] max-w-[300px] flex-shrink-0"
                >
                  <Produkcardproduk {...produk} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Produkwithfilter;

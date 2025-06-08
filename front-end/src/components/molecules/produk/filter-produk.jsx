import React, { useState, useEffect } from "react";
import { SearchInput } from "../../atoms/search-input";
import { Selectbox } from "../../atoms/select-box";

export const Filterproduk = ({ produks, onFilterChange }) => {
  const [selectedKategori, setSelectedKategori] = useState("");
  const [selectedToko, setSelectedToko] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [search, setSearch] = useState("");

  // Unique kategori
  const kategoriOptions = [...new Set(produks.map((p) => p.nama_kategori))];

  // Filter toko berdasarkan kategori
  const tokoOptions = selectedKategori
    ? [
        ...new Set(
          produks
            .filter((p) => p.nama_kategori === selectedKategori)
            .map((p) => p.nama_toko)
        ),
      ]
    : [];

  // Filter produk berdasarkan kategori & toko
  const nameOptions =
    selectedKategori && selectedToko
      ? produks
          .filter(
            (p) =>
              p.nama_kategori === selectedKategori &&
              p.nama_toko === selectedToko
          )
          .map((p) => p.name)
      : [];

  // Kirim semua filter ke parent setiap ada perubahan
  useEffect(() => {
    onFilterChange({
      kategori: selectedKategori,
      toko: selectedToko,
      name: selectedName,
      search, // tambahkan search
    });
  }, [selectedKategori, selectedToko, selectedName, search, onFilterChange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#FAF6E9] p-4 rounded-xl shadow-md">
      {/* Search input controlled */}
      <SearchInput
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Selectbox
        options={kategoriOptions}
        value={selectedKategori}
        onChange={(e) => {
          setSelectedKategori(e.target.value);
          setSelectedToko("");
          setSelectedName("");
          setSearch(""); // reset search juga optional
        }}
        placeholder="Pilih Kategori"
      />

      {selectedKategori && (
        <Selectbox
          options={tokoOptions}
          value={selectedToko}
          onChange={(e) => {
            setSelectedToko(e.target.value);
            setSelectedName("");
            setSearch(""); // reset search optional
          }}
          placeholder="Pilih Toko"
        />
      )}

      {selectedKategori && selectedToko && (
        <Selectbox
          options={nameOptions}
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          placeholder="Pilih Produk"
        />
      )}
    </div>
  );
};

import React, { useState } from "react";
import { Input } from "../../../atoms/input";
import useProdukStore from "../../../../store/produkStore";

export const Forminput = () => {
  const { addProduct } = useProdukStore();

  const [form, setForm] = useState({
    name: "",
    harga: "",
    deskripsi_bahan: "",
    gambar_product: "",
    video_product: "",
    status: "",
    nama_toko: "",
    no_telp: "",
    nama_kategori: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const FileChange = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    try {
      await addProduct(formData);
      alert("Produk berhasil ditambah");

      setForm({
        name: "",
        harga: "",
        deskripsi_bahan: "",
        gambar_product: "",
        video_product: "",
        status: "",
        nama_toko: "",
        no_telp: "",
        nama_kategori: "",
      });
    } catch (err) {
      alert("Gagal menambah Produk: " + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg"
    >
      <Input
        name="name"
        placeholder="Nama Produk"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="harga"
        placeholder="Harga"
        value={form.harga}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="deskripsi_bahan"
        placeholder="Deskripsi Bahan"
        value={form.deskripsi_bahan}
        required
        className="w-full"
      />
      <Input
        type="file"
        name="gambar_product"
        accept="image/*"
        onChange={FileChange}
        required
      />
      <Input
        type="file"
        name="video_product"
        accept="video/*"
        onChange={FileChange}
        required
      />
      <div>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Pilih Status</option>
          <option value="ready">Ready</option>
          <option value="pemesanan">Pemesanan</option>
          <option value="tidak_ready">Tidak Ready</option>
          <option value="habis">Habis</option>
        </select>
      </div>
      <Input
        name="nama_kategori"
        placeholder="Nama Kategori"
        value={form.nama_kategori}
        onChange={handleChange}
      />
    </form>
  );
};

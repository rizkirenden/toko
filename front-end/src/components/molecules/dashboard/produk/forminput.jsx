import React, { useState, useEffect } from "react";
import { Input } from "../../../atoms/input";
import useProdukStore from "../../../../store/produkStore";
import useCategoryStore from "../../../../store/categoryStore";
import Authstore from "../../../../store/authStore"; // Cukup ini saja

export const Forminput = ({ onSuccess, onClose }) => {
  const { addProduks } = useProdukStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { user } = Authstore();
  const toko_id = user?.toko_id;

  const [form, setForm] = useState({
    name: "",
    harga: "",
    deskripsi_bahan: "",
    gambar_product: "",
    video_product: "",
    status: "",
    category_id: "",
    toko_id: toko_id || "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (toko_id) {
      setForm((prev) => ({ ...prev, toko_id }));
    }
  }, [toko_id]);

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
      await addProduks(formData);
      alert("Produk berhasil ditambah");

      setForm({
        name: "",
        harga: "",
        deskripsi_bahan: "",
        gambar_product: "",
        video_product: "",
        status: "",
        category_id: "",
        toko_id,
      });

      onSuccess?.();
    } catch (err) {
      alert("Gagal menambah Produk: " + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg relative"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

      <Input
        name="name"
        placeholder="Nama Produk"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        name="harga"
        placeholder="Harga"
        value={form.harga}
        onChange={handleChange}
        required
      />
      <Input
        name="deskripsi_bahan"
        placeholder="Deskripsi Bahan"
        value={form.deskripsi_bahan}
        onChange={handleChange}
        required
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

      <select
        name="category_id"
        value={form.category_id}
        onChange={handleChange}
        className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
        required
      >
        <option value="">Pilih Kategori</option>
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-[#A0C878] text-white py-2 px-4 rounded hover:bg-[#88b267]"
      >
        Simpan
      </button>
    </form>
  );
};

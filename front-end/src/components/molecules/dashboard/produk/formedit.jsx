import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useProdukStore from "../../../../store/produkStore";
import useCategoryStore from "../../../../store/categoryStore";

export const Formedit = ({ produk, onClose }) => {
  const [gambarPreview, setGambarPreview] = useState("");
  const { updateProduk } = useProdukStore();
  const { categories, fetchCategories } = useCategoryStore();

  const [form, setForm] = useState({
    name: "",
    harga: "",
    deskripsi_bahan: "",
    gambar_product: "",
    video_product: "",
    status: "",
    nama_toko: "",
    no_telp: "",
    category_id: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (produk) {
      setForm({
        name: produk.name || "",
        harga: produk.harga || "",
        deskripsi_bahan: produk.deskripsi_bahan || "",
        gambar_product: "",
        video_product: "",
        status: produk.status || "",
        nama_toko: produk.nama_toko || "",
        no_telp: produk.no_telp || "",
        category_id: produk.category_id || "",
      });
      setGambarPreview(`/uploads/${produk.gambar_produk}`);
    }
  }, [produk]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }
    try {
      await updateProduk(produk.product_id, formData);
      alert("Produk berhasil diperbarui");
      onClose?.();
    } catch (err) {
      alert("Gagal memperbarui produk: " + err);
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
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-400"
      >
        ✕
      </button>

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
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="nama_toko"
        placeholder="Nama Toko"
        value={form.nama_toko}
        onChange={handleChange}
        className="w-full"
      />
      <Input
        name="no_telp"
        placeholder="No Telp"
        value={form.no_telp}
        onChange={handleChange}
        className="w-full"
      />
      <Input
        type="file"
        name="gambar_product"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full"
      />
      {gambarPreview && (
        <img
          src={gambarPreview}
          alt="Preview Gambar"
          className="w-24 h-24 object-cover rounded border"
        />
      )}
      <Input
        type="file"
        name="video_product"
        accept="video/*"
        onChange={handleFileChange}
        className="w-full"
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
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kategori
        </label>
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
      </div>
      <button
        type="submit"
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
      >
        Update
      </button>
    </form>
  );
};

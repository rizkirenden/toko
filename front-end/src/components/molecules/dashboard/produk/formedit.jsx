import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useProdukStore from "../../../../store/produkStore";
import useCategoryStore from "../../../../store/categoryStore";
import Authstore from "../../../../store/authStore";

export const Formedit = ({ produk, onClose, onSuccess }) => {
  const { updateProduks } = useProdukStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { user } = Authstore();
  const toko_id = user?.toko_id;

  const [form, setForm] = useState({
    name: "",
    harga: "",
    deskripsi_bahan: "",
    gambar_product: null,
    video_product: null,
    status: "",
    category_id: "",
    toko_id: toko_id || "",
  });

  const [gambarPreview, setGambarPreview] = useState("");
  const [videoPreview, setVideoPreview] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (produk) {
      setForm({
        name: produk.name,
        harga: produk.harga,
        deskripsi_bahan: produk.deskripsi_bahan,
        gambar_product: produk.gambar_product,
        video_product: produk.video_product,
        status: produk.status,
        category_id: produk.category_id,
        toko_id: toko_id || produk.toko_id || "",
      });

      setGambarPreview(
        `http://localhost:3000/uploads/${produk.gambar_product}`
      );
      setVideoPreview(`http://localhost:3000/uploads/${produk.video_product}`);
    }
  }, [produk, toko_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      setForm((prev) => ({ ...prev, [name]: file }));
      const previewUrl = URL.createObjectURL(file);
      if (name === "gambar_product") setGambarPreview(previewUrl);
      if (name === "video_product") setVideoPreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }

    try {
      await updateProduks(produk.product_id, formData);
      alert("Produk berhasil diperbarui");
      onSuccess?.();
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
        onChange={handleFileChange}
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
      />
      {videoPreview && (
        <video
          src={videoPreview}
          controls
          className="w-48 h-32 object-cover rounded border"
        />
      )}

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
        className="bg-[#F7C04A] text-white py-2 px-4 rounded hover:bg-[#e2b03c]"
      >
        Update
      </button>
    </form>
  );
};

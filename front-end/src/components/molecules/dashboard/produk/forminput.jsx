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

  return <div>forminput</div>;
};

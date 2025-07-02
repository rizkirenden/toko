import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useProdukStore from "../../../../store/produkStore";

export const Formedit = ({ produk, onClose }) => {
  const [gambarPreview, setGambarPreview] = useState("");
  const { updateProduk } = useProdukStore();

  const [form, setForm] = useState({
    name: "",
    harga: "",
    deskripsi_bahan: "",
    gambar_produk: "",
    video_produk: "",
    status: "",
    nama_toko: "",
    no_telp: "",
    nama_kategori: "",
  });

  useEffect(() => {
    if (produk) {
      setForm({
        name: produk.name,
        harga: produk.harga,
        deskripsi_bahan: produk.deskripsi_bahan,
        gambar_produk: "",
        video_produk: "",
        status: produk.status,
        nama_toko: produk.nama_toko,
        no_telp: produk.no_telp,
        nama_kategori: produk.nama_kategori,
      });
      setGambarPreview(`/uploads/${produk.gambar_produk}`);
    }
  }, [produk]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, gambar_produk: file }));
    setGambarPreview(URL.createObjectURL(file));
  };
  return <div>formedit</div>;
};

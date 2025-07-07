import React, { useState } from "react";
import { Input } from "../../../atoms/input";
import useTokoStore from "../../../../store/tokoStore";

export const Forminput = ({ onSuccess, onClose }) => {
  const { addToko } = useTokoStore();
  const [form, setForm] = useState({
    nama_toko: "",
    nama_pemilik: "",
    no_telp: "",
    alamat_toko: "",
    alamat_pemilik: "",
    toko_logo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, toko_logo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    try {
      await addToko(formData);
      alert("Toko berhasil ditambahkan");

      setForm({
        nama_toko: "",
        nama_pemilik: "",
        no_telp: "",
        alamat_toko: "",
        alamat_pemilik: "",
        toko_logo: "",
      });

      onSuccess?.(); // ✅ Tutup modal & refresh data
    } catch (err) {
      alert("Gagal menambahkan toko: " + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg relative"
    >
      {/* Tombol close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

      {/* Input fields */}
      <Input
        name="nama_toko"
        placeholder="Nama Toko"
        value={form.nama_toko}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="nama_pemilik"
        placeholder="Nama Pemilik"
        value={form.nama_pemilik}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="no_telp"
        placeholder="No Telp"
        value={form.no_telp}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="alamat_toko"
        placeholder="Alamat Toko"
        value={form.alamat_toko}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="alamat_pemilik"
        placeholder="Alamat Pemilik"
        value={form.alamat_pemilik}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full"
      />

      <button
        type="submit"
        className="bg-[#A0C878] text-white py-2 px-4 rounded hover:bg-[#88b267]"
      >
        Simpan
      </button>
    </form>
  );
};

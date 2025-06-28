import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useTokoStore from "../../../../store/tokoStore";
export const Formedit = ({ toko, onClose }) => {
  const { updateToko } = useTokoStore();

  const [form, setForm] = useState({
    nama_toko: "",
    nama_pemilik: "",
    no_telp: "",
    alamat_toko: "",
    alamat_pemilik: "",
    toko_logo: "",
  });

  useEffect(() => {
    if (toko) {
      setForm({
        nama_toko: toko.nama_toko,
        nama_pemilik: toko.nama_pemilik,
        no_telp: toko.no_telp,
        alamat_toko: toko.alamat_toko,
        alamat_pemilik: toko.alamat_pemilik,
        toko_logo: "",
      });
    }
  }, [toko]);

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
      if (form[key]) formData.append(key, form[key]);
    }
    try {
      await updateToko(toko.toko_id, formData);
      alert("Toko berhasil diperbarui");
      onClose?.();
    } catch (err) {
      alert("Gagal memperbarui toko:" + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg"
    >
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
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
      >
        Update
      </button>
    </form>
  );
};

import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useTokoStore from "../../../../store/tokoStore";
export const Formedit = ({ toko, onClose }) => {
  const { updateToko } = useTokoStore();

  const { form, setForm } = useState({
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

  return <div>formedit</div>;
};

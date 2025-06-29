import React, { useState } from "react";
import { Input } from "../../../atoms/input";
import useCategoryStore from "../../../../store/categoryStore";
export const Forminput = () => {
  const { addCategory } = useCategoryStore();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addCategory(form); // cukup kirim objek biasa
      alert("Kategori berhasil ditambahkan");

      setForm({
        name: "",
        description: "",
      });
    } catch (err) {
      alert("Gagal menambahakan kategori: " + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg "
    >
      <Input
        name="name"
        placeholder="Nama Kategori"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="description"
        placeholder="Deskripsi"
        value={form.description}
        onChange={handleChange}
        required
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

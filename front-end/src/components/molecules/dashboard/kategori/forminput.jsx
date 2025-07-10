import React, { useState } from "react";
import { Input } from "../../../atoms/input";
import useCategoryStore from "../../../../store/categoryStore";

export const Forminput = ({ onSuccess, onClose }) => {
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
      await addCategory(form);
      alert("Kategori berhasil ditambahkan");

      setForm({
        name: "",
        description: "",
      });
      onSuccess?.();
    } catch (err) {
      alert("Gagal menambahakan kategori: " + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg relative "
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

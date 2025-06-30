import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useCategoryStore from "../../../../store/categoryStore";
export const Formedit = (category, onClose) => {
  const { updateCategory } = useCategoryStore();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (category) {
      setForm({
        name: category.name,
        description: category.description,
      });
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.prevenDefault();
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }
    try {
      await updateCategory(category.category_id, formData);
      alert("kategori berhasil di perbarui");
      onClose?.();
    } catch (err) {
      alert("Gagal memperbarui kategori:" + err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg"
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
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
      >
        Update
      </button>
    </form>
  );
};

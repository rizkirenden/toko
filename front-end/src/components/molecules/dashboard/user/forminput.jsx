import React, { useState } from "react";
import { Input } from "../../../atoms/input";
import useUserStore from "../../../../store/userStore";

export const Forminput = () => {
  const { addUsers } = useUserStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
    nama_toko: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addUsers({
        email: form.email,
        password: form.password,
        role: form.role,
        nama_toko: form.nama_toko,
      });

      alert("User berhasil ditambahkan");

      setForm({
        email: "",
        password: "",
        role: "",
        nama_toko: "",
      });
    } catch (err) {
      alert("Gagal menambahkan user: " + err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Masukkan email"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <Input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Masukkan password"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Pilih Role</option>
          <option value="admin">Admin</option>
          <option value="pemilik">Pemilik</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nama Toko
        </label>
        <Input
          name="nama_toko"
          type="text"
          value={form.nama_toko}
          onChange={handleChange}
          placeholder="Masukkan nama toko"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Tambah User
      </button>
    </form>
  );
};

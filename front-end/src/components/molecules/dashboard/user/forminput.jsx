import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useUserStore from "../../../../store/userStore";
import useTokoStore from "../../../../store/tokoStore";

export const Forminput = ({ onSuccess, onClose }) => {
  const { addUsers } = useUserStore();
  const { allTokos, fetchAllTokos } = useTokoStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
    toko_id: "",
  });

  useEffect(() => {
    fetchAllTokos();
  }, []);

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
        toko_id: form.toko_id,
      });

      alert("User berhasil ditambahkan");

      setForm({
        email: "",
        password: "",
        role: "",
        toko_id: "",
      });
      onSuccess?.();
    } catch (err) {
      alert("Gagal menambahkan user: " + err);
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
        <label className="block text-sm font-medium text-gray-700">Toko</label>
        <select
          name="toko_id"
          value={form.toko_id}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Pilih Toko</option>
          {allTokos.map((toko) => (
            <option key={toko.toko_id} value={toko.toko_id}>
              {toko.nama_toko}
            </option>
          ))}
        </select>
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

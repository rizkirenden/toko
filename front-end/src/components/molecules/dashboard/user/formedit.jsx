import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useUserStore from "../../../../store/userStore";
import useTokoStore from "../../../../store/tokoStore";

export const Formedit = ({ user, onClose }) => {
  const { updateUsers } = useUserStore();
  const { allTokos } = useTokoStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
    toko_id: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        email: user.email,
        password: user.password,
        role: user.role,
        toko_id: user.toko_id,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }
    try {
      await updateUsers(user.user_id, formData);
      alert("User berhasil di perbarui");
      onClose?.();
    } catch (err) {
      alert("Gagal memperbarui user:" + err);
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
      <Input
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full"
      />
      <Input
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full"
      />
      <div>
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
        Edit User
      </button>
    </form>
  );
};

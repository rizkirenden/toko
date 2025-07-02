import React, { useEffect, useState } from "react";
import { Input } from "../../../atoms/input";
import useUserStore from "../../../../store/userStore";
import useTokoStore from "../../../../store/tokoStore";

export const Formedit = ({ user, onClose }) => {
  const { updateUsers } = useUserStore();

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
      className="space-y-4 bg-white p-6 rounded shadow max-w-lg"
    >
      <Input />
    </form>
  );
};

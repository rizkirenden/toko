import React, { useState } from "react";
import { Content } from "../../molecules/login/content";
import { Loginbtn } from "../../molecules/login/login-btn";
import { Logininput } from "../../molecules/login/login-input";
import Authstore from "../../../store/authStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ benar

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setAuth } = Authstore();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", form);
      const { token, user: userData, toko } = res.data; // Renamed to userData to avoid conflict

      const decoded = jwtDecode(token);

      setAuth(
        token,
        {
          user_id: decoded.user_id,
          email: decoded.email,
          username: decoded.username,
          role: decoded.role,
        },
        toko
          ? {
              toko_id: toko.toko_id,
              nama_toko: toko.nama_toko,
              no_telp: toko.no_telp,
            }
          : null,
        decoded.role
      );

      // Redirect based on role
      if (decoded.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login gagal");
    }
  };
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="w-full max-w-md p-8 ">
        <div className="mb-6 text-center">
          <Content />
        </div>
        <div className="space-y-4">
          <Logininput
            email={form.email}
            password={form.password}
            onChange={handleChange}
          />
          <Loginbtn onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;

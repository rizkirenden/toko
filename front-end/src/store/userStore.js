import axios from "axios";
import { create } from "zustand";
const useUserStore = create((set) => ({
  users: [],
  total: 1,
  loading: false,
  error: null,

  fetchUsers: async ({ page = 1, limit = 5, search = "" } = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams({ page, limit, search });

      const response = await axios.get(
        `http://localhost:3000/api/users?${params.toString()}`
      );
      set({ users: response.data.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },
  addUsers: async ({ email, password, role, toko_id }) => {
    try {
      console.log("Data yang dikirim:", { email, password, role, toko_id });

      const response = await axios.post(
        "http://localhost:3000/api/register",
        {
          email,
          role,
          password,
          toko_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },

  updateUsers: async (user_id, formData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/users/${user_id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },

  deleteUsers: async (user_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/${user_id}`
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },
}));

export default useUserStore;

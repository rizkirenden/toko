import axios from "axios";
import { create } from "zustand";

const useTokoStore = create((set) => ({
  tokos: [],
  allTokos: [],
  total: 1,
  loading: false,
  error: null,

  fetchTokos: async ({ page = 1, limit = 5, search = "" } = {}) => {
    set({ loading: true, error: null });

    try {
      const params = new URLSearchParams({ page, limit, search });
      const response = await axios.get(
        `http://localhost:3000/api/tokos?${params.toString()}`
      );
      set({ tokos: response.data.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  fetchAllTokos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:3000/api/tokos/all");
      set({ allTokos: response.data.data, loading: false });
    } catch (err) {
      set({ error: err.response?.data?.error || err.message, loading: false });
    }
  },

  addToko: async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/tokos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },

  updateToko: async (toko_id, formData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/tokos/${toko_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },

  deleteToko: async (toko_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/tokos/${toko_id}`
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },
}));

export default useTokoStore;

import axios from "axios";
import { create } from "zustand";
import Authstore from "./authStore";

const useProdukStore = create((set) => ({
  produks: [],
  produksData: [],
  total: 1,
  loading: false,
  error: null,

  fetchProduks: async (filter = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams();
      if (filter.kategori) params.append("kategori", filter.kategori);
      if (filter.toko) params.append("toko", filter.toko);
      if (filter.name) params.append("name", filter.name);
      if (filter.search) params.append("search", filter.search);

      const response = await axios.get(
        `http://localhost:3000/api/products?${params.toString()}`
      );

      set({ produks: response.data.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },

  fetchProduksData: async ({ page = 1, limit = 5, search = "" } = {}) => {
    set({ loading: true, error: null });
    try {
      const auth = Authstore.getState();

      if (!auth.toko?.toko_id) {
        throw new Error("Anda harus login sebagai toko");
      }

      const params = new URLSearchParams({
        page,
        limit,
        search,
        toko: auth.toko.toko_id,
      });

      const response = await axios.get(
        `http://localhost:3000/api/products/data?${params.toString()}`
      );

      set({
        produksData: response.data.data,
        total: response.data.total || 1,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },

  updateProduks: async (product_id, formData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/products/${product_id}`,
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

  deleteProduks: async (product_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/products/${product_id}`
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },
}));

export default useProdukStore;

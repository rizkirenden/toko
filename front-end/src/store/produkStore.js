import axios from "axios";
import { create } from "zustand";

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
      const params = new URLSearchParams({ page, limit, search });
      const response = await axios.get(
        `http://localhost:3000/api/products/data?${params.toString()}`
      );
      set({ produksData: response.data.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useProdukStore;

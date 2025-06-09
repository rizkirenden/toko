import axios from "axios";
import { create } from "zustand";

const useProdukStore = create((set) => {
  const fetchProduks = async (filter = {}) => {
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
  };

  return {
    produks: [],
    loading: false,
    error: null,
    fetchProduks,
  };
});

export default useProdukStore;

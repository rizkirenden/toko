import axios from "axios";
import { create } from "zustand";

const useProdukStore = create((set) => ({
  produks: [],
  loading: false,
  error: null,

  fetchProduks: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:3000/api/products");

      set({ produks: response.data.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },
}));

export default useProdukStore;

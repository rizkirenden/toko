import axios from "axios";
import { create } from "zustand";

const useTokoStore = create((set) => ({
  tokos: [], // penting: inisialisasi sebagai array
  loading: false,
  error: null,

  fetchTokos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:3000/api/tokos");

      set({ tokos: response.data.data, loading: false }); // perbaikan di sini
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },
}));

export default useTokoStore;

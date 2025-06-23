import axios from "axios";
import { create } from "zustand";

const useTokoStore = create((set) => ({
  tokos: [],
  total: 0,
  loading: false,
  error: null,

  fetchTokos: async ({ page = 1, limit = 5, search = "" } = {}) => {
    set({ loading: true, error: null });

    try {
      const params = new URLSearchParams();
      params.append("page", page);
      params.append("limit", limit);
      if (search) params.append("search", search);

      const response = await axios.get(
        `http://localhost:3000/api/tokos?${params.toString()}`
      );

      set({
        tokos: response.data.data,
        total: response.data.total,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },
}));

export default useTokoStore;

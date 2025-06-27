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
}));

export default useUserStore;

import axios from "axios";
import { create } from "zustand";

const useTokoStore = create((set) => ({
  menu: [],
  loading: false,
  error: null,

  fetchMenu: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:3000/api/tokos");

      set({ menus: response.data.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },
}));
export default useTokoStore;

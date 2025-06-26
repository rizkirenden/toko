import axios from "axios";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [],
  categoriesData: [],
  total: 1,
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get("http://localhost:3000/api/categories");
      set({ categories: response.data.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.error || err.message,
        loading: false,
      });
    }
  },

  fetchCategoriesData: async ({ page = 1, limit = 5, search = "" } = {}) => {
    set({ loading: true, error: null });

    try {
      const params = new URLSearchParams({ page, limit, search });
      const response = await axios.get(
        `http://localhost:3000/api/categories/data?${params.toString()}`
      );
      set({ categoriesData: response.data.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useCategoryStore;

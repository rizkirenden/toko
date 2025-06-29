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

  addCategory: async ({ name, description }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/categories",
        { name, description },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },

  updateCategory: async (category_id, formData) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/categories/${category_id}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },

  deleteCategory: async (category_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/categories/${category_id}`
      );
      return response.data;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  },
}));

export default useCategoryStore;

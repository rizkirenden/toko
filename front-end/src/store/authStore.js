import { create } from "zustand";
import { persist } from "zustand/middleware";

const Authstore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      toko: null,
      isAuthenticated: false,

      setAuth: (token, user, toko) =>
        set({
          token,
          user,
          toko,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          token: null,
          user: null,
          toko: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default Authstore;

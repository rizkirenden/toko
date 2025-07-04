import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const Authstore = create(
  persist(
    (set) => ({
      toke: null,
      user: null,
      isAuthenticated: false,

      setAuth: (token, user) =>
        set({
          token,
          user,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default Authstore;

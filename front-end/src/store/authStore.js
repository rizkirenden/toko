import { create } from "zustand";
import { persist } from "zustand/middleware";

const Authstore = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      toko: null,
      isAuthenticated: false,
      role: null,
      originalRole: null, // Add originalRole to track actual role from backend

      setAuth: (token, user, toko, role) => {
        // Normalize role - treat "pemilik" as "toko" for access control
        const normalizedRole = role === "pemilik" ? "toko" : role;

        return set({
          token,
          user: {
            ...user,
            originalRole: role, // Store original role for display purposes
          },
          toko,
          isAuthenticated: true,
          role: normalizedRole, // Use normalized role for permissions
          originalRole: role, // Keep original role reference
        });
      },

      logout: () =>
        set({
          token: null,
          user: null,
          toko: null,
          isAuthenticated: false,
          role: null,
          originalRole: null,
        }),

      // Helper method to check permissions
      hasRole: (requiredRole) => {
        return (state) => {
          const currentRole = state.role;
          // Admin has access to everything
          if (currentRole === "admin") return true;
          // For toko/pemilik checks
          if (requiredRole === "toko") {
            return currentRole === "toko" || currentRole === "pemilik";
          }
          return currentRole === requiredRole;
        };
      },
    }),
    {
      name: "auth-storage",
      // Optional: version your storage to handle future migrations
      version: 1,
      // Optional: migrate function if you need to handle old storage format
      migrate: (persistedState, version) => {
        if (version === 0) {
          // Migration from version 0 to 1
          return {
            ...persistedState,
            originalRole: persistedState.role,
          };
        }
        return persistedState;
      },
    }
  )
);

export default Authstore;

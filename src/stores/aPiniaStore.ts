import { defineStore } from "pinia";
import type { User } from "./interfaces";
import { dummyUsers } from "./storedummydata";

export const useAPiniaStore = defineStore("aPiniaStore", {
  state: () => ({
    users: [...dummyUsers] as User[],
  }),

  actions: {
    // This previously was in the UserDashboardParent
    updateUser(updatedUser: User) {
      const index = this.users.findIndex((u) => u.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = { ...updatedUser };
      }
    },
    removeUser(id: number) {
      this.users = this.users.filter((user) => user.id !== id);
    },
  },
});

// Concept	What It Means
// defineStore	Declares a store. counter is the unique ID.
// state	The reactive data this store holds (like data() in a component).
// actions	Functions that change state — you call them like methods.
// getters	Derived/computed values based on the state — like computed properties.
// useStore()	You import and call this in any component to access and update the store.
// Central Access	All components can read/write to the same data without using props/emits.

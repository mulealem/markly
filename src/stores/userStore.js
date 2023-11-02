import { defineStore } from "pinia";

import { supabase } from "../webClient/supabase";
import router from "../router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
    currentUser: (state) => {
      return state.user;
    },
  },
  actions: {
    githubLogin() {
      supabase.auth.signInWithOAuth({
        provider: "github",
      });
    },
    googleLogin() {
      supabase.auth.signInWithOAuth({
        provider: "google",
      });
    },
    getCurrentUser() {
      return supabase.auth
        .getUser()
        .then((data, error) => {
          this.user = data.data.user;
          return Promise.resolve(this.user);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    logout() {
      supabase.auth.signOut();
    },
  },
});

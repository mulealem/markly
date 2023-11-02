import { defineStore } from "pinia";
import { client } from "../webClient/appwrite";

import { supabase } from "../webClient/supabase";

export const useElementStore = defineStore("element", {
  state: () => ({
    elements: null,
    element: null,
  }),
  getters: {
    currentElement: (state) => {
      return state.element;
    },
  },
  actions: {
    getElements(projectId) {
      return supabase
        .from("elements")
        .select()
        .eq("project_id", projectId)
        .then((data, error) => {
          this.elements = data.data;
          return Promise.resolve(data.data);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(data);
        });
    },
    getElement(id) {
      return supabase
        .from("elements")
        .select()
        .eq("id", id)
        .then((data, error) => {
          this.element = data.data[0];
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(data);
        });
    },
    createElement(element) {
      return supabase
        .from("elements")
        .insert(element)
        .then((data, error) => {
          this.element = data.data[0];
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(data);
        });
    },
    updateElement(element, id) {
      return supabase
        .from("elements")
        .update(element)
        .eq("id", id)
        .select()
        .then((data, error) => {
          this.element = data.data[0];
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(data);
        });
    },
    removeElement(id) {
      return supabase
        .from("elements")
        .delete()
        .eq("id", id)
        .then((data, error) => {
          this.element = data.data[0];
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(data);
        });
    },
  },
});

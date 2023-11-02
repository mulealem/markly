import { defineStore } from "pinia";
import { useElementStore } from "./elementStore";

import { supabase } from "../webClient/supabase";

export const useProjectStore = defineStore("project", {
  state: () => ({
    projects: null,
    project: null,
  }),
  getters: {
    currentProject: (state) => {
      return state.project;
    },
  },
  actions: {
    getProjects(ownerId) {
      return supabase
        .from("projects")
        .select()
        .eq("owner_id", ownerId)
        .then((data, error) => {
          console.log(data.data);
          this.projects = data.data;
          this.projects.forEach((project) => {
            if (project.image_id) {
              this.getFile(project.image_id)
                .then((imageUrl) => {
                  project.imageUrl = imageUrl;
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          });
          return Promise.resolve(data.data);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(data);
        });
    },
    getProject(id) {
      return supabase
        .from("projects")
        .select()
        .eq("id", id)
        .then((data, error) => {
          let response = data.data[0];
          console.log(response);
          this.project = response;
          if (response.image_id) {
            const imageUrl = this.getFile(response.image_id);
            return this.getFile(response.image_id)
              .then((imageUrl) => {
                response.imageUrl = imageUrl;
                return response;
              })
              .catch((error) => {
                console.log(error);
                return Promise.reject(error);
              });
          }

          return Promise.resolve(response);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    getProjectWithElements(projectId) {
      return this.getProject(projectId)
        .then((project) => {
          const elementStore = useElementStore();
          return elementStore
            .getElements(projectId)
            .then((response) => {
              const projectWithElements = {
                ...project,
                elements: response,
              };
              return Promise.resolve(projectWithElements);
            })
            .catch((error) => {
              console.log(error);
              return Promise.reject(error);
            });
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    publishProject(projectId) {
      return supabase
        .from("projects")
        .update({ is_published: true })
        .eq("id", projectId)
        .select()
        .then((data, error) => {
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    createProject(project) {
      return supabase
        .from("projects")
        .insert(project)
        .select()
        .then((data, error) => {
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    },
    updateProject(project, id) {
      return supabase
        .from("projects")
        .update(project)
        .eq("id", id)
        .select()
        .then((data, error) => {
          let response = data.data[0];
          if (response.image_id) {
            const imageUrl = this.getFile(response.image_id);
            return this.getFile(response.image_id)
              .then((imageUrl) => {
                response.imageUrl = imageUrl;
                return response;
              })
              .catch((error) => {
                console.log(error);
                return Promise.reject(error);
              });
          }
          return Promise.resolve(data.data[0]);
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    uploadProjectImage(file, projectId) {
      const fileExt = file.name.split(".").pop();
      const filePath = `${Math.random()}.${fileExt}`;
      return supabase.storage
        .from("images")
        .upload(filePath, file)
        .then((uploadResponse) => {
          return this.updateProject({ image_id: filePath }, projectId)
            .then((response) => {
              return Promise.resolve(response);
            })
            .catch((error) => {
              console.log(error);
              return Promise.reject(error);
            });
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    getFile(path) {
      return supabase.storage
        .from("images")
        .download(path)
        .then((response) => {
          return Promise.resolve(URL.createObjectURL(response.data));
        })
        .catch((error) => {
          console.log(error);
          return Promise.reject(error);
        });
    },
    setProjectFavorite(projectId, isFavourite) {
      this.projects.forEach((project) => {
        if (project.id === projectId) {
          project.is_favourite = isFavourite;
        }
      });
    },
  },
});

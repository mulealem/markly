<template>
  <div class="w-full h-screen bg-red-400 flex flex-col overflow-hidden">
    <div class="w-full h-12 bg-[#2C2C2C] border-b flex flex-row">
      <div class="w-64 flex-none flex flex-row items-center p-3 fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          class="w-7 h-7"
          viewBox="0 0 128.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M503 1196 c-70 -17 -167 -66 -223 -113 -220 -182 -275 -498 -128 -740 92 -152 262 -257 434 -270 64 -5 73 -4 82 14 19 34 -10 63 -63 63 -62 0 -162 34 -231 78 -142 92 -224 242 -224 412 0 136 47 249 144 346 97 97 210 144 346 144 136 0 249 -47 346 -144 87 -87 144 -210 144 -312 0 -52 29 -80 63 -62 18 9 19 18 14 82 -17 230 -192 439 -417 498 -77 20 -213 22 -287 4z"
            />
            <path
              d="M562 934 c-111 -30 -190 -112 -219 -229 -15 -60 -15 -70 0 -130 20 -79 63 -144 120 -183 56 -38 75 -44 98 -32 30 17 23 47 -18 74 -78 52 -108 91 -124 165 -32 152 110 294 262 262 74 -16 113 -46 165 -123 27 -42 57 -49 74 -19 12 23 6 42 -32 98 -37 55 -102 99 -174 118 -70 18 -83 18 -152 -1z"
            />
            <path
              d="M660 620 c-11 -11 -20 -26 -20 -32 0 -26 143 -444 158 -460 18 -21 65 -24 79 -6 6 7 23 51 38 97 15 46 35 91 44 100 9 9 54 29 101 45 47 16 91 33 98 39 18 14 15 61 -5 79 -17 15 -435 158 -461 158 -6 0 -21 -9 -32 -20z"
            />
          </g>
        </svg>
        <div class="text-sm pl-3 text-neutral-200 font-ligh" v-if="currentUser">
          <div>{{ currentUser.name }}</div>
          <div class="text-xs text-neutral-300">{{ currentUser.email }}</div>
        </div>
      </div>
      <div
        class="w-full border-l-[1px] border-neutral-700 flex justify-between items-center px-3"
      >
        <div class="w-full">
          <!-- <form>
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="w-full max-w-xs relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                class="w-full p-2 pl-10 text-sm text-white rounded bg-[#383838] focus:border-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form> -->
        </div>
        <div class="h-full flex items-center">
          <user-avatar />
        </div>
      </div>
    </div>
    <div class="h-full w-full bg-green-400 flex flex-row overflow-hidden">
      <div class="w-64 flex-none bg-white">
        <div class="w-full border-b-[1px] border-neutral-200 py-2 select-none">
          <div
            class="flex items-center px-5 py-2 font-light hover:bg-neutral-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-xs px-2">Recents</span>
          </div>
          <div
            class="flex items-center px-5 py-2 font-light hover:bg-neutral-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <span class="text-xs px-2">Drafts</span>
          </div>
        </div>
        <div class="w-full border-b-[1px] border-neutral-200 py-2 select-none">
          <div class="text-xs font-bold px-5 pb-2">Favorites</div>
          <div
            class="text-xs text-neutral-500 px-5"
            v-if="favoutiteProjects.length == 0"
          >
            Hover over any file and click the star to mark it add it here.
          </div>
          <div v-else class="w-full text-xs px-0">
            <div
              v-for="(project, index) in favoutiteProjects"
              class="w-full hover:bg-neutral-200 cursor-pointer relative py-[6px] group"
            >
              <router-link :to="'/project/' + project.id" class="w-full px-5">{{
                project.name
              }}</router-link>
              <div
                class="absolute right-0 top-0 h-full hidden items-center group-hover:flex"
              >
                <div
                  @click="updateProjectFavorite(project)"
                  class="w-full h-full text-neutral-100 rounded p-1 cursor-pointer px-2 py-[6px]"
                >
                  <svg
                    v-if="!project.is_favourite"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    class="w-4 h-4"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873L12 2Z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    class="w-4 h-3 text-yellow-500"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8l-2.869-6.22Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full bg-white border-l-[1px] border-neutral-200 flex flex-col"
      >
        <div
          class="w-full px-3 py-2 border-b-[1px] border-neutral-200 flex items-center justify-between"
        >
          <span class="text-sm">Recents</span>
          <button
            @click="createNew"
            class="text-sm bg-blue-500 px-3 text-white py-1 rounded-full flex items-center"
          >
            <svg
              v-if="isCreating"
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span class="px-1" v-if="isCreating">Creating</span>
            <span class="px-1" v-else>Create</span>
          </button>
        </div>
        <div
          v-if="projects"
          class="h-full bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:grid-cols-4 p-8 overflow-y-auto"
        >
          <div
            class="w-full h-64 group bg-white border-[1px] border-neutral-200 rounded-lg select-none relative"
            v-for="project in projects"
            :key="project.id"
          >
            <router-link class="w-full h-full" :to="'/project/' + project.id">
              <div class="w-full h-3/4 bg-gray-100 rounded-t-lg">
                <img
                  v-if="project.image_id"
                  class="w-full h-full object-cover rounded-t-lg"
                  :src="project.imageUrl"
                />
                <div v-else></div>
              </div>
              <div
                class="w-full h-1/4 bg-white border-t-[1px] border-neutral-200 rounded-b-lg flex flex-row items-center p-2"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#AFBBF2"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                    />
                  </svg>
                </div>
                <div class="px-2">
                  <div class="text-sm">{{ project.name }}</div>
                  <div class="text-xs">
                    Updated At: {{ formatDate(project.created_at) }}
                  </div>
                </div>
              </div>
            </router-link>
            <div
              @click="updateProjectFavorite(project)"
              :class="{ '!flex': project.is_favourite }"
              class="absolute right-0 top-0 p-2 hidden group-hover:flex"
            >
              <div
                class="w-full h-full bg-neutral-700 text-neutral-100 rounded p-1 cursor-pointer"
              >
                <svg
                  v-if="!project.is_favourite"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  class="w-4 h-4"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873L12 2Z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  class="w-4 h-4 text-yellow-500"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12.908 1.581a1 1 0 0 0-1.816 0l-2.87 6.22l-6.801.807a1 1 0 0 0-.562 1.727l5.03 4.65l-1.335 6.72a1 1 0 0 0 1.469 1.067L12 19.426l5.977 3.346a1 1 0 0 0 1.47-1.068l-1.335-6.718l5.029-4.651a1 1 0 0 0-.562-1.727L15.777 7.8l-2.869-6.22Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "../stores/userStore";
import { useProjectStore } from "../stores/projectStore";
import UserAvatar from "../components/UserAvatar.vue";
export default {
  components: { UserAvatar },
  name: "Projects",
  computed: {
    ...mapState(useUserStore, ["currentUser"]),
  },
  created() {
    this.$Progress.start();
    console.log("this.currentUser: ", this.currentUser);
    this.getCurrentUser().then(() => {
      this.getProjects(this.currentUser.id)
        .then(() => {
          this.$Progress.finish();
        })
        .catch(() => {
          this.$Progress.fail();
        });
    });
  },
  data() {
    return {
      // showSidebar: false,
      isCreating: false,
    };
  },
  computed: {
    ...mapState(useProjectStore, ["projects"]),
    ...mapState(useUserStore, ["currentUser"]),
    favoutiteProjects() {
      return this.projects
        ? this.projects.filter((project) => project.is_favourite)
        : [];
    },
  },
  methods: {
    ...mapActions(useProjectStore, [
      "createProject",
      "getProjects",
      "updateProject",
      "setProjectFavorite",
    ]),
    ...mapActions(useUserStore, ["getCurrentUser"]),
    createNew() {
      this.isCreating = true;
      console.log("create new", this.currentUser.id);
      this.createProject({
        name: "Untitled",
        owner_id: this.currentUser.id,
      })
        .then((res) => {
          this.isCreating = false;
          this.$router.push("/project/" + res.id);
        })
        .catch((err) => {
          console.log(err);
          this.isCreating = false;
        });
    },
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    updateProjectFavorite(project) {
      this.updateProject(
        {
          is_favourite: !project.is_favourite,
        },
        project.id
      ).then(() => {
        this.setProjectFavorite(project.id, !project.is_favourite);
      });
    },
  },
};
</script>

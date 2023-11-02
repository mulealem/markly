<template>
  <div class="h-screen w-full relative overflow-hidden">
    <div
      v-if="!isLoading"
      class="h-full w-full bg-blue-400 flex flex-col overflow-hidden relative"
    >
      <div
        class="w-full h-12 bg-[#2C2C2C] border-b-[1px] border-b-neutral-500 flex flex-row justify-between"
      >
        <div class="w-64 flex-none flex flex-row items-center p-3 fill-white">
          <div class="flex items-center">
            <router-link to="/projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                class="w-7 h-7 fill-white"
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
            </router-link>
            <div class="inline-flex rounded-md shadow-sm ml-5">
              <button
                href="#"
                v-for="(elementType, index) in elementTypes"
                :key="index"
                @click="selectElementType(elementType)"
                aria-current="page"
                :class="{
                  '!bg-blue-500 !border-blue-500': elementType.selected,
                }"
                class="px-4 py-1 text-sm font-medium first:border first:border-r-0 last:border border-y border-l first:rounded-l-lg last:rounded-r-md focus:z-10 focus:ring-0 bg-neutral-700 border-neutral-600 text-white hover:text-white hover:bg-neutral-600 focus:ring-blue-500 focus:text-white"
              >
                {{ elementType.name }}
              </button>
              <!-- <button
                href="#"
                class="px-4 py-1 text-sm font-medium border-t border-b focus:z-10 focus:ring-0 bg-neutral-700 border-neutral-600 text-white hover:text-white hover:bg-neutral-600 focus:ring-blue-500 focus:text-white"
              >
                Tag
              </button>
              <button
                href="#"
                class="px-4 py-1 text-sm font-medium border rounded-r-md focus:z-10 focus:ring-0 bg-neutral-700 border-neutral-600 text-white hover:text-white hover:bg-neutral-600 focus:ring-blue-500 focus:text-white"
              >
                Image
              </button> -->
            </div>
          </div>
        </div>
        <div class="w-auto h-full flex items-center gap-1 text-sm">
          <span class="text-neutral-400" v-if="!isProjectNameFocused"
            >Drafts /
          </span>
          <input
            class="w-auto text-white focus:ring-0 focus:border-0 focus:outline-none bg-transparent"
            @focus="isProjectNameFocused = true"
            @blur="isProjectNameFocused = false"
            @change="updateProjectName"
            v-model="projectName"
          />
        </div>
        <div class="h-full flex items-center px-2 gap-3">
          <!-- <user-avatar /> -->
          <!-- {{ currentUser }} -->
          <avatar-stack v-if="currentUser" :members="members" />
          <DialogRoot>
            <DialogTrigger>
              <!-- @click="publish" -->
              <button
                type="button"
                :disabled="isPublishing"
                class="w-20 px-3 py-1 text-sm font-medium flex justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span v-if="isPublishing">
                  <svg
                    class="animate-spin h-4 w-4 text-neutral-100"
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
                </span>
                <!-- <span v-else>Publish</span> -->
                <span v-else>Share</span>
              </button>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay
                class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
              />
              <DialogContent
                class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
              >
                <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
                  Collaborators
                </DialogTitle>
                <DialogDescription
                  class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal"
                >
                  Invite people to collaborate on this project.
                </DialogDescription>

                <fieldset class="mb-[15px] flex items-center gap-5">
                  <label
                    class="text-grass11 w-[90px] text-right text-[15px]"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    v-model="newCollaborator"
                    type="text"
                    id="email"
                    class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                  />
                </fieldset>
                <div class="mt-[25px] flex justify-end">
                  <DialogClose as-child>
                    <button
                      @click="updateProjectCollaborators"
                      class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                    >
                      Save changes
                    </button>
                  </DialogClose>
                </div>
                <DialogClose
                  class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <!-- <Icon icon="lucide:x" /> -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81Z"
                    />
                  </svg>
                </DialogClose>
              </DialogContent>
            </DialogPortal>
          </DialogRoot>

          <button
            @click="showPreview = true"
            type="button"
            class="flex items-center gap-1 p-2 text-sm font-medium text-center text-blue-100 rounded-lg hover:bg-neutral-800 focus:ring-0 focus:outline-none focus:ring-neutral-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>

            <!-- Preview -->
          </button>
        </div>
      </div>
      <div class="h-full flex flex-row bg-neutral-50 overflow-hidden relative">
        <div class="w-full absolute flex justify-center top-1">
          <div
            v-if="isSyncing"
            class="bg-neutral-700 flex items-center p-1 px-2 rounded-full text-white"
          >
            <svg
              class="animate-spin h-4 w-4 text-neutral-100"
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
            <span class="px-2 text-sm">Saving</span>
          </div>
        </div>

        <div class="w-60 flex-none border-r border-neutral-200">
          <div class="text-sm px-2 pt-3" v-if="imageUrl">Image</div>

          <div class="p-3" v-if="imageUrl">
            <div
              class="h-16 w-full bg-neutral-200 flex flex-row items-center px-2 rounded-lg"
            >
              <div class="h-12 w-16 bg-neutral-300 rounded-lg">
                <img :src="imageUrl" alt="project name" />
              </div>
              <div class="px-2 text-xs bg-geen-400">
                <div>Project Image</div>
                <div class="pt-1">
                  <label for="change-image">
                    <div
                      class="text-blue-500 cursor-pointer hover:text-blue-700"
                    >
                      Change
                    </div>
                    <input
                      id="change-image"
                      type="file"
                      class="hidden"
                      @change="handleFileUpload"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="text-sm px-2 pt-3">Elements</div>
          <div class="py-2">
            <draggable
              v-model="elements"
              group="elements"
              @start="drag = true"
              item-key="id"
              @end="drag = false"
            >
              <template #item="{ element }">
                <div class="relative group">
                  <div
                    @mouseover="element.hover = true"
                    @mouseleave="element.hover = false"
                    @click="selectElement(elements.indexOf(element))"
                    :class="{
                      'border-[1px] border-blue-200 bg-blue-200 ':
                        element.selected,
                    }"
                    class="flex flex-row items-center gap-2 text-sm border-[1px] border-transparent group-hover:bg-neutral-200 px-3 py-2 select-none cursor-pointer"
                  >
                    <div
                      class="h-5 w-5 rounded-lg bg-blue-100 group-hover:bg-blue-500 group-hover:text-white text-xs flex justify-center items-center border-[1px] border-blue-300"
                    >
                      {{ element.type[0] }}
                    </div>
                    <!-- {{ element }} -->
                    <div>{{ element.name }}</div>
                  </div>
                  <div
                    @click="deleteElement(elements.indexOf(element))"
                    class="top-0 right-0 absolute hidden group-hover:flex h-full bg-gradient-to-l from-neutral-300 items-center px-3 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div></div></template
            ></draggable>
          </div>
        </div>
        <div class="w-full h-full cursor-custom overflow-auto select-none">
          <div
            class="h-full min-w-[700px] flex flex-col items-center justify-center"
            v-if="!isImageUploading"
          >
            <div
              class="flex items-center justify-center w-full h-full px-6"
              v-if="imageUrl == null || imageUrl == ''"
            >
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  @change="handleFileUpload"
                />
              </label>
            </div>
            <VueZoomable
              class="h-full flex flex-col items-center justify-center"
              v-else
              selector="#myContent"
              :panEnabled="panEnabled"
              :zoomEnabled="zoomEnabled"
              :minZoom="0.5"
              :maxZoom="3"
              :zoom="zoom"
              :enableControllButton="enableControllButton"
            >
              <div
                id="myContent"
                class="relative bg-yellow-300 border-[1px] border-neutral-400 shadow-lg"
                :class="{ 'cursor-custom_add': selectedElementType != null }"
                ref="imageContainer"
              >
                <img
                  draggable="false"
                  class="w-full h-full object-cover object-center bg-white"
                  :src="imageUrl"
                  ref="image"
                  @click="addDiv($event)"
                />
                <div
                  v-for="(element, index) in elementsPositions"
                  :key="index"
                  class="absolute border-[1px] border-transparent p-0"
                  :class="getPositionalClass(element.left, element.top)"
                  :style="{ top: element.top + '%', left: element.left + '%' }"
                  :ref="element.id"
                >
                  <!-- <div class="absolute" v-if="element.selected">
                <div class="-mt-14 -ml-3 bg-red-400 w-24 h-8">
                  {{ getElementSize(element.id) }}
                </div>
              </div> -->
                  <!-- <Popper> -->
                  <div
                    @mousedown="startDrag($event, element, index)"
                    @mouseup="endDrag($event, index)"
                    @click="selectElement(index)"
                  >
                    <tag :style="element.style" v-if="element.type == 'Tag'" />
                    <div
                      class="relative flex"
                      v-else-if="element.type == 'Text'"
                      :style="{
                        'margin-top': getElementSize(element.id).height / 2,
                        'margin-left': getElementSize(element.id).width / 2,
                      }"
                    >
                      <div class="w-full max-w-xl h-8">
                        {{ element.style.text }}
                      </div>
                    </div>
                    <div
                      :style="{
                        'margin-top': getElementSize(element.id).height / 2,
                        'margin-left': getElementSize(element.id).width / 2,
                      }"
                      class="relative flex"
                      v-else-if="element.type == 'Image'"
                    >
                      Image Here
                    </div>
                    <div
                      class="relative flex"
                      v-else-if="element.type == 'Button'"
                      :style="{
                        'margin-top': '-48px',
                        'margin-left': getElementSize(element.id).width / 2,
                      }"
                    >
                      <button-element :style="element.style" />
                      <!-- <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {{ element.name }}
                  </button> -->
                    </div>
                    <icon-element
                      :style="element.style"
                      v-if="element.type == 'Icon'"
                    />
                  </div>
                  <!-- <template #content>
                  <div class="w-32 h-32 bg-yellow-400 shadow-2xl">
                    This is the Popper content!@#
                  </div>
                </template>
              </Popper> -->
                  <!-- <div class="animate-ping">
              <div class="h-8 w-8 -m-4 rounded-3xl bg-yellow-500 border-2"></div>
            </div> -->
                </div>
              </div>
            </VueZoomable>
          </div>
          <div
            class="w-full h-full flex flex-col items-center justify-center"
            v-else
          >
            <!-- loading -->
            <svg
              v-if="isImageUploading"
              class="animate-spin h-10 w-10 text-blue-500"
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
          </div>
        </div>
        <div class="w-60 flex-none border-l border-neutral-200">
          <edit-element
            v-if="selectedElement"
            :updateElementStyle="updateElementStyle"
            :updateElementInteractivity="updateElementInteractivity"
            :element="selectedElement"
          />
        </div>
      </div>
      <!-- <icon-selector /> -->
      <!-- <Sketch v-model="colors" /> -->
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <div class="flex flex-col justify-center items-center gap-5">
        <svg
          class="animate-spin h-8 w-8 text-blue-500"
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
        <div>Please be patient while we load your project</div>
      </div>
    </div>
    <preview v-if="showPreview" :close="closePreview" :projectId="projectId" />
    <div
      class="absolute"
      :style="{
        left: cursor.position.x + 'px',
        top: cursor.position.y + 'px',
      }"
      v-for="(cursor, index) in cursors"
      :key="index"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        class="-m-[2px] text-blue-500"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M6.636 2.287A1 1 0 0 0 5 3.059v13.998c0 .927 1.15 1.355 1.756.655l3.524-4.073a1.5 1.5 0 0 1 1.134-.518h5.592c.938 0 1.36-1.176.636-1.772L6.636 2.287Z"
        />
      </svg>
      <div class="ml-3 px-3 py-1 text-xs bg-blue-500 text-white rounded-lg">
        {{ cursor.username }}
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import EditElement from "../components/EditElement.vue";
import IconSelector from "../components/IconSelector.vue";
import { useProjectStore } from "../stores/projectStore";
import { mapState, mapActions } from "pinia";
import { useElementStore } from "../stores/elementStore";
import Preview from "../components/Preview.vue";
import Tag from "../components/elements/Tag.vue";
import ButtonElement from "../components/elements/ButtonElement.vue";
import IconElement from "../components/elements/IconElement.vue";
import UserAvatar from "../components/UserAvatar.vue";
import AvatarStack from "../components/AvatarStack.vue";

import VueResizable from "vue-resizable";
// import panZoom from "vue-panzoom";

import VueZoomable from "vue-zoomable";
import "vue-zoomable/dist/style.css";
import { useUserStore } from "../stores/userStore";

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";

import { spaces, realtime } from "../webClient/ably";

export default {
  name: "project",
  components: {
    draggable,
    EditElement,
    IconSelector,
    Preview,
    Tag,
    ButtonElement,
    IconElement,
    UserAvatar,
    VueResizable,
    VueZoomable,
    // panZoom,
    AvatarStack,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  },
  async created() {
    this.initializeCounters([]);
    this.$Progress.start();
    // console.log("getProject by id: ", this.$route.params.projectId);
    this.isLoading = true;
    this.getCurrentUser().then(async () => {
      let username = this.currentUser.user_metadata.user_name;
      let avatar = this.currentUser.user_metadata.avatar_url;
      let id = this.currentUser.id;

      spaces
        .get(this.$route.params.projectId)
        .then((space) => {
          this.space = space;
          space
            .enter({
              id: id,
              username: username,
              avatar: avatar,
            })
            .then(() => {
              // "update",
              space.subscribe((spaceState) => {
                // console.log("spaceState.members>>>>>>>>>", spaceState.members);
                this.members = spaceState.members;
              });

              space.cursors.subscribe("update", async (cursorUpdate) => {
                // Use getAll() and filter by the member that moved their cursor to only update the position of that member's cursor
                space.members
                  .getAll()
                  .then((members) => {
                    // console.log("members", members);
                    // const members = await space.members.getAll();
                    // members = members.filter((member) => member.id !== id);
                    const member = members.find(
                      (member) =>
                        member.connectionId === cursorUpdate.connectionId
                    );
                    // console.log("member", member, cursorUpdate);
                    this.renderCursor(cursorUpdate, member);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });

              space.locks.subscribe("update", (lock) => {
                console.log(lock);
              });
            });

          window.addEventListener("mousemove", ({ clientX, clientY }) => {
            // console.log("mousemove", clientX, clientY, space.cursors);
            if (this.$refs.image) {
              const imageRect = this.$refs.image.getBoundingClientRect();

              // console log the left, top, width, height of the image

              const left = imageRect.left;
              const top = imageRect.top;
              const right = imageRect.right;
              const bottom = imageRect.bottom;

              // console.log(
              //   "imageRect position: ",
              //   left,
              //   top,
              //   right,
              //   bottom,
              //   imageRect
              // );

              // console log if clientX and clientY is within the imageRect

              if (
                clientX >= left &&
                clientX <= right &&
                clientY >= top &&
                clientY <= bottom
              ) {
                // console.log("inside imageRect");

                // relative position of the cursor within the imageRect by percentage

                const relativeX = ((clientX - left) / (right - left)) * 100;
                const relativeY = ((clientY - top) / (bottom - top)) * 100;

                // given relative x and y, update the cursor position

                // let clientX = left + (relativeX / 100) * (right - left);
                // let clientY = top + (relativeY / 100) * (bottom - top);

                space.cursors.set({
                  position: { x: relativeX, y: relativeY },
                  data: { color: "red" },
                });
              }
            }

            // else {
            //   console.log("outside imageRect");
            // }
          });
        })
        .catch((err) => {
          console.log("err", err);
        });

      const channel = realtime.channels.get(this.$route.params.projectId);

      await channel.subscribe("elements", (message) => {
        // console.log("message", message);
        this.ablySync(message.data.id, message.data.elements);
      });

      this.getProject(this.$route.params.projectId)
        .then(() => {
          this.projectName = this.currentProject.name;
          this.imageUrl = this.currentProject.imageUrl;
          (this.collaborators = this.currentProject.collaborators
            ? JSON.parse(this.currentProject.collaborators)
            : []),
            this.getElements(this.$route.params.projectId)
              .then((res) => {
                this.elements = res.map((element) => {
                  return {
                    id: element.id,
                    top: element.top,
                    left: element.left,
                    type: element.type,
                    name: element.name,
                    style: JSON.parse(element.style),
                    interactivity_type:
                      element.interactivity_type != null
                        ? element.interactivity_type
                        : null,
                    interactivity_content:
                      element.interactivity_content != null
                        ? JSON.parse(element.interactivity_content)
                        : null,
                    dragging: false,
                    selected: false,
                    hover: false,
                    synced: true,
                    lastUpdated: new Date().getTime(),
                  };
                });
                this.lastElements = JSON.parse(JSON.stringify(this.elements));
                this.$Progress.finish();
                this.isLoading = false;
              })
              .catch((err) => {
                this.$Progress.fail();
                console.log(err);
              });
        })
        .catch((err) => {
          this.$Progress.fail();
          this.isLoading = false;
          console.log(err);
        });
    });
  },
  mounted() {
    // const cursor = document.createElement("div");
    // cursor.id = "hfgtyhgj";
    // cursor.style.position = "absolute";
    // cursor.style.left = 500 + "px";
    // cursor.style.top = 400 + "px";
    // cursor.style.width = "40px";
    // cursor.style.height = "40px";
    // cursor.style.borderRadius = "50%";
    // cursor.style.backgroundColor = "blue";
    // cursor.style.display = "block";
    // document.body.appendChild(cursor);
  },

  data() {
    return {
      isLoading: false,
      members: [],
      isProjectNameFocused: false,
      projectName: "",
      imageUrl: "",
      collaborators: [],
      newCollaborator: "",
      hasUploadedImage: false,
      drag: false,
      elements: [],
      lastElements: [],
      elementTypes: [
        {
          name: "Button",
          icon: "",
          selected: false,
        },
        {
          name: "Icon",
          icon: "",
          selected: false,
        },
        {
          name: "Tag",
          icon: "",
          selected: false,
        },
        {
          name: "Text",
          icon: "",
          selected: false,
        },
      ],
      elementCounters: {
        Button: 0,
        Image: 0,
        Tag: 0,
        Text: 0,
        Icon: 0,
      },
      isImageUploading: false,
      isSyncing: false,
      selectedElement: null,
      updatingElementStyles: [],
      updatingElementInteractivity: [],
      showPreview: false,
      isPublishing: false,
      panEnabled: true,
      zoomEnabled: true,
      zoom: 1,
      pan: { x: 0, y: 0 },
      enableControllButton: false,
      cursors: [],
      sizeOptions: [
        {
          name: "small",
          value: "Small",
        },
        {
          name: "medium",
          value: "Medium",
        },
        {
          name: "large",
          value: "Large",
        },
      ],
      space: null,
    };
  },
  computed: {
    ...mapState(useProjectStore, ["currentProject"]),
    ...mapState(useUserStore, ["currentUser"]),
    selectedElementType() {
      return this.elementTypes.find((element) => element.selected);
    },
    elementsPositions() {
      return this.elements.map((element) => {
        return {
          ...element,
          position: this.getPositionalClass(element.left, element.top),
        };
      });
    },
    isElementsSynced() {
      // check if there are any elements that are not synced (element.synced == false) return false if there are any
      return this.elements.every((element) => element.synced);
    },
    projectId() {
      return this.$route.params.projectId;
    },
    draggedElement() {
      return this.elements.find((element) => element.dragging);
    },
  },
  methods: {
    ...mapActions(useProjectStore, [
      "updateProject",
      "getProject",
      "uploadProjectImage",
      "publishProject",
    ]),
    ...mapActions(useElementStore, [
      "getElements",
      "updateElement",
      "createElement",
      "removeElement",
    ]),
    ...mapActions(useUserStore, ["getCurrentUser"]),
    publish() {
      this.isPublishing = true;
      this.publishProject(this.projectId)
        .then((res) => {
          this.isPublishing = false;
          // console.log("publishProject", res);
        })
        .catch((err) => {
          this.isPublishing = false;
          console.log(err);
        });
    },
    getPositionalClass(left, top) {
      // return "top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]";
      return `absolute top-[${top}%] left-[${left}%] transform -translate-x-[${left}%] -translate-y-[${top}%]`;
    },
    selectElementType(elementType) {
      // console.log("selectElementType", elementType.name);
      this.elementTypes.forEach((element) => {
        element.selected = false;
        if (element.name === elementType.name) {
          element.selected = true;
        }
      });
    },
    handleFileUpload(event) {
      // console.log("handleFileUpload");
      this.isImageUploading = true;
      this.uploadProjectImage(event.target.files[0], this.currentProject.id)
        .then((response) => {
          // console.log("handleFileUpload response", response);
          // // this.imageUrl = response.data.url;

          // console.log(
          //   "this.currentProject %% response",
          //   this.currentProject,
          //   response
          // );

          // console.log(
          //   "this.currentProject.imageUrl",
          //   this.currentProject.imageUrl
          // );

          this.imageUrl = response.imageUrl;
          this.isImageUploading = false;
          const img = new Image();
          img.src = this.imageUrl;
          // this.uploadFile(file);
          img.onload = () => {
            // Get the width and height of the image
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            // Calculate the aspect ratio of the image
            const ratio = width / height;
            // Define the width and height of the new canvas
            // console.log(`The image dimensions are ${width}x${height}`);
            // console.log(`The image aspect ratio is ${ratio}`);
            // set imageContainer width to 100% of image width
            // this.$refs.imageContainer.style.width = `${width}px`;
            // this.$refs.imageContainer.style.height = `${height}px`;
          };
        })
        .catch((error) => {
          console.log("handleFileUpload error", error);
          this.isImageUploading = false;
        });

      return;
    },
    addDiv(event) {
      // console.log("addDiv");
      if (!this.selectedElementType) {
        return;
      }
      const imageRect = this.$refs.image.getBoundingClientRect();
      let name = this.selectedElementType.name;
      // check if element with same name exists, if so, increment name

      this.elements.forEach((element) => {});

      let style = {};
      if (this.selectedElementType.name == "Tag") {
        style.hasFill = true;
        style.fill = "#0EA5E9";
        style.fillOpacity = 100;
        style.fillVisible = true;

        style.hasBorder = true;
        style.borderColor = "#ffffff";
        style.borderOpacity = 100;
        style.borderWidth = 2;
        style.borderStyle = "solid";
        style.borderRadius = "rounded-full";
        style.borderVisible = true;
      } else if (this.selectedElementType.name == "Button") {
        style.hasFill = true;
        style.fill = "#0EA5E9";
        style.fillOpacity = 100;
        style.fillVisible = true;

        style.hasBorder = true;
        style.borderColor = "#ffffff";
        style.borderOpacity = 100;
        style.borderWidth = 2;
        style.borderStyle = "solid";
        style.borderRadius = "rounded-full";
        style.borderVisible = true;

        style.hasText = true;
        style.text = "Button";
        style.textVisible = true;

        style.hasIcon = false;
        style.icon = "";
        style.iconStyle = "";
        style.iconVisible = false;
        style.iconPosition = "";

        style.hasContentColor = true;
        style.contentColor = "#ffffff";
        style.contentColorOpacity = 100;
        style.contentColorVisible = true;
      } else if (this.selectedElementType.name == "Text") {
        style.hasText = true;
        style.text = "Sample Text";
        style.textVisible = true;

        style.hasContentColor = true;
        style.contentColor = "#ffffff";
        style.contentColorOpacity = 100;
        style.contentColorVisible = true;
      } else if (this.selectedElementType.name == "Icon") {
        style.hasIcon = true;
        style.icon = "circle-play";
        style.iconStyle = "far";
        style.iconVisible = true;
        style.iconPosition = "";

        style.hasContentColor = true;
        style.contentColor = "#ffffff";
        style.contentColorOpacity = 100;
        style.contentColorVisible = true;
      }

      const newDiv = {
        id: "div" + this.elements.length + 1,
        top: ((event.clientY - imageRect.top) / imageRect.height) * 100,
        left: ((event.clientX - imageRect.left) / imageRect.width) * 100,
        type: this.selectedElementType.name,
        dragging: false,
        selected: false,
        name: this.generateUniqueName(this.selectedElementType.name),
        interactivity_type: null,
        interactivity_content: null,
        style: style,
        hover: false,
        synced: false,
        isNew: true,
        lastUpdated: new Date().getTime(),
      };

      this.elements.push(newDiv);
      this.selectElement(this.elements.length - 1);
      this.elementTypes.forEach((element) => {
        element.selected = false;
      });
    },
    startDrag(event, element, index) {
      // console.log("startDraging.....................", element);
      this.panEnabled = false;
      this.zoomEnabled = false;
      this.selectElement(index);
      this.elements[index].dragging = true;
      // console.log("startDrag", index);
      const div = this.$refs[element.id][0];
      // console.log("div:::::::: ", div);
      const imageRect = this.$refs.image.getBoundingClientRect();
      const divRect = div.getBoundingClientRect();
      const offsetX = event.clientX - divRect.left;
      const offsetY = event.clientY - divRect.top;
      const maxLeft = imageRect.width - divRect.width;
      const maxTop = imageRect.height - divRect.height;
      const handleMouseMove = (event) => {
        let left = event.clientX - imageRect.left - offsetX;
        let top = event.clientY - imageRect.top - offsetY;
        left = Math.max(0, Math.min(left, maxLeft));
        top = Math.max(0, Math.min(top, maxTop));
        const element = this.elements[index];
        element.top = (top / imageRect.height) * 100;
        element.left = (left / imageRect.width) * 100;
        // div.style.left = element.left + "%";
        // div.style.top = element.top + "%";
        // {
        //   top: (top / imageRect.height) * 100,
        //   left: (left / imageRect.width) * 100,
        //   type: this.elements[index].type,
        //   dragging: true,
        // };
        // element.dragging = true;
        element.lastUpdated = new Date().getTime();
        this.elements.splice(index, 1, element);
      };
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    endDrag(event, index) {
      this.elements[index].dragging = false;
      this.elements[index].synced = false;
      this.elements[index].lastUpdated = new Date().getTime();

      // console.log("endDrag: ", this.elements[index]);

      this.panEnabled = true;
      this.zoomEnabled = true;
    },
    getElementSize(ref) {
      // console.log("getElementSize", ref);
      // console.log("this.$refs[ref]", this.$refs[ref]);
      if (this.$refs[ref]) {
        const element = this.$refs[ref][0];
        // console.log({
        //   width: element.getBoundingClientRect().width,
        //   height: element.getBoundingClientRect().height,
        // });

        // console.log("element.getElementSize() >>>>//", element);

        return {
          width: element ? element.getBoundingClientRect().width : 0,
          height: element ? element.getBoundingClientRect().height : 0,
        };
      }
      return { width: 0, height: 0 };
    },
    async selectElement(index) {
      if (this.draggedElement) {
        return;
      }
      this.elements.forEach((element) => {
        element.selected = false;
      });
      this.elements[index].selected = true;
      this.selectedElement = this.elements[index];
      let id = this.elements[index].id;
      // this.space.locks.get(id).g
      // const isLocked = space.locks.get(id) !== undefined;
      // const acquireLock = await this.space.locks.acquire(id);
    },
    generateUniqueName(elementType) {
      // Increment the counter for the given element type
      this.elementCounters[elementType]++;

      // Return the unique name for the element
      return `${elementType} ${this.elementCounters[elementType]}`;
    },
    initializeCounters(namesList) {
      // Regular expression to match the element type and number in the name
      const namePattern = /^(Rectangle|Circle) (\d+)$/;

      namesList.forEach((name) => {
        // Check if the name matches the expected pattern
        const match = name.match(namePattern);

        if (match) {
          // Extract the element type and number from the match
          const elementType = match[1];
          const number = parseInt(match[2]);

          // Update the counter for the element type if the number is greater than the current counter value
          if (number > this.elementCounters[elementType]) {
            this.elementCounters[elementType] = number;
          }
        }
      });
    },
    updateProjectName() {
      // console.log("updateProjectName", this.projectName);
      if (!this.projectName) {
        this.projectName = this.currentProject.name;
        return;
      }
      // return;
      // console.log("this.currentProject.id", this.currentProject);
      this.updateProject(
        {
          name: this.projectName,
        },
        this.currentProject.id
      );
    },
    updateProjectCollaborators() {
      // console.log("updateProjectCollaborators", this.collaborators);
      if (!this.newCollaborator) {
        return;
      }

      if (!this.collaborators) {
        this.collaborators = [];
      }

      if (this.collaborators.includes(this.newCollaborator)) {
        this.newCollaborator = "";
        return;
      }

      this.collaborators.push(this.newCollaborator);
      this.updateProject(
        {
          collaborators: JSON.stringify(this.collaborators),
        },
        this.currentProject.id
      ).then((res) => {
        this.newCollaborator = "";
      });
    },
    syncElements() {
      // console.log("syncElements");
      this.isSyncing = true;
      let promises = [];
      this.elements.forEach((element) => {
        if (!element.synced) {
          let elementData = {
            name: element.name,
            type: element.type,
            style: JSON.stringify(element.style),
            top: element.top,
            left: element.left,
            project_id: this.currentProject.id,
            interactivity_type: element.interactivity_type,
            interactivity_content:
              element.interactivity_content !== null
                ? JSON.stringify(element.interactivity_content)
                : null,
            // synced: true,
          };

          if (!element.isNew) {
            promises.push(
              this.updateElement(elementData, element.id).then((res) => {
                // console.log("res", res);
                element.id = res.id;
                element.style = JSON.parse(res.style);
                element.interactivity_type = res.interactivity_type;
                element.interactivity_content =
                  res.interactivity_content !== null
                    ? JSON.parse(res.interactivity_content)
                    : null;
                element.synced = true;
                this.updatingElementStyles = this.updatingElementStyles.filter(
                  (id) => {
                    return id != element.id;
                  }
                );
                this.updatingElementInteractivity =
                  this.updatingElementInteractivity.filter((id) => {
                    return id != element.id;
                  });
              })
            );
            // this.updateElement(elementData, element.id);
          } else {
            const newElement = {
              ...elementData,
            };
            delete newElement.id;
            // console.log("syncing elements create: ", elementData);
            promises.push(
              this.createElement(newElement).then((res) => {
                // console.log("res", res);
                element.id = res.id;
                element.style = JSON.parse(res.style);
                element.synced = true;
                element.isNew = false;
              })
            );
            // this.createElement(elementData);
          }

          Promise.all(promises)
            .then((res) => {
              // console.log("res", res);
              this.elements.forEach((element) => {
                element.synced = true;
              });
              this.isSyncing = false;
            })
            .catch((err) => {
              console.log("err", err);
              this.isSyncing = false;
            });
        }
      });
    },
    updateElementStyle(e, style) {
      // console.log("updateElementStyle", e, style);
      if (this.updatingElementStyles.includes(e.id) && e.synced == true) {
        return;
      }
      this.updatingElementStyles.push(e.id);
      this.elements.forEach((element) => {
        if (element.id == e.id) {
          element.style = style;
          element.synced = false;
          element.lastUpdated = new Date().getTime();
        }
      });
      // setTimeout(() => {
      //   // this.updateElementStyle(e, style);
      // }, 10000);
      // console.log("updateElementStyle", e, style);
    },
    updateElementInteractivity(e, interactivityContent, interactivityType) {
      if (
        this.updatingElementInteractivity.includes(e.id) &&
        e.synced == true
      ) {
        return;
      }
      this.updatingElementInteractivity.push(e.id);
      this.elements.forEach((element) => {
        if (element.id == e.id) {
          element.interactivity_content = interactivityContent;
          element.interactivity_type = interactivityType;
          element.synced = false;
          element.lastUpdated = new Date().getTime();
        }
      });
    },
    closePreview() {
      this.showPreview = false;
    },
    deleteElement(index) {
      this.removeElement(this.elements[index].id)
        .then((res) => {
          this.elements.splice(index, 1);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    renderCursor(cursorUpdate, member) {
      if (this.currentUser.id === member.profileData.id) {
        return;
      }

      const imageRect = this.$refs.image.getBoundingClientRect();
      const left = imageRect.left;
      const top = imageRect.top;
      const right = imageRect.right;
      const bottom = imageRect.bottom;

      let relativeX = left + (cursorUpdate.position.x / 100) * (right - left);
      let relativeY = top + (cursorUpdate.position.y / 100) * (bottom - top);

      const cursor = document.getElementById(cursorUpdate.connectionId);
      const cursorData = this.cursors.find(
        (cursor) => cursor.id == member.profileData.id
      );

      if (cursorData) {
        cursorData.position = {
          x: relativeX,
          y: relativeY,
        };
      } else {
        this.cursors.push({
          id: member.profileData.id,
          position: {
            x: relativeX,
            y: relativeY,
          },
          username: member.profileData.username,
        });
      }

      if (cursor) {
        cursor.style.left = relativeX + "px";
        cursor.style.top = relativeY + "px";
        cursor.style.display = "block";
      } else {
        const cursor = document.createElement("div");
        cursor.id = cursorUpdate.connectionId;
        cursor.style.position = "absolute";
        cursor.style.left = relativeX + "px";
        cursor.style.top = relativeY + "px";
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundColor = "blue";
        cursor.style.display = "block";
      }
    },
    ablySync(id, newElements) {
      if (this.currentUser.id === id) {
        return;
      }

      this.elements.forEach((element) => {
        const newElement = newElements.find((newElement) => {
          return newElement.id == element.id;
        });

        // console.log("newElement", newElement);
        if (newElement) {
          if (newElement.lastUpdated > element.lastUpdated) {
            element.top = newElement.top;
            element.left = newElement.left;
            element.style = newElement.style;
            element.interactivity_type = newElement.interactivity_type;
            element.interactivity_content = newElement.interactivity_content;
            element.synced = true;
            element.lastUpdated = newElement.lastUpdated;
          }
        } else {
          this.elements.push(newElement);
        }
      });
      this.lastElements = newElements;
    },
  },
  watch: {
    isElementsSynced: function (val) {
      if (!val) {
        const unSyncedElements = this.elements.filter((element) => {
          return !element.synced;
        });
        this.syncElements();
      }
    },
    elements: {
      handler: async function (val) {
        var changedElements = [];

        this.elements.forEach((element) => {
          const lastElement = this.lastElements.find((lastElement) => {
            return lastElement.id == element.id;
          });

          if (lastElement) {
            if (lastElement.lastUpdated < element.lastUpdated) {
              changedElements.push(element);
            }
          } else {
            changedElements.push(element);
          }
        });

        if (changedElements.length > 0 && this.members.length > 1) {
          const channel = realtime.channels.get(this.$route.params.projectId);
          await channel.publish("elements", {
            id: this.currentUser.id,
            elements: this.elements,
          });
          this.lastElements = JSON.parse(JSON.stringify(this.elements));
        }
      },
      deep: true,
    },
  },
};
</script>

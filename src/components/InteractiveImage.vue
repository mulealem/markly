<template>
  <div v-if="isLoading" class="flex justify-center items-center">
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
      <div>Markly loading...</div>
    </div>
  </div>
  <div
    v-else
    class="relative border-[1px] border-neutral-400 shadow-lg max-w-3xl select-none"
    ref="imageContainer"
  >
    <img
      class="w-full h-full object-cover object-center bg-white"
      :src="imageUrl"
      v-if="imageUrl"
      :alt="project.name"
      ref="image"
    />
    <div
      v-for="(element, index) in elementsPositions"
      :key="index"
      class="absolute border-[1px] border-transparent p-0 cursor-pointer"
      :class="getPositionalClass(element.left, element.top)"
      :style="{ top: element.top + '%', left: element.left + '%' }"
      :ref="element.id"
    >
      <!-- <div class="absolute" v-if="element.selected">
                  <div class="-mt-14 -ml-3 bg-red-400 w-24 h-8">
                    {{ getElementSize(element.id) }}
                  </div>
                </div> -->
      <Popper>
        <div
          @click="
            element.interactivity_type != null &&
            element.interactivity_type == 'Link'
              ? elementClicked(element.interactivity_content)
              : null
          "
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
            <div class="w-full max-w-xl h-8">{{ element.style.text }}</div>
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
          <icon-element :style="element.style" v-if="element.type == 'Icon'" />
        </div>
        <template
          #content
          v-if="
            element.interactivity_type != null &&
            element.interactivity_type == 'Popup'
          "
        >
          <div class="w-64 bg-white shadow-2xl rounded-md p-2">
            <div v-if="element.interactivity_content.title" class="font-bold">
              {{ element.interactivity_content.title }}
            </div>
            <div>{{ element.interactivity_content.text }}</div>
            <button
              v-if="element.interactivity_content.actionButtonText"
              class="w-full border-blue-500 border-[1px] hover:bg-blue-200 text-sky-500 font-bold py-2 px-4 rounded"
              @click="elementClicked(element.interactivity_content)"
            >
              {{ element.interactivity_content.actionButtonText }}
            </button>
          </div>
        </template>
      </Popper>
      <!-- <div class="animate-ping">
                <div class="h-8 w-8 -m-4 rounded-3xl bg-yellow-500 border-2"></div>
              </div> -->
    </div>
    <div class="absolute bottom-0 left-0">
      <div
        class="bg-neutral-900 px-2 py-1 bg-opacity-80 rounded-tr-md flex items-center gap-2 text-white text-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          class="w-3 h-3 fill-white"
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
        <span>Markly</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { useProjectStore } from "../stores/projectStore";

import Tag from "./elements/Tag.vue";
import ButtonElement from "./elements/ButtonElement.vue";
import IconElement from "./elements/IconElement.vue";

export default {
  name: "preview",
  props: {
    projectId: {
      type: String,
      required: true,
    },
  },
  components: {
    Tag,
    ButtonElement,
    IconElement,
  },
  created() {
    console.log(this.$route.params.projectId);
    // return;
    this.isLoading = true;
    this.getProjectWithElements(this.projectId)
      .then((projectWithElements) => {
        console.log("projectWithElements : : ", projectWithElements);
        this.elements = projectWithElements.elements.map((element) => {
          return {
            top: element.top,
            left: element.left,
            id: element.id,
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
          };
        });
        this.imageUrl = projectWithElements.imageUrl;
        this.project = projectWithElements;
        this.isLoading = false;
      })
      .catch((err) => {
        this.isLoading = false;
        console.log(err);
      });
  },
  data() {
    return {
      elements: [],
      imageUrl: "",
      project: {},
      isLoading: false,
    };
  },
  computed: {
    elementsPositions() {
      return this.elements.map((element) => {
        return {
          ...element,
          position: this.getPositionalClass(element.left, element.top),
        };
      });
    },
  },
  methods: {
    ...mapActions(useProjectStore, ["getProjectWithElements"]),
    getPositionalClass(left, top) {
      // return "top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]";
      return `absolute top-[${top}%] left-[${left}%] transform -translate-x-[${left}%] -translate-y-[${top}%]`;
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
        return {
          width: element.getBoundingClientRect().width,
          height: element.getBoundingClientRect().height,
        };
      }
      return { width: 0, height: 0 };
    },
    elementClicked(interactivity_content) {
      console.log("elementClicked", interactivity_content);
      if (interactivity_content.link) {
        window.open(interactivity_content.link, "_blank");
      }
    },
  },
};
</script>

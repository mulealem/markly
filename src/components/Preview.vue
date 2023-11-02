<template>
  <div class="h-screen w-full absolute top-0 left-0 bg-neutral-50">
    <div class="flex justify-start items-center p-2">
      <div
        class="p-2 bg-neutral-800 text-white rounded-full cursor-pointer"
        @click="close"
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
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </div>
      <div class="text-sm px-2">{{ project.name }} Preview</div>
    </div>
    <div class="flex justify-center items-center">
      <interactive-image :projectId="projectId" />
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { useProjectStore } from "../stores/projectStore";

import Tag from "./elements/Tag.vue";
import ButtonElement from "./elements/ButtonElement.vue";
import IconElement from "./elements/IconElement.vue";
import InteractiveImage from "./InteractiveImage.vue";

export default {
  name: "preview",
  props: {
    projectId: {
      type: String,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },
  components: {
    Tag,
    ButtonElement,
    IconElement,
    InteractiveImage,
  },
  created() {
    console.log(this.$route.params.projectId);
    // return;
    this.getProjectWithElements(this.projectId)
      .then((projectWithElements) => {
        console.log("projectWithElements : : ", projectWithElements);
        this.elements = projectWithElements.elements.map((element) => {
          return {
            $id: element.$id,
            top: element.top,
            left: element.left,
            id: element.$id,
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
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      elements: [],
      imageUrl: "",
      project: {},
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

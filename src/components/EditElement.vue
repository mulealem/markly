<template>
  <div class="flex flex-row gap-2 text-sm bg-neutral-200 m-2 p-1 rounded-lg">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectTab(tab)"
      class="w-full text-center py-1 rounded-md cursor-pointer"
      :class="{ 'bg-white shadow': tab.selected }"
    >
      {{ tab.name }}
    </div>
    <!-- <div class="w-full text-center py-1 cursor-pointer">
            Interactivity
          </div> -->
  </div>
  <!-- <div>selectedElementType : {{ selectedElementType }}</div>
        <div>{{ elements }}</div> -->
  <div
    v-if="selectedTab.name == 'Design'"
    class="h-full animate-once animate-duration-100"
  >
    <edit-element-panel
      v-if="isFillVisible"
      title="Fill"
      titleClasses="font-bold"
      :visible="style.fillVisible"
      :showContent="style.hasFill"
      :toggle="toggleFill"
      :toggleVisibility="toggleFillVisibility"
    >
      <template #primary>
        <color-picker
          v-model:fill="style.fill"
          v-model:opacity="style.fillOpacity"
        />
      </template>
    </edit-element-panel>

    <edit-element-panel
      v-if="isBorderVisible"
      title="Border"
      titleClasses="font-bold"
      :visible="style.borderVisible"
      :showContent="style.hasBorder"
      :toggle="toggleBorder"
      :toggleVisibility="toggleBorderVisibility"
    >
      <template #primary>
        <color-picker
          v-model:fill="style.borderColor"
          v-model:opacity="style.borderOpacity"
        />
      </template>
      <template #secondary>
        <div class="flex flex-row mt-2 gap-3 text-xs">
          <div
            class="w-full h-7 bg-gree-400 flex flex-row items-center border-[1px] border-neutral-200 rounded-md"
          >
            <div
              class="w-7 h-full flex-none bg-gren-500 flex items-center justify-center border-r-[1px] border-neutral-200"
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
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
              </svg>
            </div>
            <input
              class="w-full h-full focus:ring-0 focus:outline-none flex items-center px-1 py-1 max-w-[60px]"
              v-model="style.borderWidth"
            />
          </div>
          <Popper>
            <div
              class="w-full h-7 bg-gree-400 flex flex-row items-center border-[1px] border-neutral-200 rounded-md select-none cursor-pointer"
            >
              <div
                class="w-7 h-full flex-none bg-gren-500 flex items-center justify-center border-r-[1px] border-neutral-200"
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
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
              <div
                class="w-full min-w-[52px] h-full focus:ring-0 focus:outline-none flex items-center px-1 py-1 max-w-[60px]"
              >
                {{ style.borderStyle }}
              </div>
            </div>
            <template #content>
              <div class="w-16 bg-white -mt-2 rounded-md shadow-lg">
                <div
                  v-for="(borderStyleOption, index) in borderStyleOptions"
                  :key="index"
                  @click="style.borderStyle = borderStyleOption.name"
                  class="w-full px-3 py-1 hover:bg-blue-100 first:rounded-t-md last:rounded-b-md cursor-pointer"
                >
                  {{ borderStyleOption.name }}
                </div>
                <!-- <div
                    class="w-full px-3 py-1 hover:bg-blue-200 rounded-b-md cursor-pointer"
                  >
                    Solid
                  </div> -->
              </div>
            </template>
          </Popper>
          <Popper>
            <div
              class="w-full h-7 bg-gree-400 flex flex-row items-center border-[1px] border-neutral-200 rounded-md select-none cursor-pointer"
            >
              <div
                class="w-7 h-full flex-none bg-gren-500 flex items-center justify-center border-r-[1px] border-neutral-200"
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
                    d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <div
                class="w-full min-w-[32px] h-full focus:ring-0 focus:outline-none flex items-center px-1 py-1 max-w-[60px]"
              >
                {{ style.borderRadius }}
              </div>
            </div>
            <template #content>
              <div class="w-16 bg-white -mt-2 rounded-md shadow-lg">
                <div
                  v-for="(borderRadiusOption, index) in borderRadiusOptions"
                  :key="index"
                  @click="style.borderRadius = borderRadiusOption.name"
                  class="w-full px-3 py-1 hover:bg-blue-100 first:rounded-t-md last:rounded-b-md cursor-pointer"
                >
                  {{ borderRadiusOption.name }}
                </div>
              </div>
            </template>
          </Popper>
        </div>
      </template>
    </edit-element-panel>

    <div v-if="isTextVisible || isIconVisible">
      <div class="text-xs p-2 pb-0 font-bold">Content</div>
      <edit-element-panel
        v-if="isTextVisible"
        title="Text"
        :visible="style.textVisible"
        :showContent="style.hasText"
        :toggle="toggleText"
        :toggleVisibility="toggleTextVisibility"
      >
        <template #primary>
          <div
            class="flex items-center text-xs bg-neutral-50 border-[1px] rounded-md"
          >
            <input
              v-model="style.text"
              class="w-36 focus:ring-0 focus:outline-none p-1 border-x-[1px]"
              contenteditable
            />
          </div>
        </template>
      </edit-element-panel>

      <edit-element-panel
        v-if="isIconVisible"
        title="Icon"
        :visible="style.iconVisible"
        :showContent="style.hasIcon"
        :toggle="toggleIcon"
        :toggleVisibility="toggleIconVisibility"
      >
        <template #primary>
          <div
            @click="showIconSelector"
            class="flex items-center text-sm bg-blue-100 border-[1px] rounded-md cursor-pointer"
          >
            <div
              class="w-6 h-6 focus:ring-0 focus:outline-none p-1 border-x-[1px] flex items-center justify-center"
            >
              <font-awesome-icon
                :icon="[style.iconStyle, style.icon]"
                v-if="style.icon"
              />
            </div>
          </div>
        </template>

        <template #secondary>
          <div class="py-1">
            <div class="text-xs pb-1">Icon Position</div>
            <div class="flex text-xs">
              <div
                v-for="(iconPositionOption, index) in iconPositionOptions"
                :key="index"
                @click="selectIconPosition(iconPositionOption)"
                class="w-full text-center border-[1px] border-blue-300 p-1 first:border-r-[1px] first:rounded-l-md last:rounded-r-md last:border-l-0 hover:bg-blue-100 cursor-pointer"
                :class="{
                  'hover:bg-blue-600 bg-blue-500 text-white':
                    iconPositionOption.selected,
                }"
              >
                {{ iconPositionOption.name }}
              </div>
            </div>
          </div>
        </template>
      </edit-element-panel>

      <edit-element-panel
        v-if="isContentColorVisible"
        title="Color"
        :visible="style.contentColorVisible"
        :showContent="style.hasContentColor"
        :toggle="toggleContentColor"
        :toggleVisibility="toggleContentColorVisibility"
      >
        <template #primary>
          <color-picker
            v-model:fill="style.contentColor"
            v-model:opacity="style.contentColorOpacity"
          />
        </template>
      </edit-element-panel>
    </div>
  </div>
  <div v-else-if="selectedTab.name == 'Interactivity'" class="h-full pt-2">
    <div class="px-2 text-xs font-bold">Type</div>
    <div class="flex justify-center items-center gap-3 py-2 px-2">
      <div
        class="p-2 w-full bg-neutral-200 border-[1px] border-blue-400 text-sm flex flex-col gap-1 hover:opacity-80 justify-center items-center rounded-md cursor-pointer"
        v-for="(interactivityType, index) in interactivityTypes"
        :class="{
          '!bg-blue-500 !text-white': interactivityType.selected,
        }"
        @click="selectInteractivityType(interactivityType.name)"
        :key="index"
      >
        <div v-html="interactivityType.icon"></div>
        <div>{{ interactivityType.name }}</div>
      </div>
    </div>
    <div class="h-full overflow-y-auto">
      <div class="w-full px-2" v-if="selectedInteractivityType.name == 'Link'">
        <label
          for="input-group-1"
          class="block mb-2 text-xs font-medium text-neutral-900"
          >Link</label
        >
        <div class="relative mb-2">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
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
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </div>
          <input
            type="text"
            v-model="interactivityContent.link"
            id="input-group-1"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="https://example.com"
          />
        </div>
      </div>
      <div class="w-full px-2" v-if="selectedInteractivityType.name == 'Popup'">
        <label
          for="input-group-1"
          class="block mb-2 text-xs font-medium text-neutral-900"
          >Title</label
        >
        <div class="relative mb-2">
          <input
            type="text"
            id="input-group-1"
            v-model="interactivityContent.title"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
      <div class="w-full px-2" v-if="selectedInteractivityType.name == 'Popup'">
        <div class="block mb-2 text-xs font-medium text-neutral-900">Image</div>
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-24 border border-neutral-300 border-dashed rounded-lg cursor-pointer bg-neutral-50 hover:bg-neutral-100"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="w-6 h-6 mb-3 text-neutral-400"
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
              <p class="mb-2 text-sm text-neutral-500">
                <span class="font-semibold">Click to upload</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
      <div
        class="w-full px-2 mt-2"
        v-if="selectedInteractivityType.name == 'Popup'"
      >
        <label
          for="message"
          class="block mb-2 text-xs font-medium text-neutral-900"
          >Text</label
        >
        <textarea
          id="message"
          rows="2"
          v-model="interactivityContent.text"
          class="block p-2.5 w-full text-sm text-neutral-900 bg-neutral-50 rounded-lg border border-neutral-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your text here..."
        ></textarea>
      </div>
      <div
        class="w-full px-2 mt-2"
        v-if="selectedInteractivityType.name == 'Popup'"
      >
        <label
          for="input-group-1"
          class="block mb-2 text-xs font-medium text-neutral-900"
          >Action Button Text</label
        >
        <div class="relative mb-2">
          <input
            v-model="interactivityContent.actionButtonText"
            type="text"
            id="input-group-1"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>
      <div class="w-full px-2" v-if="selectedInteractivityType.name == 'Popup'">
        <label
          for="input-group-2"
          class="block mb-2 text-xs font-medium text-neutral-900"
          >Link</label
        >
        <div class="relative mb-2">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
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
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </div>
          <input
            type="text"
            v-model="interactivityContent.link"
            id="input-group-2"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="https://example.com"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- {{ element }} -->
  <icon-selector
    :onIconSelected="selectIcon"
    :close="hideIconSelector"
    v-if="iconSelectorVisible"
  />
</template>
<script>
import ColorPicker from "./ColorPicker.vue";
import EditElementPanel from "./EditElementPanel.vue";
import IconSelector from "./IconSelector.vue";
export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
    updateElementStyle: {
      type: Function,
      required: true,
    },
    updateElementInteractivity: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    console.log("this.element", this.element);
    this.style = this.element.style;
    this.interactivityType = this.element.interactivity_type;

    console.log("this.interactivityContent", this.interactivityContent);

    this.Initialize();
  },
  components: { EditElementPanel, ColorPicker, IconSelector },
  name: "EditElement",
  data() {
    return {
      tabs: [
        {
          name: "Design",
          selected: true,
        },
        {
          name: "Interactivity",
          selected: false,
        },
      ],
      interactivityTypes: [
        {
          name: "Link",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                `,
          selected: true,
        },
        {
          name: "Popup",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  `,
          selected: false,
        },
      ],
      interactivityContent: {
        link: "",
        title: "",
        image_id: "",
        text: "",
        actionButtonText: "",
      },
      iconPositionOptions: [
        {
          name: "Left",
          selected: false,
        },
        {
          name: "Right",
          selected: false,
        },
      ],
      style: {
        hasFill: true,
        fill: "#000000",
        fillOpacity: 100,
        fillVisible: true,

        hasBorder: true,
        borderColor: "#000000",
        borderOpacity: 100,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: "rounded-lg",
        borderVisible: true,

        hasText: true,
        text: "Text",
        textVisible: true,

        hasIcon: true,
        icon: "",
        iconStyle: "",
        iconVisible: true,
        iconPosition: "left",

        hasContentColor: true,
        contentColor: "#000000",
        contentColorOpacity: 100,
        contentColorVisible: true,
      },
      borderRadiusOptions: [
        {
          class: "rounded-none",
          name: "N/A",
          selected: false,
        },
        {
          class: "rounded-sm",
          name: "Sm",
          selected: false,
        },
        {
          class: "rounded",
          name: "Md",
          selected: true,
        },
        {
          class: "rounded-lg",
          name: "Lg",
          selected: false,
        },
        {
          class: "rounded-full",
          name: "Full",
          selected: false,
        },
      ],
      borderStyleOptions: [
        {
          name: "Solid",
          class: "border-solid",
          selected: true,
        },
        {
          name: "Dashed",
          class: "border-dashed",
          selected: false,
        },
        {
          name: "Dotted",
          class: "border-dotted",
          selected: false,
        },
      ],
      iconSelectorVisible: false,

      isFillVisible: false,
      isBorderVisible: false,
      isTextVisible: false,
      isIconVisible: false,
      isContentColorVisible: false,
    };
  },
  watch: {
    element: function (val) {
      console.log("edit element: ", val);
      console.log("edit element style: ", val.style);
      if (val) {
        console.log("this.style: ", this.style);
        this.style = val.style;
        this.Initialize(val);
      }
    },
    // watch style changes deep
    style: {
      handler: function (val) {
        // console.log("style changed", val);
        if (this.hasStyleChanges) {
          const element = this.element;
          element.synced = false;
          this.updateElementStyle(element, val);
        }
      },
      deep: true,
    },
    interactivityContent: {
      handler: function (val) {
        if (this.hasInteractivityContentChanges) {
          const element = this.element;
          element.synced = false;
          this.updateElementInteractivity(
            element,
            val,
            this.selectedInteractivityType.name
          );
        }
      },
      deep: true,
    },
  },
  computed: {
    selectedTab() {
      return this.tabs.find((tab) => tab.selected);
    },
    selectedInteractivityType() {
      return this.interactivityTypes.find((element) => element.selected);
    },
  },
  methods: {
    Initialize() {
      if (this.element.type.toLowerCase() === "icon") {
        this.isIconVisible = true;
        this.isContentColorVisible = true;
      } else if (this.element.type.toLowerCase() === "text") {
        this.isTextVisible = true;
        this.isContentColorVisible = true;
      } else if (this.element.type.toLowerCase() === "button") {
        this.isFillVisible = true;
        this.isBorderVisible = true;
        this.isTextVisible = true;
        this.isIconVisible = true;
        this.isContentColorVisible = true;
      } else if (this.element.type.toLowerCase() === "tag") {
        this.isFillVisible = true;
        this.isBorderVisible = true;
      }

      if (this.element.interactivity_type !== null) {
        this.selectInteractivityType(this.element.interactivity_type);
      }

      this.interactivityContent.link =
        this.element.interactivity_content != null
          ? this.element.interactivity_content.link
          : "";
      this.interactivityContent.title =
        this.element.interactivity_content != null
          ? this.element.interactivity_content.title
          : "";
      this.interactivityContent.text =
        this.element.interactivity_content != null
          ? this.element.interactivity_content.text
          : "";
      this.interactivityContent.actionButtonText =
        this.element.interactivity_content != null
          ? this.element.interactivity_content.actionButtonText
          : "";
    },
    selectTab(tab) {
      this.tabs.forEach((tab) => {
        tab.selected = false;
      });
      tab.selected = true;
    },
    selectInteractivityType(interactivityTypeName) {
      // console.log("selectInteractivityType", interactivityType.name);
      this.interactivityTypes.forEach((interactivity) => {
        interactivity.selected = false;
        if (interactivity.name === interactivityTypeName) {
          interactivity.selected = true;
        }
      });
    },
    selectIconPosition(iconPosition) {
      this.iconPositionOptions.forEach((iconPositionOption) => {
        iconPositionOption.selected = false;
        if (iconPositionOption.name === iconPosition.name) {
          iconPositionOption.selected = true;
        }
      });
    },
    toggleFill() {
      this.style.hasFill = !this.style.hasFill;
      if (this.style.hasFill) {
        this.style.fill = "#000000";
        this.style.opacity = 100;
        this.style.fillVisible = true;
      }
    },
    toggleFillVisibility() {
      this.style.fillVisible = !this.style.fillVisible;
    },
    toggleBorder() {
      this.style.hasBorder = !this.style.hasBorder;
      if (this.style.hasBorder) {
        this.style.borderColor = "#000000";
        this.style.borderWidth = 1;
        this.style.borderStyle = "solid";
        this.style.borderRadius = "rounded-lg";
        this.style.borderVisible = true;
      }
    },
    toggleBorderVisibility() {
      this.style.borderVisible = !this.style.borderVisible;
    },
    toggleText() {
      this.style.hasText = !this.style.hasText;
      if (this.style.hasText) {
        this.style.text = "Text";
        this.style.textVisible = true;
      }
    },
    toggleTextVisibility() {
      this.style.textVisible = !this.style.textVisible;
    },
    toggleIcon() {
      this.style.hasIcon = !this.style.hasIcon;
      if (this.style.hasIcon) {
        this.style.icon = "";
        this.style.iconVisible = true;
        this.style.iconPosition = "left";
      }
    },
    toggleIconVisibility() {
      this.style.iconVisible = !this.style.iconVisible;
    },
    toggleContentColor() {
      this.style.hasContentColor = !this.style.hasContentColor;
      if (this.style.hasContentColor) {
        this.style.contentColor = "#000000";
        this.style.contentColorVisible = true;
      }
    },
    toggleContentColorVisibility() {
      this.style.contentColorVisible = !this.style.contentColorVisible;
    },
    showIconSelector() {
      this.iconSelectorVisible = true;
    },
    hideIconSelector() {
      this.iconSelectorVisible = false;
    },
    selectIcon(icon, iconStyle) {
      this.style.icon = icon;
      this.style.iconStyle = iconStyle;
      this.iconSelectorVisible = false;
    },
    hasStyleChanges() {
      var hasChanges = false;
      if (
        this.element.style.hasFill !== this.style.hasFill ||
        this.element.style.fill !== this.style.fill ||
        this.element.style.opacity !== this.style.opacity ||
        this.element.style.fillVisible !== this.style.fillVisible ||
        this.element.style.hasBorder !== this.style.hasBorder ||
        this.element.style.borderColor !== this.style.borderColor ||
        this.element.style.borderWidth !== this.style.borderWidth ||
        this.element.style.borderStyle !== this.style.borderStyle ||
        this.element.style.borderRadius !== this.style.borderRadius ||
        this.element.style.borderVisible !== this.style.borderVisible ||
        this.element.style.hasText !== this.style.hasText ||
        this.element.style.text !== this.style.text ||
        this.element.style.textVisible !== this.style.textVisible ||
        this.element.style.hasIcon !== this.style.hasIcon ||
        this.element.style.icon !== this.style.icon ||
        this.element.style.iconStyle !== this.style.iconStyle ||
        this.element.style.iconVisible !== this.style.iconVisible ||
        this.element.style.iconPosition !== this.style.iconPosition ||
        this.element.style.hasContentColor !== this.style.hasContentColor ||
        this.element.style.contentColor !== this.style.contentColor ||
        this.element.style.contentColorVisible !==
          this.style.contentColorVisible
      ) {
        hasChanges = true;
      }

      return hasChanges;
    },
    hasInteractivityContentChanges() {
      // interactivityContent: {
      //   link: "",
      //   title: "",
      //   image_id: "",
      //   text: "",
      //   actionButtonText: "",
      // },
      var hasChanges = false;
      if (
        this.element.interactivityContent.link !==
          this.interactivityContent.link ||
        this.element.interactivityContent.title !==
          this.interactivityContent.title ||
        this.element.interactivityContent.image_id !==
          this.interactivityContent.image_id ||
        this.element.interactivityContent.text !==
          this.interactivityContent.text ||
        this.element.interactivityContent.actionButtonText !==
          this.interactivityContent.actionButtonText
      ) {
        hasChanges = true;
      }

      return hasChanges;
    },
  },
};
</script>

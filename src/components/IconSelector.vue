<template>
  <div
    class="h-full w-full absolute top-0 left-0 bg-neutral-900 bg-opacity-30 flex items-center justify-center"
  >
    <div class="w-80 h-96 bg-white shadow-md rounded-lg flex flex-col">
      <div class="flex justify-between items-center p-2 border-b mb-3">
        <div>Icons</div>
        <div class="bg-neutral-50 rounded-full cursor-pointer" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div class="px-3">
        <input
          type="text"
          class="w-full p-2 border focus:outline-none focus:ring-0 border-neutral-400 focus:border-blue-600 rounded-lg"
        />
      </div>
      <div class="flex justify-between items-center pr-5 p-3">
        <div class="flex gap-2 text-xs pb-0">
          <div
            v-for="(iconFilter, i) in iconFilters"
            :key="i"
            @click="selectIconFilter(iconFilter)"
            class="bg-blue-200 py-1 rounded-full flex gap-1 cursor-pointer"
            :class="
              iconFilter.selected
                ? 'bg-blue-200 pr-3 pl-1'
                : 'bg-neutral-200 px-3 '
            "
          >
            <span v-if="iconFilter.selected">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            {{ iconFilter.name }}
          </div>
        </div>
        <Popper>
          <div
            class="w-5 h-5 rounded-lg"
            :style="{ 'background-color': selectedIconColorHex }"
          ></div>
          <template #content>
            <Sketch v-model="iconColor" />
          </template>
        </Popper>
      </div>
      <div class="h-full overflow-y-auto">
        <div class="grid grid-cols-5 gap-2 p-3">
          <div
            v-for="(icon, index) in icons"
            :key="index"
            @click="onIconSelected(icon, selectedIconFilter.value)"
            :style="{ color: selectedIconColorHex }"
            class="w-full h-12 text-[#D500C1] text-xl bg-red-50 hover:bg-blue-200 p-2 flex justify-center items-center rounded-lg cursor-pointer"
          >
            <font-awesome-icon :icon="[selectedIconFilter.value, icon]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "icon-selector",
  props: {
    onIconSelected: {
      type: Function,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      icons: [
        "address-book",
        "address-card",
        "bell",
        "bell-slash",
        "bookmark",
        "building",
        "calendar",
        "calendar-check",
        "calendar-days",
        "calendar-minus",
        "calendar-plus",
        "calendar-xmark",
        "chart-bar",
        "chess-bishop",
        "chess-king",
        "chess-knight",
        "chess-pawn",
        "chess-queen",
        "chess-rook",
        "circle",
        "circle-check",
        "circle-dot",
        "circle-down",
        "circle-left",
        "circle-pause",
        "circle-play",
        "circle-question",
        "circle-right",
        "circle-stop",
        "circle-up",
        "circle-user",
        "circle-xmark",
        "clipboard",
        "clock",
        "clone",
        "closed-captioning",
        "comment",
        "comment-dots",
        "comments",
        "compass",
        "copy",
        "copyright",
        "credit-card",
        "envelope",
        "envelope-open",
        "eye",
        "eye-slash",
        "face-angry",
        "face-dizzy",
        "face-flushed",
        "face-frown",
        "face-frown-open",
        "face-grimace",
        "face-grin",
        "face-grin-beam",
        "face-grin-beam-sweat",
        "face-grin-hearts",
        "face-grin-squint",
        "face-grin-squint-tears",
        "face-grin-stars",
        "face-grin-tears",
        "face-grin-tongue",
        "face-grin-tongue-squint",
        "face-grin-tongue-wink",
        "face-grin-wide",
        "face-grin-wink",
        "face-kiss",
        "face-kiss-beam",
        "face-kiss-wink-heart",
        "face-laugh",
        "face-laugh-beam",
        "face-laugh-squint",
        "face-laugh-wink",
        "face-meh",
        "face-meh-blank",
        "face-rolling-eyes",
        "face-sad-cry",
        "face-sad-tear",
        "face-smile",
        "face-smile-beam",
        "face-smile-wink",
        "face-surprise",
        "face-tired",
        "file",
        "file-audio",
        "file-code",
        "file-excel",
        "file-image",
        "file-lines",
        "file-pdf",
        "file-powerpoint",
        "file-video",
        "file-word",
        "file-zipper",
        "flag",
        "floppy-disk",
        "folder",
        "folder-closed",
        "folder-open",
        "font-awesome",
        "futbol",
        "gem",
        "hand",
        "hand-back-fist",
        "hand-lizard",
        "hand-peace",
        "hand-point-down",
        "hand-point-left",
        "hand-point-right",
        "hand-point-up",
        "hand-pointer",
        "hand-scissors",
        "hand-spock",
        "handshake",
        "hard-drive",
        "heart",
        "hospital",
        "hourglass",
        "hourglass-half",
        "id-badge",
        "id-card",
        "image",
        "images",
        "keyboard",
        "lemon",
        "life-ring",
        "lightbulb",
        "map",
        "message",
        "money-bill-1",
        "moon",
        "newspaper",
        "note-sticky",
        "object-group",
        "object-ungroup",
        "paper-plane",
        "paste",
        "pen-to-square",
        "rectangle-list",
        "rectangle-xmark",
        "registered",
        "share-from-square",
        "snowflake",
        "square",
        "square-caret-down",
        "square-caret-left",
        "square-caret-right",
        "square-caret-up",
        "square-check",
        "square-full",
        "square-minus",
        "square-plus",
        "star",
        "star-half",
        "star-half-stroke",
        "sun",
        "thumbs-down",
        "thumbs-up",
        "trash-can",
        "user",
        "window-maximize",
        "window-minimize",
        "window-restore",
      ],
      iconFilters: [
        {
          name: "Regular",
          value: "far",
          selected: true,
        },
        {
          name: "Solid",
          value: "fas",
          selected: false,
        },
      ],
      iconColor: {
        hex: "#D500C1",
      },
      color: "bg-[#000000]",
    };
  },
  computed: {
    selectedIconFilter() {
      return this.iconFilters.find((filter) => filter.selected);
    },
    selectedIconColorHex() {
      return this.iconColor.hex;
    },
  },
  methods: {
    selectIconFilter(iconFilter) {
      this.iconFilters.forEach((filter) => {
        filter.selected = false;
      });
      iconFilter.selected = true;
    },
    getClassColor(color) {
      return `text-[${color}]`;
    },
  },
};
</script>

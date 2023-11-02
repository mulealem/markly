<!-- src/components/Popover.vue -->
<template>
  <div class="relative">
    <div ref="marker" @click="togglePopover" class="cursor-pointer">
      <slot name="marker"></slot>
    </div>
    <div
      v-if="isVisible"
      @click.self="hidePopover"
      class="fixed inset-0 z-50"
    ></div>
    <div
      v-if="isVisible"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
      class="absolute z-50 bg-white p-4 rounded shadow-lg"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      position: { x: 0, y: 0 },
    };
  },
  methods: {
    togglePopover() {
      if (this.isVisible) {
        this.hidePopover();
      } else {
        this.showPopover();
      }
    },
    showPopover() {
      const markerRect = this.$refs.marker.getBoundingClientRect();
      const popoverWidth = 200; // You can adjust this value based on your popover content width
      const popoverHeight = 100; // You can adjust this value based on your popover content height
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let x = markerRect.left;
      let y = markerRect.bottom;

      if (markerRect.right + popoverWidth > windowWidth) {
        x = markerRect.right - popoverWidth;
      }

      if (markerRect.bottom + popoverHeight > windowHeight) {
        y = markerRect.top - popoverHeight;
      }

      this.position = { x, y };
      this.isVisible = true;
    },
    hidePopover() {
      this.isVisible = false;
    },
  },
};
</script>

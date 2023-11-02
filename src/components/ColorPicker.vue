<template>
  <div class="flex items-center text-xs bg-neutral-50 border-[1px] rounded-md">
    <Popper>
      <div
        class="h-4 w-4 bg-blue-500 rounded m-1"
        :style="{ 'background-color': fill }"
      ></div>
      <template #content>
        <Sketch v-model="color" />
      </template>
    </Popper>
    <input
      class="w-16 focus:ring-0 focus:outline-none p-1 border-x-[1px]"
      :value="fill"
      @input="$emit('update:fill', $event.target.value)"
    />
    <input
      :value="opacity"
      max="100"
      type="number"
      min="0"
      @input="$emit('update:opacity', $event.target.value)"
      class="m-1 focus:ring-0 focus:outline-none w-10 px-1"
    />
  </div>
</template>
<script>
export default {
  name: "color-picker",
  props: ["fill", "opacity"],
  emits: ["update:fill", "update:opacity"],
  data() {
    return {
      color: {
        hex: this.fill,
        opacity: this.opacity,
      },
    };
  },
  watch: {
    color: {
      handler() {
        this.$emit("update:fill", this.color.hex);
        this.$emit("update:opacity", this.color.opacity);
      },
      deep: true,
    },
    fill() {
      this.color.hex = this.fill;
    },
    opacity() {
      this.color.opacity = this.opacity;
    },
  },
};
</script>

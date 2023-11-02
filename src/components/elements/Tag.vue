<template>
  <div class="relative flex h-8 w-8 -m-4">
    <div
      class="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
    ></div>
    <div
      v-wave
      class="relative inline-flex rounded-full h-8 w-8 border-2 shadow-2xl"
      :style="{
        'background-color': this.style.fill,
        'border-color': this.style.borderColor,
        color: this.style.contentColor,
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "tag",
  props: {
    style: {
      type: Object,
      required: true,
    },
  },
};
</script>

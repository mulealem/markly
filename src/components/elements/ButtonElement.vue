<template>
  <button
    v-wave
    class="font-bold py-2 px-3 rounded"
    :style="{
      'background-color': this.style.fill,
      'border-color': this.style.borderColor,
      color: this.style.contentColor,
      'border-width': this.style.borderWidth + 'px',
      'border-style': this.style.borderStyle,
    }"
  >
    <span
      class="pr-2"
      v-if="style.hasIcon && style.icon && style.iconPosition == 'left'"
    >
      <font-awesome-icon :icon="style.icon" />
    </span>
    <span>{{ style.text }}</span>
    <span
      class="pl-2"
      v-if="style.hasIcon && style.icon && style.iconPosition == 'right'"
    >
      <font-awesome-icon :icon="style.icon" />
    </span>
  </button>
</template>
<script>
export default {
  name: "button-element",
  props: {
    style: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="text-2xl"
    :style="{
      color: this.style.contentColor,
    }"
  >
    <span class="pr-2" v-if="style.hasIcon && style.icon">
      <font-awesome-icon :icon="[style.iconStyle, style.icon]" />
    </span>
  </div>
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

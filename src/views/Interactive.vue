<template>
  <div class="h-screen flex justify-center items-center">
    <div><interactive-image :projectId="$route.params.projectId" /></div>
  </div>
</template>
<script>
import InteractiveImage from "../components/InteractiveImage.vue";
export default {
  components: { InteractiveImage },
  name: "Interactive",
  created() {
    console.log("Interactive");
    console.log(this.$route.params.projectId);
  },
};
</script>

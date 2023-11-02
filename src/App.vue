<template>
  <router-view />
  <vue-progress-bar></vue-progress-bar>
</template>
<script>
import { supabase } from "@/webClient/supabase";

export default {
  name: "App",
  mounted() {
    console.log("this.$route.name", this.$route.name);
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("this.$route.name onAuthStateChange", this.$route.name);
      console.log(event, session);
      // if (this.$route.name === "interactive-image") {
      //   console.log("interactive-image::::::::::::::::::::::::::::::");
      // } else if (event === "SIGNED_IN" && this.$route.name === "home") {
      //   // console.log("SIGNED_IN::::::::::::::::::::::::::::::");
      //   this.$router.push({ name: "projects" });
      // } else if (event === "SIGNED_OUT") {
      //   this.$router.push({ name: "home" });
      // } else if (event === "INITIAL_SESSION") {
      //   console.log("this.$route.name onAuthStateChange", this.$route);
      //   if (!session) {
      //     this.$router.push({ name: "home" });
      //   }
      // }
    });
  },
};
</script>
<style>
* {
  font-family: "Inter", sans-serif;
}
</style>

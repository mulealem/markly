<template>
  <router-view />
  <vue-progress-bar></vue-progress-bar>
</template>
<script>
import { supabase } from "@/webClient/supabase";

export default {
  name: "App",
  mounted() {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && this.$route.name === "home") {
        console.log("SIGNED_IN::::::::::::::::::::::::::::::");
        this.$router.push({ name: "projects" });
      } else if (event === "SIGNED_OUT") {
        this.$router.push({ name: "home" });
      }
    });
  },
};
</script>
<style>
* {
  font-family: "Inter", sans-serif;
}
</style>

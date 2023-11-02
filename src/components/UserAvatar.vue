<template>
  <!-- {{ currentUser }} -->

  <Popper>
    <div
      v-if="currentUser"
      class="w-10 h-10 rounded-full text-white flex items-center justify-center text-xs select-none cursor-pointer"
    >
      <img
        v-if="currentUser"
        class="w-7 h-7 rounded-full flex-none"
        :src="currentUser.user_metadata.avatar_url"
        :alt="currentUser.user_metadata.user_name"
      />
      <!-- {{ currentUser.email.charAt(0).toUpperCase() }} -->
    </div>
    <template #content>
      <div class="bg-white mr-3 -mt-2 rounded-lg px-3 py-3 shadow">
        <div
          class="text-sm pl-3 text-neutral-800 font-ligh pr-3"
          v-if="currentUser"
        >
          <div>{{ currentUser.user_metadata.user_name }}</div>
          <div class="text-xs text-neutral-900">{{ currentUser.email }}</div>
        </div>
        <button @click="signout" class="w-full px-5 text-sm mt-1 py-1" v-wave>
          Logout
        </button>
      </div>
    </template>
  </Popper>
</template>
<script>
import { useUserStore } from "../stores/userStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "user-avatar",
  created() {
    // console.log(
    //   "user avatar created user_metadata",
    //   this.currentUser.user_metadata
    // );
  },
  computed: {
    ...mapState(useUserStore, ["currentUser"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    signout() {
      this.logout();
      // .then(() => {
      //   this.$router.push({ name: "home" });
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    },
  },
};
</script>

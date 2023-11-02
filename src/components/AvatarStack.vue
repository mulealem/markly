<template>
  <div class="flex -space-x-2">
    <!-- Avatar Stack {{ members.length }} -->
    <div class="relative" v-for="(member, index) in uniqueMembers" :key="index">
      <img
        class="w-7 h-7 rounded-full"
        :src="member.profileData.avatar"
        :alt="member.profileData.username"
      />
      <span
        v-if="member.isConnected"
        class="top-4 right-5 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
      ></span>
    </div>
  </div>
</template>
<script>
import { spaces } from "../webClient/ably";

import { mapState } from "pinia";
import { useUserStore } from "@/stores/userStore";

export default {
  name: "AvatarStack",
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    // console.log(this.projectId);
    // console.log("avatar stack :: ", this.currentUser);
    // let username = this.currentUser.user_metadata.full_name;
    // let avatar = this.currentUser.user_metadata.avatar_url;
    // spaces
    //   .get(this.projectId)
    //   .then((space) => {
    //     space.enter({
    //       username: username,
    //       avatar: avatar,
    //     });
    //     // "update",
    //     space.subscribe((spaceState) => {
    //       console.log("spaceState.members>>>>>>>>>", spaceState.members);
    //       this.members = spaceState.members;
    //     });
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
  },
  data() {
    return {
      // members: [],
    };
  },
  computed: {
    ...mapState(useUserStore, ["currentUser"]),
    uniqueMembers() {
      return this.members.filter(
        (member, index, self) =>
          index ===
          self.findIndex(
            (m) =>
              m.profileData.username === member.profileData.username &&
              m.profileData.avatar === member.profileData.avatar
          )
      );
    },
  },
};
</script>

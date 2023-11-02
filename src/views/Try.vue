<template>
  <div class="relative">
    <img
      src="https://cdn.dribbble.com/userupload/6335202/file/original-2939425b60acf1a46c5f2d07eaa14e2d.png?compress=1&resize=1600x1200"
      alt="Your Image"
    />
    <div
      class="absolute bg-white bg-opacity-75 p-2 rounded"
      :class="getPositionClass()"
    >
      <!-- :style="{
        top: 50 + '%',
        left: 50 + '%',
        transform: 'translate3d(' + 50 + '%,' + 50 + '%,' + 0 + ')',
      }" -->
      Hello
    </div>
  </div>
  <!-- <div class="container">
    <img
      src="https://cdn.dribbble.com/userupload/6335202/file/original-2939425b60acf1a46c5f2d07eaa14e2d.png?compress=1&resize=1600x1200"
      alt="Your Image"
      class="image"
    />
    <div class="pinned-div">Pinned Div</div>
  </div> -->
</template>
<script>
export default {
  name: "Try",
  methods: {
    getPositionClass() {
      return "top-[25%] left-[25%] transform -translate-x-[25%] -translate-y-[25%]";
    },
  },
};
</script>
<style>
.container {
  position: relative;
  display: inline-block;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.pinned-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 5px;
}
</style>

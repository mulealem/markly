import "./assets/main.css";

import Popper from "vue3-popper";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import VueProgressBar from "@aacassandra/vue3-progressbar";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far);
library.add(fas);
import App from "./App.vue";
import router from "./router";

import VueColor from "@ckpack/vue-color";
import VWave from "v-wave";

const app = createApp(App);

app.component("Popper", Popper);
app.component("font-awesome-icon", FontAwesomeIcon);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.use(VueColor);
app.use(VueProgressBar, {
  color: "#5e60e6",
  failedColor: "#874b4b",
  thickness: "2px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
});

app.use(VWave);

app.mount("#app");

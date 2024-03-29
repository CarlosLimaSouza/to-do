import { createApp } from "vue";
import App from "./App.vue";
// importando bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(fas);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");

new Vue({
  render: (h) => h(App),
}).$mount("#app");

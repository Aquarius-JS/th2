// import './assets/main.css'
import "@/style/reset.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import piniaPersist from "pinia-plugin-persist";

import App from "./App.vue";
import router from "./router";

// import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";

const app = createApp(App);
const pinia = createPinia(piniaPersist);
pinia.use()
app.use(pinia);
app.use(router);

app.mount("#app");
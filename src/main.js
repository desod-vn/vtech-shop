import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/vi'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import 'quasar/src/css/index.sass'

const app = createApp(App);

app.use(createPinia());
app.use(router);


app.use(Quasar, {
    plugins: {},
    lang: quasarLang,
    iconSet: quasarIconSet,
})

app.mount("#app");

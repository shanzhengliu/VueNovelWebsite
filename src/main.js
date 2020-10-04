import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from "vue-router";
import Charter from "@/components/Reading/Charter";
import MainPage from "@/components/MainPage";
import Page from "@/components/Reading/Page";
Vue.config.productionTip = false;
Vue.use(ElementUI);

const routes = [
    { path: "/charter", component: Charter},
    { path:"/", component:MainPage},
    { path:"/page", component:Page}

];
const router = new VueRouter({
    mode:'history',
    routes // (缩写) 相当于 routes: routes
});
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

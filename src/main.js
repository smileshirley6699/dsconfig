import Vue from 'vue'
import App from './App.vue'
import getConfig from './index';
import config from './example/constants';
Vue.config.productionTip = false;
async function init() {
    try {
        let configs = await getConfig ({
            url: config.URL
        });
        Vue.prototype.$config = configs;
        new Vue({
            render: h => h(App),
        }).$mount('#app');
    } catch (e) {
        console.log(e);
    }
}
init();

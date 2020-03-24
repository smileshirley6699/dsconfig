# Welcome to the dsconfig component
dsconfig is a dynamic configuration acquisition component that uses ajax to retrieve and return remote configurations. Users can encapsulate the configuration into Vue's global variables or nodejs-based server application global configuration.
Supported browsers: IE9 +, Firefox, Chrome, Safari and Opera
## Component Installation
Excuting Command：`npm install dsconfig`
## Example
`main.js`
```javascript
import Vue from 'vue';
import App from './App.vue';
import dsconfig from 'dsconfig';
async function initVue() {
    try{
        let configs = await dsconfig({
            url: "https://easy-mock.com/mock/5e69a2ecc945691e949c90ea/example/config"    
        });
        Vue.prototype.$config = configs;
        new Vue({
            render: h => h(App),
        }).$mount('#app');
    } catch (e) {
        // failed callback
        console.log(e);
    }
}
```
`App.vue`
```html
<template>
  <div id="app"></div>
</template>
```
```javascript
<script>
export default {
    name: 'App',
    mounted() {
        // The config from server can be used here.
        console.log(this.$config);
    }
};
</script>
```
## Configuration Instructions
| Configure KEY   | Is it required   |  Description  |
| :--------| :-----   | :----    |
| url      |Y   |Remote configuration address, default is null.   |
| async    |N   |Whether to load true / false asynchronously. The default true indicates asynchronous.  |
| method   |N   |Request method POST / GET, default POST. |
| data     |N   |POST request parameters, GET request parameters are directly behind the url.  |


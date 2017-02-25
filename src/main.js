// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'

Vue.use(Mint)

let APP_ID = 'FgMq6U5zwVtBecqj94rOG9Ot-gzGzoHsz';
let APP_KEY = 'vmmcyEE3ucEvpbtDOlG6uH1P';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


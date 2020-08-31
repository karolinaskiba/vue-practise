import Vue from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";

Vue.config.productionTip = false;
new Vue({
  el: "#app",
  components: {
    App,
    Header
  },
  template: `
    <div>
    <App/>
    
    <h1>test</h1>
    </div>`
});

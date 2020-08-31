import Vue from "vue";

Vue.config.productionTip = false;

const NewComponent = {
  name: "NewComponent ",
  data() {
    return {
      myColor: {
        color: "orangered"
      }
    };
  },
  template: `<div>   
  <p :style="myColor">moj nowy komponent</p>
  <label for='color'>change color</label>
  <input name='color' id='color' v-model="myColor.color"/>
  
  </div>
  `
};

new Vue({
  el: "#app",
  data: {
    name: "Adam",
    myStyle: {
      color: "#ee4142"
    }
  },
  methods: {
    handleClick() {
      alert("test");
    }
  },
  components: {
    NewComponent
  },
  template: `
  <div>
  <h1 v-bind:style="myStyle"> hello {{name}} </h1>
  <NewComponent />
  <button v-on:click="handleClick">click</button>
 
  </div>
  
  `
});

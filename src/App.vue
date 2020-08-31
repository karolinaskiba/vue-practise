<template>
  <div>
    <h1>Tutaj mamy jakiś h1 prosto z komponentu App</h1>
    <Header/>
    <ul>
      <li v-for="item in myArray">
        {{item.name}} ||
        {{item.color}}
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      myArray: [
        {
          name: "Alex",
          color: "blue"
        },
        {
          name: "Anna",
          color: "green"
        },
        {
          name: "Pumba",
          color: "orangered"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
h1 {
  color: blueviolet;
}
</style>


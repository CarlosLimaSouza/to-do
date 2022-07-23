<template>
  <todo />
</template>

<script>
import todo from "./components/todo.vue";

export default {
  name: "App",
  components: {
    todo,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: fundation;
  src: url("./fonts/EduNSWACTFoundation-VariableFont_wght.ttf");
}

#app {
  height: 100vh;
  background: rgb(181, 166, 166);
  background: linear-gradient(
    180deg,
    rgba(181, 166, 166, 1) 0%,
    rgba(73, 73, 77, 1) 100%
  );
}
</style>

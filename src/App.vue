<template>
  <div id="app">
    <preloader />
    <decorations />
    <landing>
      <router-view />
    </landing>
    <custom-footer />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import Decorations from "@/components/Decorations.vue";
import Landing from "@/components/Landing.vue";
import CustomFooter from '@/components/CustomFooter.vue';

export default {
  name: 'App',
  components: {
    Preloader,
    Decorations,
    Landing,
    CustomFooter,
  },
  metaInfo: {
    title: 'Joshua Paul Jacob',
    titleTemplate: '%s | Joshua Paul Jacob',
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  /* background-color: black; */
  height: 100%;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  color: white;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  color: lightgray;
  transition: 0.2s ease-in-out;
  border-bottom: 1px solid transparent;
  cursor: pointer;
}

a:hover {
  color: white;
  border-color: white;
}
</style>

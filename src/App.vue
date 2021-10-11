<template>
  <div id="app">
    <preloader />
    <decorations />
    <custom-menu />
    <landing>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </landing>
    <custom-footer />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import Decorations from "@/components/Decorations.vue";
import Landing from "@/components/Landing.vue";
import CustomFooter from '@/components/CustomFooter.vue';
import CustomMenu from '@/components/CustomMenu.vue';

export default {
  name: 'App',
  components: {
    Preloader,
    Decorations,
    Landing,
    CustomFooter,
    CustomMenu,
  },
  metaInfo: {
    title: 'Joshua Paul Jacob',
    titleTemplate: '%s | Joshua Paul Jacob',
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alata&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  /* background-color: black; */
  height: 100%;
  font-family: "Roboto Mono", monospace;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <main>
    <marquees text="JOSHUA PAUL JACOB" :duration="17" />
    <welcome />
    <about />
    <now />
    <contact />
  </main>
</template>

<script>
import Marquees from "@/components/Marquees.vue";
import Welcome from "@/components/home/Welcome.vue";
import About from "@/components/home/About.vue";
import Now from "@/components/home/Now.vue";
import Contact from "@/components/home/Contact.vue";

export default {
  name: "Home",
  components: {
    Marquees,
    Welcome,
    About,
    Now,
    Contact,
  },
  metaInfo: {
    title: "Joshua Paul Jacob",
    titleTemplate: "Joshua Paul Jacob",
  },
};
</script>

<style></style>

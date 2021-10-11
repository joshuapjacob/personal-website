<template>
  <main>
    <marquees text="PROJECTS" :duration="8" />
  </main>
</template>

<script>
import Marquees from "@/components/Marquees.vue";
export default {
  name: "projects",
  metaInfo: {
    title: "Projects",
  },
  components: {
    Marquees,
  },
};
</script>

<style scoped>

</style>
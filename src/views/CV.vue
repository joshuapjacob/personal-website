<template>
  <main>
    <marquees text="CURRICULUM VITAE" :duration="16" />
    <h1><a href="https://drive.google.com/file/d/1oWUBpOSOZj5dtP4P-P3usUlfHAdbVyxT/view?usp=sharing">CLICK HERE!</a></h1>
  </main>
</template>

<script>
import Marquees from "@/components/Marquees.vue";
export default {
  name: 'CV',
  components: {
    Marquees,
  },
  metaInfo: {
    title: 'CV',
  }
}
</script>

<style scoped>
h1 {
  padding: 45vh 0 0 0;
  /* margin: 50px; */
}
</style>
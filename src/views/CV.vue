<template>
  <div id="cv">
    <marquees text="CURRICULUM VITAE" :duration="16" />
    <div>
      <span></span>
    </div>
    <div class="block">
      <h1>SUMMARY</h1>
      <Summary />
    </div>
    <div class="block">
      <h1>EDUCATION</h1>
      <Education />
    </div>
    <div class="block">
      <h1>PROFESSIONAL EXPERIENCE</h1>
      <Experience />
    </div>
    <div class="block">
      <h1>EXTRA-CURRICULAR</h1>
      <ExtraCurricular />
    </div>
    <div class="block">
      <h1>CERTIFICATIONS & ONLINE COURSEWORK</h1>
      <Certifications />
    </div>
    <div class="block">
      <h1>ADDITIONAL INFORMATION</h1>
      <Additional />
    </div>
  </div>
</template>

<script>
import Marquees from "@/components/Marquees.vue";
import Summary from "@/components/cv/Summary.vue";
import Education from "@/components/cv/Education.vue";
import Experience from "@/components/cv/Experience.vue";
import ExtraCurricular from "@/components/cv/ExtraCurricular.vue";
import Additional from "@/components/cv/Additional.vue";
import Certifications from "@/components/cv/Certifications.vue";

export default {
  name: "CV",
  components: {
    Marquees,
    Summary,
    Education,
    Experience,
    ExtraCurricular,
    Additional,
    Certifications,
  },
  metaInfo: {
    title: "CV",
  },
  mounted() {
    window.scrollTo(0,0);
  }
};
</script>

<style scoped>
#cv {
  margin-top: 100px;
  width: 100vw;
  max-width: 1000px;
}

.block {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin: 30px;
  position: relative;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
}

h1 {
  position: absolute;
  top: -18px;
  font-size: 24px;
}
</style>

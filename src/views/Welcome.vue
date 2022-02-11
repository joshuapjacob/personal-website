<template>
  <div id="welcome">
    <marquees text="JOSHUA PAUL JACOB" :duration="17" />
    <div class="center">
      <div id="full_name">
        <div id="first_names" class="name noselect">
          / Joshua Paul
        </div>
        <div id="last_name" class="name noselect">Jacob /</div>
      </div>
      <router-link id="cta" to="/cv"
        >I'm actively seeking an internship in quantitative
        finance.</router-link
      >
    </div>
  </div>
</template>

<script>
import Marquees from "@/components/Marquees.vue";
export default {
  name: "welcome",
  metaInfo: {
    titleTemplate: "Joshua Paul Jacob",
  },
  components: {
    Marquees,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");

#welcome {
  margin: auto;
  height: 100vh;
}

.center {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
}

/* NAME --------------------------------------------------------------------- */

#full_name {
  padding: 30px;
}
#first_names {
  -webkit-text-stroke: 1px white;
  color: white;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

#last_name {
  color: white;
}

.name {
  font-family: "Alata", sans-serif;
  font-size: 9rem;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

/* CTA ---------------------------------------------------------------------- */

#cta {
  margin: 40px;
  margin-top: 60px;
  text-align: center;
}

/* @MEDIA ------------------------------------------------------------------- */

@media only screen and (max-width: 1300px) {
  .name {
    font-size: 6rem;
  }
}

@media only screen and (max-width: 900px) {
  .name {
    font-size: 4rem;
  }
  #cta {
    font-size: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .name {
    font-size: 4rem;
  }
  #cta {
    font-size: 14px;
  }
  #full_name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #first_names {
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  .name {
    font-size: 2.5rem;
  }
}
</style>

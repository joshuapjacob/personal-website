<template>
  <div id="welcome">
    <div class="center">
      <div id="full_name">
        <div id="first_names" class="name noselect">
          / Joshua Paul
        </div>
        <div id="last_name" class="name noselect">Jacob /</div>
      </div>
      <router-link id="cta" to="/cv"
        >I'm actively seeking an internship in quantitative finance. Hire
        me!</router-link
      >
    </div>
    <div
      id="scroll-button"
      href="#"
      v-scroll-to="{ el: '#about', duration: 700, easing: 'ease-in-out' }"
    >
      <img src="@/assets/icons/down-arrow.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome",
};
</script>

<style scoped>
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

/* SCROLL BUTTON ------------------------------------------------------------ */

#scroll-button {
  position: absolute;
  bottom: 10vh;
  cursor: pointer;
  opacity: 0.5;
  transform: translate(-50%, -50%);
  left: 50%;
  filter: invert(70%);
  transition: 0.3s ease;
  text-decoration: none;
}

#scroll-button:hover {
  filter: invert(95%);
}

#scroll-button img {
  width: 25px;
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

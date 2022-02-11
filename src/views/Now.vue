<template>
  <div id="now">
    <marquees text="NOW" :duration="3" />
    <div>
      <div class="block">
        <h1>WHAT AM I UP TO NOW?</h1>

        <p>
          Some of the things I'm learning this semester include financial
          engineering, stochastic calculus,
          <a href="https://datax.berkeley.edu/" _target="_blank">
            data science with venture applications</a
          >, and hedge fund strategies. I'm working on my capstone project which
          involves applications of reinforcement learning in multi-agent trading
          simulations. I'm trying to run more regularly and get better at chess.
          I'm currently reading
          <a href="https://www.goodreads.com/book/show/10454418-the-most-important-thing" target="_blank"
            >Howard Marks's <i>The Most Important Thing: Uncommon Sense for the Thoughtful Investor</i></a
          >.
          <b
            ><router-link to="/cv"
              >I'm also actively seeking an internship in quantitative finance.
              </router-link
            ></b
          >
        </p>

        <p class="grey">
          Last Updated: February 6<sup>th</sup>, 2022
        </p>
      </div>

      <div id="wakatime" class="block">
        <h1>MY CODING ACTIVITY</h1>
        <p>These graphs are automatically generated and updated live.</p>
        <div id="imgs_container">
          <img
            src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/7a5bc2ba-d2de-4974-96c3-1ce0a1c8e9db.png"
          />
          <img
            src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/48015c72-dab0-4c83-b216-991dbf3ee9c2.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Marquees from "@/components/Marquees.vue";
export default {
  name: "now",
  metaInfo: {
    title: "Now",
  },
  components: {
    Marquees,
  },
};
</script>

<style scoped>
#now {
  width: 100%;
  height: 100vh;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* TEXT --------------------------------------------------------------------- */

.block {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin: 30px;
  position: relative;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
}

p {
  padding: 10px;
}

h1 {
  position: absolute;
  top: -24px;
}

.grey {
  color: grey;
}

/* WAKATIME ----------------------------------------------------------------- */

#imgs_container {
  display: flex;
  flex-direction: row;
}

#wakatime img {
  width: calc(50% - 10px);
  padding-top: 10px;
}

@media only screen and (max-width: 1300px) {
  #imgs_container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #wakatime img {
    width: calc(100% - 10px);
  }
}

@media only screen and (max-width: 700px) {
  h1 {
    font-size: 1.5em;
    top: -18px;
  }
  p {
    font-size: 14px;
  }
}

@media only screen and (max-width: 500px) {
  h1 {
    font-size: 1.25em;
    top: -12px;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1em;
    top: -10px;
  }
}
</style>

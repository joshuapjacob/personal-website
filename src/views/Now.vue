<template>
  <div id="now">
    <marquees text="NOW" :duration="3" />
    <div>
      <div class="block">
        <h1>WHAT AM I UP TO NOW?</h1>

        <p>
          Some of the things I'm learning this semester include theoretical statistics, applications of machine learning
          to electronic markets, and fixed income securities. I've recently joined the Cal Lightweight Rowing club team and I'm working on achieving a sub 7-minute 2K by the end of the semester.
          <br><br>
          I've also been reading a lot about investment management and business. One book I particularly enjoyed, even though I was an intern at BlackRock over the summer, is
          <a href="https://www.goodreads.com/en/book/show/57030638"> Vivek Ramaswamy's "Woke, Inc.: Inside Corporate
            America's Social Justice Scam"</a>.
            <br><br>
          <b>
            <router-link to="/cv">I will be graduating in December 2022 and I'm actively seeking full-time job
              opportunities in quantitative finance. Hire me!</router-link>
          </b>

        </p>

        <p class="grey">Last Updated: September 30<sup>th</sup>, 2022</p>
      </div>

      <div id="wakatime" class="block">
        <h1>MY CODING ACTIVITY</h1>
        <p>
          These graphs are automatically generated and updated live.
          <br>
          <span class="grey">Only personal activity is counted.</span>
        </p>
        
        <div id="imgs_container">
          <img
            src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/7a5bc2ba-d2de-4974-96c3-1ce0a1c8e9db.png" />
          <img
            src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/48015c72-dab0-4c83-b216-991dbf3ee9c2.png" />
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
  max-width: calc(min(1000px, 85vw));
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

@media only screen and (max-height: 1300px) {
  #now {
    margin-top: 40px;
  }
}
</style>

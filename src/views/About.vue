<template>
  <div id="about">
    <marquees text="ABOUT" :duration="5" />
    <div id="left">
      <div class="block">
        <h1>ABOUT ME</h1>
        <p>
          I'm currently a
          <a
            href="https://ieor.berkeley.edu/academics/master-of-engineering/"
            target="_blank"
          >
            Master of Engineerging student at UC Berkeley</a
          >, majoring in <b>Industrial Engineering</b> and
          <b>Operations Research</b> with a specialization in
          <b>Financial Technology</b>. I previously earned a
          <a
            href="https://programmes.polytechnique.edu/en/bachelor/bachelor-of-science"
            target="_blank"
            >Bachelor of Science degree from École Polytechnique</a
          >
          in Paris, France where I majored in <b>Mathematics</b> and
          <b>Computer Science</b>.
        </p>

        <p>
          I'm interested in pursuing a career in <b>Quantitative Finance</b>.
        </p>
        <p><router-link to="/cv">Have a look at my résumé!</router-link></p>
      </div>

      <div class="block">
        <h1>A LITTLE MORE</h1>
        <p>&gt; I'm <span id="age">20</span> years old.</p>

        <p>&gt; I've visited 25 countries and lived on 3 countinents.</p>

        <p>&gt; I'm fluent in English and French.</p>

        <p>&gt; I can code in Python, JavaScript, C++, and OCaml.</p>

        <p>&gt; I love learning and building new things.</p>

        <p>&gt; If you can't already tell, I like to dabble in web design.</p>
      </div>
    </div>

    <div id="right">
      <div id="img_container">
        <img src="@/assets/JoshuaPaulJacob.jpg" alt="Joshua Paul Jacob" />
        <div id="img_decoration"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Marquees from "@/components/Marquees.vue";

export default {
  name: "about",
  data() {
    return {
      birthday: null,
      MS_PER_YEAR: 1000 * 60 * 60 * 24 * 365.2425,
      timer: null,
    };
  },
  methods: {
    computeAge: function() {
      const exact = (Date.now() - this.birthday.getTime()) / this.MS_PER_YEAR;
      document.getElementById("age").innerHTML = (
        Math.floor(exact * 10000000) / 10000000
      ).toFixed(7);
    },
  },
  mounted() {
    this.birthday = new Date("02/03/2001");
    this.timer = setInterval(this.computeAge, 100);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  metaInfo: {
    title: "About",
  },
  components: {
    Marquees,
  },
};
</script>

<style scoped>
#about {
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

#intro {
  margin-top: 50px;
}

#left p {
  padding: 10px;
}

h1 {
  position: absolute;
  top: -24px;
}

/* IMAGE -------------------------------------------------------------------- */

#img_container {
  position: relative;
  margin: -15px 50px 0 0;
}

img {
  height: 543px;
  top: -30px;
  -webkit-box-shadow: 20px 20px 1px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 20px 20px 1px 0px rgba(0, 0, 0, 0.6);
}

@media only screen and (max-width: 1500px) {
  img {
    height: 400px;
  }
}

@media only screen and (max-width: 1300px) {
  #about {
    flex-direction: column;
  }

  #img_container {
    margin: 0 0 50px 0;
  }
  img {
    top: 0;
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
  img {
    height: auto;
    width: 60vw;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1em;
    top: -10px;
  }
  img {
    height: auto;
    width: 50vw;
  }
}
</style>

<template>
  <main>
    <marquees text="PROJECTS" :duration="8" />
    <div id="container">
      <div class="block">
        <h1>Cryptocurrency Trading Bot</h1>
        <h2>
          Statistical Arbitrage
          <a
            href="https://github.com/joshuapjacob/"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          A fully automated bot that identifies statistical arbitrage
          opportunities and trades Binance USD-M cryptocurrency futures.
          Developed with Python and the WebSocket API.
        </p>
      </div>

      <div class="block">
        <h1>My Personal Website</h1>
        <h2>
          joshuapjacob.com
          <a
            href="https://github.com/joshuapjacob/joshuapjacob.com"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          You're looking at it. Built with VueJS and hosted on DigitalOcean
          using Nginx and Docker.
        </p>
      </div>

      <div class="block">
        <h1>My Bachelor Thesis</h1>
        <h2>
          Black-Scholes with Liquidity Risk
          <a
            href="https://github.com/joshuapjacob/bx-thesis"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          Studied the impact of liquidity risk on the super-hedging cost of
          options by relaxing the frictionless assumption of the Black-Scholes
          model with a stochastic supply curve. Implemented numerical models and
          numerically solved PDEs based on literature with Python.
        </p>
      </div>

      <div class="block">
        <h1>A Short Film</h1>
        <h2>
          "Drug Money"
          <a
            href="https://www.youtube.com/watch?v=OAc4AUbRcgE"
            target="_blank"
            title="Watch it on YouTube!"
            ><img src="@/assets/icons/youtube-brands.svg"
          /></a>
        </h2>
        <p>
          A 20-minute short film on the dangers of drugs. Produced as an IB CAS
          project with my high school's filmmaking club in 2018. Directed and
          edited by myself with Adobe Creative Suite.
        </p>
      </div>

      <div class="block">
        <h1>FEEDBACK</h1>
        <h2>
          An Online Audio Sample Sequencer
          <a
            href="https://github.com/joshuapjacob/feedback"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          Final project for my freshman-year web programming course (CSE104 @
          Ecole Polytechnique). Developed using HTML, CSS, and vanilla
          JavaScript (+ Tone.js). The application allows you to select audio
          samples and make beats with them.
        </p>
      </div>

      <div class="block">
        <h1>Fast Fourier Transform</h1>
        <h2>
          Image Compression
          <a
            href="https://github.com/joshuapjacob/fast-fourier-transform-image-compression"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          Final project for my concurrent and distributed computing course
          (CSE305 @ Ecole Polytechnique). Implemented sequential and parallel
          fast Fourier transform algorithms for image compression using C++.
        </p>
      </div>

      <div class="block">
        <h1>Computer Graphics</h1>
        <h2>
          Coursework
          <a
            href="https://github.com/joshuapjacob/computer-graphics"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          Implemented a ray-tracer from scratch, sliced optimal transport color
          matching, and geometry processing algorithms with C++.
        </p>
      </div>

      <div class="block">
        <h1>dotfiles</h1>
        <h2>
          My Linux Configuration Files
          <a
            href="https://github.com/joshuapjacob/dotfiles"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          I use Arch btw without a desktop environment. These are my personal
          configuration files. Feel free to peruse them for inspiration.
        </p>
      </div>

      <div class="block">
        <h1>Mini-ML</h1>
        <h2>
          A Toy ML Interpreter & Type Checker
          <a
            href="https://github.com/joshuapjacob/CSE301-Project"
            target="_blank"
            title="GitHub Repository"
            ><img src="@/assets/icons/github-brands.svg"
          /></a>
        </h2>
        <p>
          Final project for my functional programming course (CSE301 @ Ecole
          Polytechnique). Developed using OCaml.
        </p>
      </div>
    </div>
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
main {
  margin-top: 100px;
  width: 100vw;
  max-width: 1250px;
}

#container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  /* justify-content: center; */
}

.block {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin: 20px 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  width: calc(50% - 20px);
  position: relative;
  height: 200px;
}

h1 {
  position: absolute;
  top: -24px;
  display: flex;
  align-items: center;
}

h2 {
  margin-bottom: 5px;
}

a img {
  filter: invert(50%);
  width: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: 0.3s ease;
}

a img:hover {
  filter: invert(85%);
}
</style>

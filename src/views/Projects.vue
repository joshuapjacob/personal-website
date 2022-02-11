<template>
  <main>
    <marquees text="PROJECTS" :duration="8" />
    <div id="container" class="block">
      <div>
        <h2>Cryptocurrency Trading Bot</h2>
        <h3>
          Statistical Arbitrage
        </h3>
        <ul>
          <li>
            Developed, backtested, and deployed a fully automated bot that
            identifies statistical arbitrage opportunities and trades
            <a href="https://www.binance.com/en/futures"
              >Binance USD-M cryptocurrency perpetual futures</a
            >.
          </li>
          <li>Built with Python, WebSocket protocol, and the Binance API.</li>
          <li>
            Strategy based on
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1153505"
              target="_blank"
              >principal component analysis and linear regression</a
            >.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Personal Website</h2>
            <h3>joshuapjacob.com</h3>
          </div>
          <div>
            <a href="https://joshuapjacob.com/" title="View Project">
              <img src="@/assets/icons/link-solid.svg" />
            </a>
            <a
              href="https://github.com/joshuapjacob/joshuapjacob.com"
              target="_blank"
              title="GitHub Repository"
            >
              <img src="@/assets/icons/github-brands.svg" />
            </a>
          </div>
        </div>
        <ul>
          <li>
            You're looking at it.
          </li>
          <li>
            Built with Vue.js and Three.js. Hosted on DigitalOcean through Nginx
            and Docker.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Bay Wheels Bike Usage Analytics</h2>
            <h3>Applied Statistical Learning</h3>
          </div>
          <div class="right">
            <span>DEC 2021</span>
            <a
              href="https://github.com/joshuapjacob/bay-wheels-bike-usage"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Final project for an applied statistical learning course (INDENG 242
            @ UC Berkeley) in a team of five students.
          </li>
          <li>
            Developed time-series and spatiotemporal models to predict bike
            usage using regression, decision trees, and recurrent neural
            networks.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Optimal Trade Execution Numerical Analysis</h2>
            <h3>Almgren-Chriss Model</h3>
          </div>
          <div class="right">
            <span>NOV 2021</span>
            <a
              href="https://github.com/joshuapjacob/almgren-chriss-optimal-execution"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Project for a market microstructure course (INDENG 223 @ UC
            Berkeley).
          </li>
          <li>
            Studied the liquidation of large positions while minimizing a
            combination of volatility risk and transaction costs.
          </li>
          <li>
            Implemented a solver for the general model to find the optimal
            trading strategy with two correlated assets while taking market
            impact into account.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Fast Fourier Transform Image Compression</h2>
            <h3>Concurrent Computing</h3>
          </div>
          <div class="right">
            <span>JUN 2021</span>
            <a
              href="https://github.com/joshuapjacob/fast-fourier-transform-image-compression"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Final project for a concurrent computing course (CSE305 @ Ecole
            Polytechnique).
          </li>
          <li>
            Implemented sequential and parallel Fast Fourier Transform
            algorithms for image compression with C++.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Ray Tracer</h2>
            <h3>Computer Graphics</h3>
          </div>
          <div class="right">
            <span>MAY 2021</span>
            <a
              href="https://github.com/joshuapjacob/dotfiles"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Coursework for a computer graphics course (CSE306 @ Ecole
            Polytechnique).
          </li>
          <li>
            Developed a ray-tracer from scratch with C++.
          </li>
          <li>
            Implemented sliced optimal transport color matching and geometry
            processing algorithms.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Black-Scholes Model & Liquidity Risk</h2>
            <h3>Bachelor Thesis</h3>
          </div>
          <div class="right">
            <span>MAR 2021</span>
            <a
              href="https://github.com/joshuapjacob/bx-thesis"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Research project at Centre de Mathématiques Appliquées – École
            Polytechnique (CMAP)
          </li>
          <li>
            Studied the impact of liquidity risk on the super-hedging cost of
            options by relaxing the frictionless assumption of the Black-Scholes
            model with a stochastic supply curve.
          </li>
          <li>
            Numerically solved nonlinear partial differential equations based on
            literature with Python.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Mini-ML Interpreter & Type-Checker</h2>
            <h3>Functional Programming</h3>
          </div>
          <div class="right">
            <span>OCT 2020</span>
            <a
              href="https://github.com/joshuapjacob/CSE301-Project"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Final project for a functional programming course (CSE301 @ Ecole
            Polytechnique).
          </li>
          <li>
            Built with OCaml.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>2D Video Game</h2>
            <h3>"X-IT"</h3>
          </div>
          <div class="right">
            <span>JAN 2020</span>
            <a
              href="https://github.com/wak31415/x-it"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Final project for an objected-oriented programming course (CSE201 @
            Ecole Polytechnique).
          </li>
          <li>
            Developed with C++ in a team of five students using SFML.
          </li>
          <li>
            Implemented the A* search algorithm and procedural map generation.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Online Audio Sample Sequencer</h2>
            <h3>"FEEDBACK"</h3>
          </div>
          <div class="right">
            <span>MAY 2019</span>
            <a
              href="https://github.com/joshuapjacob/feedback"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Final project for an introductory web programming course (CSE104 @
            Ecole Polytechnique).
          </li>
          <li>
            Developed using HTML, CSS, vanilla JavaScript and Tone.js.
          </li>
          <li>
            The application allows you to select audio samples and make beats
            with them.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Short Film</h2>
            <h3>"Drug Money"</h3>
          </div>
          <div class="right">
            <span>JUL 2018</span>
            <a
              href="https://www.youtube.com/watch?v=OAc4AUbRcgE"
              target="_blank"
              title="Watch it on YouTube!"
              ><img src="@/assets/icons/youtube-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            Produced a 20-minute short film on the dangers of drugs as an IB CAS
            project with my high school's filmmaking club.
          </li>
          <li>
            Directed and edited by myself with Adobe Creative Suite.
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <div class="top">
          <div>
            <h2>Linux Configuration Files</h2>
            <h3>My Dotfiles</h3>
          </div>
          <div class="right">
            <a
              href="https://github.com/joshuapjacob/dotfiles"
              target="_blank"
              title="GitHub Repository"
              ><img src="@/assets/icons/github-brands.svg"
            /></a>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://knowyourmeme.com/memes/btw-i-use-arch"
              >I use Arch btw</a
            >.
          </li>
          <li>
            Personal configuration for i3, picom, polybar, fish, rofi, termite,
            etc.
          </li>
        </ul>
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
  mounted() {
    window.scrollTo(0,0);
  }
};
</script>

<style scoped>
main {
  margin-top: 85px;
  width: 100vw;
  max-width: 1000px;
}

hr {
  margin: 10px 5px;
  opacity: 0.2;
  width: 100%;
}

ul {
  padding: 0 25px;
  list-style-position: outside;
}

#container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

#container > div {
  width: 100%;
}

.block {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin: 10px 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
}

.right {
  display: flex;
  align-items: center;
}

.right span {
  opacity: 0.5;
  margin: 10px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2,
h3 {
  margin: 5px;
}

li {
  margin: 10px;
}

a img {
  filter: invert(50%);
  width: 24px;
  transition: 0.3s ease;
  margin: 10px;
}

a {
  border: none;
}

a img:hover {
  filter: invert(85%);
}
</style>

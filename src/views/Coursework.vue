<template>
  <div id="coursework">
    <marquees text="COURSEWORK" :duration="10" />
    <div>
      <span></span>
    </div>
    <div class="block">
      <h1>UNIVERSITY OF CALIFORNIA, BERKELEY</h1>
      <h3>M.Eng. Industrial Engineering & Operations Research</h3>
      <ul>
        <li>IEOR 240: Optimization Analytics</li>
        <li>IEOR 241: Risk Modeling, Simulation, and Data Analysis</li>
        <li>IEOR 242: Applications of Statistical Learning</li>
        <li>IEOR 222:	Financial Engineering Systems I - Stochastic Calculus</li>
        <li>IEOR 223:	Financial Engineering Systems II - Market Microstructure</li>
        <li>IEOR 295: A. Richard Newton Lecture Series (Berkeley Changemaker™ Course)</li>
      </ul>
      <ul>
        <li>MBA 236J: Hedge Fund Strategies</li>
      </ul>
      <ul>
        <li>ENGIN 270A: Organizational Behavior for Engineers</li>
        <li>ENGIN 270B: R&D Technology Management & Ethics</li>
        <li>ENGIN 270C: Teaming & Project Management</li>
        <li>ENGIN 270G: Marketing & Product Management</li>
        <li>ENGIN 270J: Industry Analysis for Engineering Leaders</li>
        <li>ENGIN 295: Communications for Engineering Leaders</li>
        <li>ENGIN 296: FinTech Capstone Project</li>
      </ul>
    </div>
    <div class="block">
      <h1>ÉCOLE POLYTECHNIQUE</h1>
      <h3>B.Sc. Mathematics & Computer Science</h3>
      <ul>
        <li>CSE 101/102: Computer Programming with Python</li>
        <li>CSE 103: Introduction to Algorithms & Data Structures</li>
        <li>CSE 104: Web Programming</li>
        <li>CSE 201: Object-oriented Programming with C++</li>
        <li>CSE 202: Design & Analysis of Algorithms</li>
        <li>CSE 203: Logic & Proofs</li>
        <li>CSE 204: Machine Learning</li>
        <li>CSE 205: Computer Architechture</li>
        <li>CSE 207: Computer Networking</li>
        <li>CSE 301: Functional Programming</li>
        <li>CSE 302: Compilers</li>
        <li>CSE 303: Computer Science Research Project</li>
        <li>CSE 305: Concurrent & Distributed Computing</li>
        <li>CSE 306: Computer Graphics</li>
      </ul>
      <ul>
        <li>MAA 101/104: Linear Algebra</li>
        <li>MAA 102/105: Analysis</li>
        <li>MAA 103: Discrete Mathematics</li>
        <li>MAA 106: Introduction to Numerical Analysis</li>
        <li>MAA 107: Mathematical Modeling</li>
        <li>MAA 201: Euclidean & Hermitian Spaces</li>
        <li>MAA 202: Multivariable Calculus</li>
        <li>MAA 203: Introduction to Probability</li>
        <li>MAA 204: Introduction to Statistics</li>
        <li>MAA 206: Quadratic Forms & Applications</li>
        <li>MAA 207: Differential Equations & Series of Functions</li>
        <li>MAA 208: Numerical Linear Algebra</li>
        <li>MAA 209: Numerical Optimization</li>
        <li>MAA 301: Measure Theory & Integration</li>
        <li>MAA 302: Topology & Differential Calculus</li>
        <li>MAA 304: Asymptotic Statistics</li>
        <li>MAA 305: Stochastic Processes</li>
        <li>MAA 308/309: Image Analysis</li>
        <li>MAA 313: Mathematical Modeling Seminar</li>
      </ul>
      <ul>
        <li>PHY 101: Mechanics & Heat</li>
        <li>PHY 104: Electromagnetism & Light</li>
        <li>PHY 102/105: Mathematical Methods for Physics</li>
        <li>PHY 103/106: Beginner Physics Lab</li>
      </ul>
      <ul>
        <li>ECO 101: Introduction to Economics</li>
        <li>CHE 101: Introduction to Chemistry</li>
        <li>CLT 101: General Culture</li>
        <li>HSS 101: Major Issues in Today's World & France</li>
        <li>HSS 201: History of Science & Technology</li>
        <li>HSS 202: Philosophy of Science & Technology</li>
        <li>HSS 301: Masterpieces of Western Literature</li>
        <li>MIE 301: Fundamentals of Management</li>
        <li>LAN 301/302 FRE: Advanced French</li>
      </ul>
    </div>
    <div class="block">
      <h1>ONLINE COURSEWORK</h1>
      <h3>MITx</h3>
      <ul>
        <li>15.481x: Adaptive Markets - Financial Market Dynamics and Human Behavior</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Marquees from "@/components/Marquees.vue";

export default {
  name: "Coursework",
  components: {
    Marquees,
  },
  metaInfo: {
    title: "Coursework",
  },
  mounted() {
    window.scrollTo(0,0);
  }
};
</script>

<style scoped>
#coursework {
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

ul {
  padding: 2px 20px;
  list-style-type: "> ";
  list-style-position: outside;
}

li {
  margin: 10px;
}
</style>
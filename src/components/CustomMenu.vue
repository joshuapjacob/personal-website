<template>
  <div id="nav-container">
    <nav class="nav-fixed">
      <p><router-link to="/about">/ ABOUT /</router-link></p>
      <p><router-link to="/now">/ NOW /</router-link></p>
      <p><router-link to="/cv">/ CV /</router-link></p>
      <p><router-link to="/projects">/ PROJECTS /</router-link></p>
      <p><router-link to="/coursework">/ COURSEWORK /</router-link></p>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: null,
      prevScrollPosition: null,
    };
  },
  mounted() {
    this.navbar = document.querySelector(".nav-fixed");
    this.prevScrollPosition = window.scrollY;
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollPosition > currentScrollPos) {
        this.navbar.style.top = "0";
      } else {
        this.navbar.style.top = "-70px";
      }
      if (currentScrollPos > 50) {
        this.navbar.classList.add("nav-active");
      } else {
        this.navbar.classList.remove("nav-active");
      }
      this.prevScrollPosition = currentScrollPos;
    };
  },
};
</script>

<style>
#nav-container {
  display: flex;
  justify-content: center;
}

.nav-fixed {
  width: calc(100vw - 20px);
  max-width: 940px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  position: fixed;
  margin-top: 20px;
  padding: 0 60px;
  top: 0;
  z-index: 1;
  transition: ease 0.3s;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(48, 20, 20, 0.6);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);
}

.nav-active {
  background-color: black;
}

.nav-fixed p {
  font-weight: 400;
  font-size: 14px;
  padding: 10px 40px;
}

.router-link-exact-active {
  color: white;
  opacity: 1;
  font-weight: 600;
}
</style>

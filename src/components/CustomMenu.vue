<template>
  <nav class="nav-fixed">
    <p><router-link to="/about">/ ABOUT /</router-link></p>
    <p><router-link to="/now">/ NOW /</router-link></p>
    <p><router-link to="/cv">/ CV /</router-link></p>
    <p><router-link to="/projects">/ PROJECTS /</router-link></p>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbar: null,
    };
  },
  mounted() {
    this.navbar = document.querySelector(".nav-fixed");
    window.onscroll = () => {
      if (window.scrollY > 300) {
        this.navbar.classList.add("nav-active");
      } else {
        this.navbar.classList.remove("nav-active");
      }
    };
  },
};
</script>

<style>
.nav-fixed {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: ease 0.3s;
}

.nav-active {
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8);
}

.nav-fixed p {
  font-weight: 400;
  font-size: 16px;
  padding: 30px 40px;
}

.router-link-exact-active {
  color: white;
  opacity: 1;
  font-weight: 600;
}
</style>

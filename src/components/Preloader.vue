<template>
  <transition name="fade">
    <div v-if="show" id="preloader">
      <img src="@/assets/logo.png" alt="Joshua Paul Jacob Logo" />
      <p class="chrome">Loading...</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.toggle();
  },
  methods: {
    toggle() {
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.show = !this.show;
      }, 2000);
    },
  },
};
</script>

<style scoped>
#preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: black;
  cursor: wait;
}

img {
  width: 100px;
}

p {
  margin-top: 1rem;
  font-family: "Lato", sans-serif;
  color: gray;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-active img,
.fade-leave-active img {
  animation: scaleOut 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes shine {
  0% {
    background-position: -100px;
  }
  100% {
    background-position: 100px;
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.75);
  }
}
</style>

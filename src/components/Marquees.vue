<template>
  <div>
    <div class="marquee-container" id="marquee-left">
      <marquee-text :repeat="100" :duration="duration">
        <span>{{ text }}</span>
      </marquee-text>
    </div>

    <div class="marquee-container" id="marquee-right">
      <marquee-text :repeat="100" :duration="duration">
        <span>{{ text }}</span>
      </marquee-text>
    </div>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  props: ["text", "duration"],
  components: {
    MarqueeText,
  },
};
</script>

<style scoped>
.marquee-container {
  width: 100vh;
  position: fixed;
  top: 50%;
  opacity: 0.25;
  z-index: 2;
}

#marquee-right {
  transform: translate(-50%, -50%) rotate(90deg);
  right: calc(-100vh + 9vw);
}

#marquee-left {
  transform: translate(-50%, -50%) rotate(270deg);
  left: 9vw;
}

.marquee-container span {
  margin-right: 10px;
  font-family: "Roboto Mono", monospace;
  user-select: none;
  cursor: default;
}

@media only screen and (max-width: 900px) {
  #marquee-left {
    display: none;
  }
  #marquee-right {
    right: calc(-100vh + 6vw);
  }
}

@media only screen and (max-width: 600px) {
  #marquee-right {
    right: calc(-100vh + 5vw);
  }
}

@media only screen and (max-width: 1200px) {

  .marquee-container {
    display: none;
  }

}
</style>

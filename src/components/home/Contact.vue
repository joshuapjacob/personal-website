<template>
  <div id="contact">
    <div class="block">
      <h1>GET IN TOUCH</h1>
      <p>
        I'm always looking for my next opportunity. Feel free to get in touch!
        <a
          href="mailto:contact@joshuapjacob.com?subject=Hello"
          title="Say Hello!"
          >My inbox is always open.</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  width: 100%;
  max-width: 1250px;
  margin-top: -30px;
}

.block {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  margin: 30px;
  position: relative;
  width: calc(100% - 60px);
}

h1 {
  position: absolute;
  top: -24px;
}

p {
  padding: 10px;
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
  p {
    font-size: 12px;
    text-align: center;
  }
}
</style>

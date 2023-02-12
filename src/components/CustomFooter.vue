<template>
  <div id="footer">
    <div id="inner">
      <div class="vl"></div>
      <p>Ⓒ Joshua Paul Jacob 2023 — All Rights Reserved</p>
      <div class="vl"></div>
      <a href="https://github.com/joshuapjacob/joshuapjacob.com" target="_blank" title="GitHub Repository">
        &lt; view source code /&gt;
      </a>
      <div class="vl"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3vw;
}

#inner {
  writing-mode: vertical-rl;
  display: flex;
  height: 100vh;
  align-items: center;
}

/* VERTICAL LINES */

.vl {
  width: 1px;
  background-color: grey;
  flex-grow: 1;
}

p {
  margin: 10px 0;
  font-size: 12px;
  color: grey;
}

a {
  text-decoration: none;
  color: grey;
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  margin: 10px;
  transition: 0.3s ease;
  border: 0px;
  transform: translateX(2px);
}

a:hover {
  color: lightgrey;
}
</style>

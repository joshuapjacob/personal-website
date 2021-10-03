<template>
  <div id="footer">
    <div id="inner">
      <p>Ⓒ Joshua Paul Jacob 2021 — All Rights Reserved</p>
      <a
        href="https://github.com/joshuapjacob/joshuapjacob.com"
        target="_blank"
      >
        &lt; view source code /&gt;
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  margin-top: 5px;
}

#footer {
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#inner {
  font-size: 14px;
  opacity: 0.75;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0);
}

@media only screen and (max-width: 900px) {
  #inner {
    font-size: 12px;
  }
}

@media only screen and (max-width: 600px) {
  #inner {
    font-size: 10px;
  }
}
</style>

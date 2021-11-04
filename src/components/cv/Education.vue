<template>
  <div>
    <div class="item">
      <img
        class="logo"
        src="@/assets/logos/berkeley_alt.png"
        alt="Joshua Paul Jacob"
      />
      <div class="item-details">
        <div class="title">
          <h3>University Of California, Berkeley</h3>
          <h3>Berkeley, CA, USA</h3>
        </div>
        <div class="subtitle">
          <h4>
            M.Eng.
            <a href="https://ieor.berkeley.edu/about/what-is-ieor/"
              >Industrial Engineering & Operations Research</a
            > <br>
            Financial Technology Specialization
          </h4>
          <h4>Aug 2021 - Dec 2022</h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img
        class="logo"
        src="@/assets/logos/polytechnique.png"
        alt="Joshua Paul Jacob"
      />
      <div class="item-details">
        <div class="title">
          <h3>École Polytechnique</h3>
          <h3>Palaiseau, France</h3>
        </div>
        <div class="subtitle">
          <h4>
            B.Sc. Mathematics & Computer Science
          </h4>
          <h4>Sep 2018 - Jun 2021</h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="logo" src="@/assets/logos/ib.png" />
      <div class="item-details">
        <div class="title">
          <h3>École Internationale Bilingue - Victor Hugo</h3>
          <h3>Paris, France</h3>
        </div>
        <div class="subtitle">
          <h4>
            International Baccalaureate Diploma
          </h4>
          <h4>Sep 2014 - Jun 2018</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 75px;
  margin: 10px;
  filter: grayscale(1) contrast(0) brightness(100);
}

.item {
  display: flex;
  align-items: center;
  padding: 10px;
}

.item-details {
  width: 100%;
  margin-left: 20px;
}

/* .title,
.subtitle {
  display: flex;
  justify-content: space-between;
} */
</style>

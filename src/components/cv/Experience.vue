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
          <h3>University of California, Berkeley</h3>
          <h3>Berkeley, CA, USA</h3>
        </div>
        <div class="subtitle">
          <h4>
            Graduate Student Instructor - Physics
          </h4>
          <h4>Aug 2022 - Dec 2022</h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img
        class="logo"
        src="@/assets/logos/blackrock.png"
        alt="Joshua Paul Jacob"
      />
      <div class="item-details">
        <div class="title">
          <h3>BlackRock</h3>
          <h3>San Francisco, CA, USA</h3>
        </div>
        <div class="subtitle">
          <h4>
            Quantitative Research Intern - Systematic Active Equities
          </h4>
          <h4>Jun 2022 - Aug 2022</h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img
        class="logo"
        src="@/assets/logos/jpmorgan.png"
        alt="Joshua Paul Jacob"
      />
      <div class="item-details">
        <div class="title">
          <h3>J.P. Morgan Chase & Co.</h3>
          <h3>Remote</h3>
        </div>
        <div class="subtitle">
          <h4>
            Capstone Project - Aritificial Intelligence Research
          </h4>
          <h4>Dec 2021 - Apr 2022</h4>
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
          <h3>Centre de Mathématiques Appliquées - École Polytechnique (CMAP)</h3>
          <h3>Palaiseau, France</h3>
        </div>
        <div class="subtitle">
          <h4>
            Research Intern - Financial Mathematics
          </h4>
          <h4>Jan 2021 - Mar 2021</h4>
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
          <h3>Laboratoire d'Informatique de l'École Polytechnique (LIX)</h3>
          <h3>Palaiseau, France</h3>
        </div>
        <div class="subtitle">
          <h4>
            Research Intern - Symbolic Computation
          </h4>
          <h4>Sep 2020 - Dec 2020</h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="logo" src="@/assets/logos/loreal.png" />
      <div class="item-details">
        <div class="title">
          <h3>L'Oréal</h3>
          <h3>Clichy, France</h3>
        </div>
        <div class="subtitle">
          <h4>
            Summer Intern - Web Development
          </h4>
          <h4>Jul 2019 - Aug 2019</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
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
</style>
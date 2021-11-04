<template>
  <div class="container">
    <div class="item">
      <img class="logo" src="@/assets/logos/mitx.png" alt="Joshua Paul Jacob" />
      <div class="item-details">
        <div class="title">
          <h3>MITx 15.481x</h3>
        </div>
        <div class="subtitle">
          <h4>
            Adaptive Markets: Financial Market Dynamics and Human Behavior
          </h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img
        class="logo"
        style="padding:10px;"
        src="@/assets/logos/deeplearningai.png"
        alt="Joshua Paul Jacob"
      />
      <div class="item-details">
        <div class="title">
          <h3>DeepLearning.AI</h3>
        </div>
        <div class="subtitle">
          <h4>
            Deep Learning Specialization
          </h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="logo" src="@/assets/logos/tcf.png" />
      <div class="item-details">
        <div class="title">
          <h3>Test de Connaissance du Français</h3>
        </div>
        <div class="subtitle">
          <h4>
            Niveau C1
          </h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="logo" style="padding:10px;" src="@/assets/logos/google.png" />
      <div class="item-details">
        <div class="title">
          <h3>Google</h3>
        </div>
        <div class="subtitle">
          <h4>
            Fundamentals of Digital Marketing
          </h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img class="logo" src="@/assets/logos/ga.png" />
      <div class="item-details">
        <div class="title">
          <h3>General Assembly</h3>
        </div>
        <div class="subtitle">
          <h4>
            Certified Marketer (Level 1)
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

.logo {
  width: 75px;
  margin: 10px;
  filter: grayscale(1) contrast(0) brightness(100);
}

.item {
  flex: 50%;
  display: flex;
  align-items: center;
  padding: 10px;
}

.item-details {
  width: 100%;
  margin-left: 20px;
}
</style>

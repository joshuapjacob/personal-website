<template>
  <div>
    <div class="item">
      <img class="logo" style="padding:15px" src="@/assets/logos/ft.png" alt="Joshua Paul Jacob" />
      <div class="item-details">
        <div class="title">
          <h3>Financial Times x Bocconi Talent Challenge</h3>
        </div>
        <div class="subtitle">
          <h4>
            2021 Participant
          </h4>
        </div>
      </div>
    </div>

    <div class="item">
      <img
        class="logo"
        src="@/assets/logos/zr.png"
        alt="Joshua Paul Jacob"
      />
      <div class="item-details">
        <div class="title">
          <h3>MIT Zero Robotics High School Tournament 2017</h3>
        </div>
        <div class="subtitle">
          <h4>
            Team Leader (International Finalist - 3rd Place)
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

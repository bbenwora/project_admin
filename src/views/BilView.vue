<template>
  <div>
    <div class="d-flex">
      <v-checkbox
        v-model="readonly"
        label="Read"
      ></v-checkbox>
    </div>

    <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Ring Order</v-expansion-panel-header>
        <v-expansion-panel-content>
          <h5 class="card-title">ÉTINCELLE DE CARTIER</h5>
          <v-img
      height="250"
      src="./img/แหวนไวท์โกล์ว.png"
    ></v-img>
    <p class="card-text">color : Whitegold</p>
    <p class="card-text">Alexandrite : Diamond</p>
    <p class="card-text">ring : 52 mm</p>
    <p class="card-text">price : 150,000 THB</p>
        </v-expansion-panel-content>

        <v-expansion-panel-content>
          <h5 class="card-title">ÉTINCELLE DE CARTIER</h5>
          <v-img
      height="250"
      src="./img/โรสโกลด์, เพชร.png"
    ></v-img>
    <p class="card-text">color : Rosegold</p>
    <p class="card-text">Alexandrite : Diamond</p>
    <p class="card-text">ring : 52 mm</p>
    <p class="card-text">price : 100,000 THB</p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Necklace Order</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-img
      height="250"
      src="./img/H.png"
    ></v-img>
          <h5 class="card-title"> C DE CARTIER</h5>
    <p class="card-text">color : Rosegold</p>
    <p class="card-text">Alexandrite : Diamond</p>
    <p class="card-text">price : 58,500 THB</p>

        </v-expansion-panel-content>

        <v-expansion-panel-content>
          <v-img
      height="250"
      src="./img/สร้อยมุก.png"
    ></v-img>
          <h5 class="card-title"> C DE CARTIER</h5>
    <p class="card-text">color : Rosegold</p>
    <p class="card-text">Alexandrite : Pearl</p>
    <p class="card-text">price : 50,000 THB</p>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>




<script>
  export default {
    data: () => ({
      panel: [0, 1],
      readonly: false,
    }),
  }
</script>
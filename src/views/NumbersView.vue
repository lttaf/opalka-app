<template>
  <v-container class="page-container" fill-height fluid>
    <v-row>
      <v-btn @click="onHomeClick">Домой</v-btn>
    </v-row>
    <v-row>
      <div class="ma-2" v-for="(item, index) in this.numberList" :key="index">
        <div
          class="icon-container"
          :style="`background-color: ${item.backgroundColor}`"
        >
          <span class="icon-text" :style="`color: ${item.color}`">{{
            item.number
          }}</span>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from "vue";

import { mapState } from 'vuex'

export default defineComponent({
  name: "HomeView",

  computed: {
    ...mapState({
        numberList: state => state.numberList,
    })
  },

  methods: {
    onHomeClick() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
<style scoped>
.icon-container {
  border-radius: 50%;
  display: inline-block;
  height: 50px;
  font-weight: bold;
  font-size: 1.2em;
  width: 50px;
  margin: 0 auto;
  cursor: pointer;
}

.icon-text {
  display: table-cell;
  vertical-align: middle;
  height: 50px;
  width: 50px;
  text-align: center;
  padding: 0 15px;
}
</style>
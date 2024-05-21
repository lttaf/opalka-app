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
@import "~@/assets/css/styles.css";
</style>
<template>
  <v-container class="page-container" fill-height fluid>
    <v-row>
      <v-btn @click="onHomeClick">Домой</v-btn>
    </v-row>
    <v-row>
      <div class="ma-2" v-for="(item, index) in this.numberList" :key="index">
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <div v-bind="props" class="icon-container" :style="`background-color: ${item.background_color}`">
              <span class="icon-text" :style="`color: ${item.font_color}`">{{
                item.id
                }}</span>
            </div>
          </template>
          <div class="d-flex flex-column">
            <span>Имя: {{ item.name }}</span>
            <span>Сообщение: {{ item.message }}</span>
          </div>
        </v-tooltip>
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
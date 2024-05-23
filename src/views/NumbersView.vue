<template>
  <v-container class="page-container" fill-height fluid>
    <v-row class="justify-center align-center d-flex flex-column">
      <v-btn class="mt-10" size="large" prepend-icon="mdi-home" variant="text" @click="onHomeClick">На главную</v-btn>
    </v-row>
    <v-progress-linear v-if="numbersLoading" color="primary" class="my-10" height="6" indeterminate
      rounded></v-progress-linear>
    <v-row>
      <div class="d-flex flex-wrap numbers-container pa-15">
        <div v-for="(item, index) in this.numberList" :key="index">
          <v-tooltip location="bottom" opacity="1">
            <template v-slot:activator="{ props }">
              <div v-bind="props" class="icon-container" :style="`background-color: ${item.background_color}`">
                <span class="icon-text" :style="`color: ${item.font_color}`">{{
                  item.id
                  }}</span>
              </div>
            </template>
            <div class="d-flex flex-column">
              <span>#{{ item.id }}</span>
              <span>Имя: {{ item.author }}</span>
              <span>Сообщение: {{ item.message }}</span>
            </div>
          </v-tooltip>
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

  data() {
    return {
      numbersLoading: false,
    }
  },

  computed: {
    ...mapState({
      numberList: state => state.numberList,
    })
  },

  methods: {
    onHomeClick() {
      this.$router.push({ name: "home" });
    },

    fetchData() {
      this.numbersLoading = true
      this.$store.dispatch("fetchNumberList").then(() => {
        this.numbersLoading = false
      })
    },
  },

  created() {
    this.fetchData()
  }
});
</script>
<style scoped>
@import "~@/assets/css/styles.css";

.numbers-container {
  overflow-y: auto;
}
</style>
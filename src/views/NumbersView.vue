<template>
  <v-container class="page-container" fill-height fluid>
    <v-row>
      <v-btn class="my-10" @click="onHomeClick">Домой</v-btn>
    </v-row>
    <v-row>
      <div v-for="(item, index) in this.numberList" :key="index">
        <v-tooltip location="bottom">
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
</style>
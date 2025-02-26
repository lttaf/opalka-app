<template>
  <div>
    <div class="justify-center align-center d-flex btn-container pb-10">
      <v-btn class="mt-10" size="large" prepend-icon="mdi-home" variant="text" @click="onHomeClick">На главную</v-btn>
    </div>
    <v-progress-linear v-if="numbersLoading" color="primary" class="my-10" height="6" indeterminate
      rounded></v-progress-linear>
    <div class="full-height">
      <div class="d-flex flex-wrap justify-center numbers-container px-15 pb-5">
        <div v-for="(item, index) in this.numberList" :key="index">
              <div v-bind="props" class="icon-container tooltip" :style="`background-color: ${item.background_color}`">
                <span class="icon-text" :style="`color: ${item.font_color}`">{{
                  item.id
                  }}</span>
                  <div class="d-flex flex-column tooltiptext">
                    <span class="mb-2">#{{ item.id }}</span>
                    <span>Имя: <span class="text-muted">{{ item.author }}</span></span>
                    <span>Сообщение: <span class="text-muted">{{ item.message }}</span></span>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
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
  height: 90vh;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  max-width: 200px;
  background-color: rgba(47, 47, 47, 0.934);
  color: #e8e6e6;
  font-size: 0.9rem;
  padding: 15px 15px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  display: block;

  top: 100%;
  left: 50%;
  margin-left: -100px;
  word-break: break-word;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(47, 47, 47, 0.934) transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.text-muted {
  color: #a2a1a1;
}

.btn-container {
  height: 10vh;
}
</style>
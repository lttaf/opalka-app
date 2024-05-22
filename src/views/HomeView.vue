<template>
  <v-container class="page-container" fill-height fluid>
    <v-row>
      <v-btn @click="onParticipateClick">Принять участие</v-btn>
      <v-btn @click="onShowListClick">Просмотр</v-btn>
    </v-row>
    <v-row>
      <v-col cols="12">
      <NumberForm v-show="showForm" @submit-form="onSubmitForm" @cancel-form="onCancelForm" />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

import NumberForm from "@/components/NumberForm.vue"

export default defineComponent({
  name: 'HomeView',

  components: {
    NumberForm,
  },

  data() {
    return {
      showForm: false,
      savingData: false,
    }
  },

  methods: {
    onParticipateClick() {
      this.showForm = true
    },
    onShowListClick() {
      this.$router.push({ name: 'numbers' })
    },
    onSubmitForm(data) {
      this.savingData = true
      // this.$store.dispatch("addNewNumber", data).then(() => {
      //   this.savingData = false
      // })
    },
    onCancelForm() {
      this.showForm = false
    },
  },
});
</script>
<style scoped>
.page-container {
  height: 100%;
}
</style>
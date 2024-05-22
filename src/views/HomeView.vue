<template>
  <v-container class="page-container d-flex" fill-height fluid>
    <v-row>
      <v-col class="justify-center align-center d-flex flex-column" cols="12">
        <NumberForm v-if="showForm" @submit-form="onSubmitForm" @cancel-form="onCancelForm" />
        <template v-else>
        <v-btn class="buttons--average" @click="onParticipateClick" variant="outlined">Принять участие</v-btn>
        <v-btn class="buttons--average my-3" @click="onShowListClick" variant="plain">Просмотр</v-btn>
      </template>
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
      this.$store.dispatch("addNewNumber", data).then(() => {
        this.savingData = false
        this.$router.push({ name: "numbers" })
      })
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

.buttons--average {
  min-width: 15%;
}
</style>
<template>
  <v-container class="page-container d-flex" fill-height fluid>
    <v-row>
      <v-col class="justify-center align-center d-flex flex-column container--dark" cols="6">
        <div class="px-10">
          <div class="text-h1 text-courier">Humanity<v-icon size="x-small">mdi-chevron-left</v-icon> </div>
          <div class="text-h1 ml-5 mb-4 text-courier"><v-icon size="x-small">mdi-chevron-right</v-icon>Numbers</div>
          <v-divider class="mb-5 mt-1" color="white" opacity="0.7" :thickness="2"></v-divider>
          <div class="text-body-2 text-courier">
            В основе проекта HUMANITY&lt;&gt;NUMBERS лежит работа польского художника-концептуалиста Романа Опалки
            1965/1-∞. В
            своей работе Роман Опалка писал на холстах ряд натуральных чисел, начиная с единицы. Он начал этот проект
            в 1965 году и работал над ним всю оставшуюся жизнь, так и не закончив свою работу. Главная цель его работы
            была показать бесконечность и превосходство числового ряда, насколько человек ничтожен в сравнении с
            бесконечностью. Опалка планировал закончить свою работу на 7.777.777, но не дожил до этого момента.
          </div>
          <div class="text-body-2 text-courier mt-2">
            Проект HUMANITY&lt;&gt;NUMBERS предлагает каждому желающему поучаствовать в создании числового ряда и
            оставить
            свой след в этом проекте.
          </div>
        </div>
      </v-col>
      <v-col class="justify-center align-center d-flex flex-column" cols="6">
        <v-slide-x-transition :duration="150" mode="out-in">
          <div v-if="showSuccessCard">
            <v-card color="black" width="110%">
              <v-card-title class="pa-5"><v-icon
                  class="ml-1 mr-2 mb-1">mdi-check-circle-outline</v-icon>Готово</v-card-title>
              <v-card-text>
                <div class="d-flex justify-center text-subtitle-1">Ваш номер:&nbsp;<span class="font-weight-black">{{
                    createdNumber }}</span>&nbsp;!</div>
              </v-card-text>
              <v-card-actions class="pa-5">
                <v-btn @click="onCloseSuccessMessage" color="pink" variant="text">Закрыть</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="onShowListClick" color="white" variant="tonal">Перейти к ряду</v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <NumberForm v-else-if="showForm" :loading="savingData" @submit-form="onSubmitForm"
            @cancel-form="onCancelForm" />
          <div class="d-flex flex-column" v-else>
            <v-btn class="buttons--average my-3" height="60" color="black" @click="onParticipateClick">Принять
              участие</v-btn>
            <v-btn class="buttons--average my-3" @click="onShowListClick" variant="plain"> Просмотр ряда </v-btn>
          </div>
        </v-slide-x-transition>
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
      showSuccessCard: false,
      createdNumber: 10,
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
      this.$store.dispatch("addNewNumber", data).then((response) => {
        this.createdNumber = response.data.id
        this.savingData = false
        this.showSuccessCard = true
      })
    },
    onCancelForm() {
      this.showForm = false
    },
    onCloseSuccessMessage() {
      this.showForm = false
      this.showSuccessCard = false
    },
  },
});
</script>
<style scoped>
.page-container {
  height: 100%;
}

.buttons--average {
  min-width: 200px;
}

.text-courier {
  font-family: "Courier New", monospace;
  color: white;
}

.container--dark {
  background-color: black;
}
</style>
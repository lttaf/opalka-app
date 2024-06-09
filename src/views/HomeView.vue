<template>
  <v-container class="page-container d-flex" fill-height fluid>
    <v-row :class="containerClass">
      <v-col class="justify-center align-center d-flex flex-column container--dark" cols="12" md="6">
        <div class="px-10">
          <div :class="headerClass">
            <div class="header__line">Humanity<v-icon size="x-small">mdi-chevron-left</v-icon> </div>
            <div class="ml-5 mb-4 header__line"><v-icon size="x-small">mdi-chevron-right</v-icon>Numbers</div>
          </div>
          <v-divider class="mb-5 mt-1" color="white" opacity="0.7" :thickness="2"></v-divider>
          <div class="h4 text-main">
            В основе проекта HUMANITY&lt;&gt;NUMBERS лежит работа польского художника-концептуалиста Романа Опалки
            1965/1-∞. В
            своей работе Роман Опалка писал на холстах ряд натуральных чисел, начиная с единицы. Он начал этот проект
            в 1965 году и работал над ним всю оставшуюся жизнь, так и не закончив свою работу. Главная цель его работы
            была показать бесконечность и превосходство числового ряда, насколько человек ничтожен в сравнении с
            бесконечностью. Опалка планировал закончить свою работу на 7.777.777, но не дожил до этого момента.
          </div>
          <div class="h4 text-main mt-2 mb-5">
            Проект HUMANITY&lt;&gt;NUMBERS предлагает каждому желающему поучаствовать в создании числового ряда и
            оставить
            свой след в этом проекте.
          </div>
        </div>
      </v-col>
      <v-col class="justify-center align-center d-flex flex-column" cols="12" md="6">
        <v-slide-x-transition :duration="150" mode="out-in">
          <div v-if="showSuccessCard">
            <v-card color="black" width="100%">
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
          <div :class="btnContainerClass + ' d-flex flex-column'" v-else>
            <v-btn class="buttons--average my-3" color="black" @click="onParticipateClick">Принять
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

  computed: {
    headerClass() {
      if (this.$vuetify.display.xs) return "text-h3 text-main"
      else 
      return "text-h1 text-main"
    },

    containerClass() {
      if (this.$vuetify.display.xs) return "container--small"
      else return ""
    },

    btnContainerClass() {
      if (this.$vuetify.display.xs) return "container__buttons--mobile"
      else return "container__buttons"
    },
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
  min-height: 80px;
  font-size: large;
}

.text-main {
  font-family: "Courier New", monospace;
  color: white;
  font-size: 20px;
}

.container--dark {
  background-color: black;
}

.container__buttons--mobile {
  width: 90%;
}

.container__buttons {
  width: 40%;
}

.header__line {
  white-space: nowrap;
}

.container--small {
  width: 90%;
}
</style>
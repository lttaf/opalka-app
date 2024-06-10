import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    numberList: [],
  },
  getters: {
  },
  mutations: {
    setNumberList(state, numberList) {
      state.numberList = numberList
    },
  },
  actions: {
    fetchNumberList({ commit }) {
      // const multipliedData = []
      // for (let i = 0; i < 500; i++) {
      //   multipliedData.push({
      //     id: "10000",
      //     name: "eeee",
      //     font_color: "#f6f6f6",
      //     background_color: "#aaaaaa",
      //     message: "dddqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
      //   })
      // }
      // commit("setNumberList", multipliedData)
      return axios.get("/PigAPI/numbers_list").then((response) => {
        commit("setNumberList", response.data)
      })
    },

    addNewNumber(_, newNumberData) {
      return axios.post("/PigAPI/numbers_list", newNumberData)
    },
  },
  modules: {
  }
})

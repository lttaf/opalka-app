import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    numberList: [
      {
        number: "1",
        name: "eeee",
        color: "#f6f6f6",
        backgroundColor: "#aaaaaa",
      },
      {
        number: "2",
        name: "hehe",
        color: "#f6f6f6",
        backgroundColor: "#aaaaaa",
      },
      {
        number: "3",
        name: "ooooo",
        color: "#f6f6f6",
        backgroundColor: "#aaaaaa",
      },
      {
        number: "4",
        name: "rrrrr",
        color: "#f6f6f6",
        backgroundColor: "#aaaaaa",
      },
    ],
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
      return axios.get("/api/number_list").then((response) => {
        commit("setNumberList", response.data)
      })
    },

    addNewNumber(_, newNumberData) {
      return axios.post("/api/number_list", newNumberData)
    },
  },
  modules: {
  }
})

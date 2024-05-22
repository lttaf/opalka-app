import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    numberList: [
      {
        id: "1",
        name: "eeee",
        font_color: "#f6f6f6",
        background_color: "#aaaaaa",
        message: "",
      },
      {
        id: "2",
        name: "hehe",
        font_color: "#f6f6f6",
        background_color: "#aaaaaa",
        message: "who dis",
      },
      {
        id: "3",
        name: "ooooo",
        font_color: "#f6f6f6",
        background_color: "#aaaaaa",
        message: "hello world",
      },
      {
        id: "4",
        name: "rrrrr",
        font_color: "#f6f6f6",
        background_color: "#aaaaaa",
        message: "uu aa ooooo",
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

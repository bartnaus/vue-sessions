/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import products from "./products";

export default {
  state: () => ({
    name: "Harrie Bakker",
    address: { street: "Testlaan" },
  }),
  namespaced: true,
  mutations: {
    updateCustomer(state: any, { name, street }) {
      state.name = name;
      state.address.street = street;
    },
  },
  actions: {
    updateCustomer({ commit }, { name, street }) {
      commit("updateCustomer", { name, street });
    },
  },
  getters: {},
  modules: { products },
};

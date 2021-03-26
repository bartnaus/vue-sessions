import customer from "./customer";

export default {
  state: customer.state,
  namespaced: true,
  mutations: customer.mutations,
  actions: customer.actions,
  getters: customer.getters,
  modules: customer.modules,
};

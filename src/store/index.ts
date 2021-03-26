import { createLogger, createStore } from "vuex";
import sessions from "./modules/sessions";

const store = createStore({
  plugins: [createLogger()],
  state: {
    hello: "world",
    user: { name: "Bart Naus", role: "Betweter" },
  },
  mutations: {},
  actions: {},
  modules: { sessions },
});

export default store;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { store } from "../index";
import { v4 as uuidv4 } from "uuid";
import customer from "./customer";
import { addSession } from "../index";

export default {
  namespaced: true,
  state: {
    activeSession: null,
    sessions: ["asd"],
  },
  mutations: {
    addSession(state: any, sessionId: string) {
      state.sessions.push(sessionId);
    },
    removeSession(state: any, sessionId: string) {
      const newSessions = state.sessions.filter(
        (item: string) => item !== sessionId
      );

      if (newSessions.length === 0) {
        console.log("Last session removed");
        state.active = null;
      }

      if (state.active === sessionId) {
        console.log("Active session is removed");
        const lastItem = newSessions[newSessions.length - 1];
        state.active = lastItem;
      }

      state.sessions = newSessions;
    },
    setActiveSession(state: any, sessionId: string) {
      state.active = sessionId;
    },
  },
  actions: {
    addSession({ commit }, sessionId: string) {
      // const sessionId = uuidv4();
      // store.registerModule(sessionId, customer);
      // should we create a seperate store here?
      // createStore()

      // const store = createStore({
      //   plugins: [createLogger()],
      //   state: {
      //     hello: "world",
      //     user: { name: "Bart Naus", role: "Betweter" },
      //     activeCustomer: null,
      //   },
      //   mutations: {},
      //   actions: {},
      //   modules: { sessions },
      // });

      commit("addSession", sessionId);
      commit("setActiveSession", sessionId);
    },
    removeSession({ commit }, sessionId: string) {
      // store.unregisterModule(sessionId);
      commit("removeSession", sessionId);
    },
    setActiveSession({ commit }, sessionId: string) {
      commit("setActiveSession", sessionId);
      // dispatch("setActivateSession", sessionId, { root: true });
      // store.registerModule("activeCustomer", store.modules[sessionId]);
    },
  },
  getters: {},
  modules: {},
};

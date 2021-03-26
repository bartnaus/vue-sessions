import { createLogger, createStore, Store } from "vuex";
import sessions from "./modules/sessions";

import { InjectionKey } from "vue";
import { v4 as uuidv4 } from "uuid";
import RuntimeError = WebAssembly.RuntimeError;

const store = createStore({
  plugins: [createLogger()],
  state: {
    hello: "world",
    user: { name: "Bart Naus", role: "Betweter" },
    activeCustomer: null,
  },
  mutations: {},
  actions: {},
  modules: { sessions },
});

interface storedef {
  id: string;
  store: Store<sessionState>;
}

const storeList: Array<storedef> = [
  {
    id: "root",
    store: store,
  },
];

interface Address {
  street: string;
}

interface UserInterface {
  name: string;
  role: string;
  address: Address;
}

interface sessionState {
  hello: string;
  user: UserInterface;
  activeCustomer: null;
}

export function addSession(): Store<sessionState> {
  const store = createStore({
    plugins: [createLogger()],
    state: {
      hello: "world",
      user: { name: "Bart Naus", role: "Betweter" },
      activeCustomer: null,
    },
    mutations: {},
    actions: {},
    modules: { sessions },
  });
  storeList.push({
    id: uuidv4(),
    store,
  });

  return store;
}

export function getSessionStore(sessionId: string): Store<sessionState> {
  const storedef = storeList.find((def: storedef) => def.id == sessionId);
  if (!storedef) {
    throw new RuntimeError();
  }

  return storedef.store;
}

export const key: InjectionKey<Store<sessionState>> = Symbol();
export default store;

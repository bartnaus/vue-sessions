import { createLogger, createStore, Store } from "vuex";
import sessions from "./modules/sessions";
import customer from "./modules/customer";

import { InjectionKey } from "vue";
import { v4 as uuidv4 } from "uuid";
import RuntimeError = WebAssembly.RuntimeError;

export const rootStore = createStore({
  plugins: [createLogger()],
  state: {
    hello: "world",
    user: {
      name: "Bart Naus",
      role: "Betweter",
      address: { street: "hoi" },
    },
    mutations: {},
    actions: {},
    modules: { sessions, customer },
  },
});

// store 2
interface storedef {
  id: string;
  store: Store<sessionState>;
}

export const storeList: Array<storedef> = [
  {
    id: "root",
    store: rootStore,
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
}

export function addSession(): Store<sessionState> {
  const store = createStore({
    plugins: [createLogger()],
    state: {
      hello: "world",
      user: { name: "Bart Naus", role: "Betweter", address: { street: "hoi" } },
    },
    mutations: {},
    actions: {},
    modules: { sessions },
  });

  // make the store known to the rest of the application
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

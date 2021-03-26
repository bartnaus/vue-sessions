<template>
  <ul class="list-none">
    <li
      v-for="session in sessions"
      :key="session.id"
      @click="setActiveSession(session.id)"
      :class="{ active: true }"
    >
      <span>
        {{ session.id }}
      </span>
      <button
        @click.stop="removeSession(session)"
        class="ml-2 rounded-full border border-black w-6 h-6 hover:bg-white"
      >
        ✕
      </button>
    </li>
    <li @click="addSession">＋</li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { addSession as addSessionStore } from "../store/index";
import { storeList, getSessionStore } from "../store";

export default defineComponent({
  name: "Navigation",
  setup() {
    const store = useStore();
    console.log(store);
    console.log("got a list of sessions?", storeList);

    let sessions = ref(storeList);

    return {
      // activeSession: computed(() => store.state.sessions.active),
      sessions: sessions,
      addSession: () => {
        let sessionStateStore = addSessionStore();
        console.log("adding session", sessionStateStore);
        console.log("current sessionList", sessions);
        store.dispatch("sessions/addSession", sessionStateStore.id);
        return sessionStateStore;
      },
      removeSession: (sessionId: string) =>
        store.dispatch("sessions/removeSession", sessionId),
      setActiveSession: (sessionId: string) =>
        store.dispatch("sessions/setActiveSession", sessionId),
      prettyJson: (input: string) => {
        return JSON.stringify(input, null, 2);
      },
    };
  },
});
</script>

<style scoped lang="scss">
li {
  @apply border border-black border-b-0 p-2 inline-block mr-1 rounded-t-lg text-sm;

  &.active {
    @apply bg-yellow-300;
  }

  &:hover {
    @apply bg-yellow-500 cursor-pointer;
  }
}

label {
  margin-right: 5px;
}
</style>

<template>
  <ul class="list-none">
    <li
      v-for="session in sessions"
      :key="session"
      @click="setActiveSession(session)"
      :class="{ active: session === activeSession }"
    >
      <span>
        {{ session }}
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
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { addSession as addSessionStore } from "../store/index";

export default defineComponent({
  name: "Navigation",
  setup() {
    const store = useStore();

    return {
      activeSession: computed(() => store.state.sessions.active),
      sessions: computed(() => store.state.sessions.sessions),
      addSession: () => {
        store.dispatch("sessions/addSession");
        return addSessionStore();
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

<template>
  <navigation />

  <div class="border border-black p-3 rounded-b-lg">
    <div v-if="activeSession">
      <customer
        v-for="session in sessions"
        v-show="session === activeSession"
        :session="session"
        :key="session"
      />
    </div>
    <div v-else>No active session</div>
  </div>

  <pre class="text-gray-600 text-xs mt-5">{{ prettyJson($store.state) }}</pre>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Customer from "./Customer.vue";
import Navigation from "./Navigation.vue";

export default defineComponent({
  components: { Navigation, Customer },
  name: "Home",
  setup() {
    const store = useStore();

    return {
      activeSession: computed(() => store.state.sessions.active),
      sessions: computed(() => store.state.sessions.sessions),
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

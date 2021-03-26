<template>
  <navigation />
  <div class="border border-black p-3 rounded-b-lg">
    <div v-if="true">
      <customer
        v-for="session in storeList"
        v-show="true"
        :session="session"
        :key="session"
      />
    </div>
    <div v-else>No active session</div>
  </div>
  <!--  <pre class="text-gray-600 text-xs mt-5">{{ prettyJson($store.state) }}</pre>-->
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import store, { addSession, storeList } from "../store";
import Customer from "./Customer.vue";
import Navigation from "./Navigation.vue";

export default defineComponent({
  components: { Navigation, Customer },
  name: "Home",
  setup() {
    console.log(store.state.sessions);
    console.log(storeList);
    let sessionStore = addSession();

    console.log(sessionStore);
    console.log(storeList);
    console.log(storeList[0] === storeList[1]);
    console.log(sessionStore === store);
    console.log(JSON.stringify(store.state));

    return {
      // activeSession: computed(() => rootStore.state.sessions.active),
      // sessions: computed(() => rootStore.state.sessions.sessions),
      prettyJson: (input: string) => {
        return JSON.stringify(input, null, 2);
      },
    };
  },
  mounted() {
    console.log("Mounted!");
    console.log(this.$store.state === store);
    console.log(this.$store._actions)
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

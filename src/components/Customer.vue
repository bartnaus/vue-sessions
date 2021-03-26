<template>
  <div>
    <p>
      <label for="name">Name</label>
      <input type="text" v-model="customerModel.name" id="name" />
    </p>
    <p>
      <label for="street">Street</label>
      <input type="text" v-model="customerModel.address.street" id="street" />
    </p>
    <button @click="updateCustomer" class="button">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getSessionStore } from "../store/index";

export default defineComponent({
  name: "Customer",
  props: {
    session: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = getSessionStore(props.session); // active store here...
    const rootStore = getSessionStore("root"); // active store here...
    const customerModel = ref({
      name: store.state.user.name,
      address: store.state.user.address,
    });

    return {
      customerModel,
      updateCustomer: () =>
        store.dispatch(`${props.session}/updateCustomer`, {
          name: customerModel.value.name,
          street: customerModel.value.address.street,
        }),
    };
  },
});
</script>

<style scoped></style>

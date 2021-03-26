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
import { useStore } from "vuex";

export default defineComponent({
  name: "Customer",
  props: {
    session: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const customerModel = ref({
      name: store.state[props.session].name,
      address: {
        street: store.state[props.session].address.street,
      },
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

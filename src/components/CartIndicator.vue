<template>
    <div class="flex relative" @click="$emit('path')">
      <router-link to="/cart">
        <img class="icon " style="width:80px" src="@/assets/image/icons/cart_icon.svg" alt="cart">
        <span class="absolute top-2 right-3 text-white">{{ products.length }}</span>
      </router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
  ...mapGetters({products:'cartProductsDetail'}),
  },

}
</script>

<style scoped>
.icon {
  filter: invert(1);
}
</style>
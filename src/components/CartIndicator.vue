<template>
    <div class="flex relative">
      <router-link to="/cart">
        <img class="icon " style="width:80px" src="@/assets/image/icons/cart_icon.svg" alt="cart">
        <span class="absolute top-3 right-3 text-white">1</span>
      </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
//   computed: {
//   ...mapGetters({totalProducts:'totalProducts', cartProductsLoading:'cartProductsLoading'}),
//   },
//   methods: {
//     ...mapActions(['loadCart'])
//   }
}
</script>

<style scoped>
.icon {
  filter: invert(1);
}
</style>
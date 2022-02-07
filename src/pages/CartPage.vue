<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-800 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
        
        <h1 class="text-3xl mt-10 ml-5" v-show="products.length === 0">В вашей корзине пока нет товаров</h1>
        
        
            <CartItem class="m-5 flex relative dark:bg-gray-700 bg-gray-100" v-for="product in products" :key="product.id" :product="product" />

        </div>  
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CartItem from '../components/CartItem.vue'

    export default {
    components: { CartItem },
        
        computed: {
            ...mapGetters({products: 'cartProductsDetail'}),
        },

    }
</script>

<style scoped>

</style>
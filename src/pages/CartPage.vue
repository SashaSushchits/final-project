<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-800 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
        
        <h1 class="text-3xl mt-10 ml-5" v-show="products.length === 0">В вашей корзине пока нет товаров</h1>
        
            <CartItem class="m-5 flex lg:flex-row sm:flex-col relative dark:bg-gray-700 bg-gray-100" v-for="product in products" :key="product.id" :product="product" />

        </div>
        <div class="flex md:flex-row sm:flex-col md:items-end sm:items-center justify-center text-center" v-if="products.length !== 0">
            <button class="py-3 px-6 ml-5 bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
            @click.prevent="showModal">Оформить заказ</button>
            <h2 class="ml-5 mt-3 text-3xl dark:text-blue-500 text-blue-300">На сумму: {{ total | numberFormat }} Br</h2>
        </div>
        <ModalWindow v-show="modalVisible" @close="closeModal" />
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CartItem from '../components/CartItem.vue'
import ModalWindow from '../components/ModalWindow.vue'
import numberFormat from '@/helpers/numberFormat'

    export default {
        name: "CartPage",
        filters: {numberFormat},
        components: { CartItem, ModalWindow },
        data() {
            return {
                modalVisible: false
            }
        },   
        computed: {
            ...mapGetters({products: 'cartProductsDetail', total: 'totalPrice'}),
        },
        methods: {
            showModal(){
                this.modalVisible = true;
                document.body.style.overflow = "hidden"
            },
            closeModal(){
                this.modalVisible = false;
                document.body.style.overflow = ""
            }
        },
        created() {
            localStorage.setItem('cart', JSON.stringify(this.products))
        }
    }
</script>

<style scoped>

</style>
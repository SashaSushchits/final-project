<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-900 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
        
        <h1 class="text-3xl mt-10 ml-5" v-show="products.length === 0">В вашей корзине пока нет товаров</h1>
        
        
            <div class="m-5 flex relative" v-for="product in products" :key="product.id">
                
                <div class="flex gap-20">
                    <div>
                        <img class="dark:bg-gray-700 bg-gray-300 rounded shadow-2xl" style="width: 200px; height: 200px" :src="product.product.preview" :alt="product.product.title">
                    </div>
                    <div>
                        <h1 class="text-3xl mb-5">{{product.product.title}}</h1>

                        <div class="flex flex-cols gap-3">
                        <p class="font-bold">Цвет</p>
                        <ul class="flex">
                            <li class="flex">
                            <label class="relative">
                                <input
                                class="m-3 w-9 h-9 cursor-pointer active: "
                                type="radio"
                                name="color"
                                disabled
                                />
                                <span
                                class="w-7 h-7 absolute top-4 right-4 border border-gray-500 rounded-full cursor-pointer"
                                :style="{ backgroundColor: product.color.code }"
                                ></span>
                            </label>
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                    <div class="flex gap-5">
                        <div class="flex">
                            <button
                            class="w-10 h-10 text-black text-2xl border border-black rounded-full bg-gray-300  hover:bg-gray-500"
                            :class="{'disabled': product.amount === 1 }"
                            type="button"
                            @click.prevent="product.amount--"
                            >&#8722;
                            </button>

                            <input class="p-2 w-32 h-12 bg-gray-300 border rounded text-black text-2xl text-center" type="text" v-model.number="product.amount" />

                            <button
                            type="button"
                            class="w-10 h-10 text-black text-2xl border border-black rounded-full bg-gray-300  hover:bg-gray-500"
                            @click.prevent="product.amount++"
                            >&#43;
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-3xl dark:text-blue-500 text-blue-300">Цена: {{product.product.price * product.amount | numberFormat}} рублей</h1>
                    </div>

                    <CloseButton class="absolute -top-5 right-0" @close="deleteProduct"/>

                </div>
            </div>

        </div>  
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CloseButton from '../components/CloseButton.vue'
import numberFormat from '@/helpers/numberFormat'
    export default {
        components:{CloseButton},
        computed: {
            ...mapGetters({products: 'cartProductsDetail'})
        },
        methods: {
            deleteProduct(){
                alert('sadasdasd')
            }
        },
        filters: {
            numberFormat
        },

    }
</script>

<style scoped>

</style>
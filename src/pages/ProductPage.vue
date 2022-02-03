<template>
    <div class="pt-32 pb-12 dark:bg-gray-900 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            <div class="m-5">
                <h3>{{ products.title }}</h3>
            </div>

        </div>  
    </div>
</template>

<script>
import products from '@/data/products.js'
    export default {
        data() {
            return {
                allProducts: products,
            };
        },
        computed: {
            products() {
            const arr = this.allProducts.filter(item => item.id == this.$route.params.id)
            return arr[0];
            }
        },
    }
</script>
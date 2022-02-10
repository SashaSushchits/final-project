<template>
    <div class="pt-32 pb-12 min-h-screen dark:bg-gray-800 bg-gray-500">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            
            <div class="m-5 flex">
                <div>
                    <img style="width: 600px; height: 600px" :src="product.preview" :alt="product.title">
                </div>

                <div class="flex flex-col items-center gap-5">
                    <div>
                        <h1 class="text-3xl">{{product.title}}</h1>
                    </div>
                    <div>
                        <h1 class="text-3xl dark:text-blue-500 text-blue-300">Цена: {{product.price | numberFormat}} Br</h1>
                    </div>
                    <div>
                        <p class="font-bold">Цвет</p>
                        <ul class="flex">
                            <li class="flex" v-for="color in product.colors" :key="color.id">
                            <label class="relative">
                                <input
                                class="m-3 w-9 h-9 cursor-pointer active: "
                                type="radio"
                                name="color"
                                v-model="colorId"
                                :value="color.id"
                                :checked="false"
                                />
                                <span
                                class="w-7 h-7 absolute top-4 right-4 border border-gray-500 rounded-full cursor-pointer"
                                :style="{ backgroundColor: color.code }"
                                ></span>
                            </label>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-5">
                        <div class="flex">
                            <button
                            class="w-10 h-10 text-black text-2xl border border-black rounded-full bg-gray-300  hover:bg-gray-500"
                            :class="{'disabled': productAmount === 1 }"
                            type="button"
                            @click.prevent="productAmount--"
                            >&#8722;
                            </button>

                            <input class="p-2 w-32 bg-gray-300 border rounded text-black text-2xl text-center" type="text" v-model.number="productAmount" />

                            <button
                            type="button"
                            class="w-10 h-10 text-black text-2xl border border-black rounded-full bg-gray-300  hover:bg-gray-500"
                            @click.prevent="productAmount++"
                            >&#43;
                            </button>
                        </div>

                        <button class="py-3 px-3 bg-green-400 hover:bg-green-500 font-medium cursor-pointer rounded transition duration-500 text-black" type="submit" @click.prevent="addToCart">
                            В корзину
                        </button>
                    </div>
                </div>
            </div>

        </div>  
    </div>
</template>

<script>
import products from '@/data/products.js'
import numberFormat from "@/helpers/numberFormat";
    export default {
        data() {
            return {
                allProducts: products,
                productAmount: 1,
                colorId: 0,
            };
        },
        computed: {
            product() {
            const arr = this.allProducts.filter(item => item.id == this.$route.params.id)
            return arr[0];
            }
        },
        methods: {
            addToCart(){
                if(this.colorId !== 0 && this.productAmount >= 1) {
                    this.$store.commit(
                        'addProductToCart',
                        {productId: this.product.id, amount: this.productAmount, colorId:this.colorId}
                    )
                    this.productAmount = 1
                } else {
                    this.productAmount = 1
                    alert('Проверьте правильность введенных данных, все параметры должны быть заполнены.')
                }
              
            }
        },
        filters: {
            numberFormat
        },
    }
</script>

<style scoped>
.disabled {
    cursor: not-allowed;
    pointer-events: none;
}
</style>
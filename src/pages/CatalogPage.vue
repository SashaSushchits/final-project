<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-800 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            <div class="mx-5">
                <div class="flex justify-center items-center">
                    <h1 class="text-3xl font-bold">Каталог :</h1>
                    <p class="ml-10 text-3xl">{{ countProducts }} товаров</p>
                </div>
                

                <div class="flex">

                    <ProductFilter
                    :price-from.sync="filterPriceFrom"
                    :price-to.sync="filterPriceTo"
                    :category-id.sync="filterCategoryId"
                    :filter-color.sync="filterColorData"
                    />

                    <div class="flex pl-24 py-5 w-3/4">
                        <transition name="fade">
                            <h1 class="text-3xl" v-show="filteredProducts.length === 0">Похоже товары закончились, попробуйте выбрать другую категорию </h1>
                        </transition>
                        <ul class="flex flex-wrap gap-5">
                            <li class="" v-for="product in products" :key="product.id">
                                <router-link class="catalog__pic" :to="{name: 'product', params:{id: product.id}}">
                                    <img class="dark:bg-gray-700 bg-gray-300 rounded shadow-2xl" :src="product.preview" alt="" style="cursor:pointer; width: 300px; height: 300px">
                                    <h3 class="font-bold">{{ product.title }}</h3>
                                </router-link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div>
                    <BasePagination
                    v-model="page"
                    :count="countProducts"
                    :per-page.sync="productsPerPage"
                    />
                </div>
            </div>

        </div>  
    </div>
</template>

<script>
import products from '@/data/products.js'
import colors from '@/data/colors.js'
import category from '@/data/category.js'
import BasePagination from '@/components/BasePagination'
import ProductFilter from '@/components/ProductFilter'

    export default {
        name: "CatalogPage",
        components: { BasePagination, ProductFilter },
        data() {
            return {
                filterPriceFrom: 0,
                filterPriceTo: 0,
                filterCategoryId: 0,
                filterColorData: [],
                allProducts: products,
                
                page: 1,
                productsPerPage: 12
                
            }
        },
        computed: {
            filteredProducts() {
                let filteredProducts = this.allProducts;
                    if (this.filterPriceFrom > 0) {
                        filteredProducts = filteredProducts.filter(
                        (product) => product.price > this.filterPriceFrom
                        );
                    }
                    if (this.filterPriceTo > 0) {
                        filteredProducts = filteredProducts.filter(
                        (product) => product.price < this.filterPriceTo
                        );
                    }
                    if (this.filterCategoryId) {
                        filteredProducts = filteredProducts.filter(
                        (product) => product.categoryId === this.filterCategoryId
                        );
                    }
                    if (this.filterColorData.length !== 0 ){
                        for (let i = 0; i < this.filterColorData.length; i++) {
                            filteredProducts = filteredProducts.filter(item => item.colors.find(item => item.id === this.filterColorData[i]))
                        }
                    }
                    return filteredProducts;
            },
            products() {
                const offset = (this.page - 1) * this.productsPerPage;
                return this.filteredProducts.slice(offset, offset + this.productsPerPage);
            },
            countProducts() {
                return this.filteredProducts ? this.filteredProducts.length : 0;
            },
        },
        watch:{
            filterPriceFrom() {
                this.page = 1;
            },
            filterPriceTo() {
                this.page = 1;
            },
            filterCategoryId() {;
                this.page = 1;
            },
            filterColorData() {
                this.page = 1;
            }
        }
    }
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
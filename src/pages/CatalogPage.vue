<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-800 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            <div class="mx-5">
                <div class="flex justify-center items-center my-5">
                    <h1 class="lg:text-3xl sm:text-2xl font-bold">Каталог :</h1>
                    <p class="lg:ml-10 sm:ml-1 lg:text-3xl sm:text-2xl">{{ countProducts }} товаров</p>
                </div>
                

                <div class="flex">

                    

                    <ProductFilter
                    :price-from.sync="filterPriceFrom"
                    :price-to.sync="filterPriceTo"
                    :category-id.sync="filterCategoryId"
                    :filter-color.sync="filterColorData"
                    class="lg:block sm:hidden "
                    />

                    <div class="flex lg:pl-24 sm:pl-20 lg:w-3/4 sm:w-full">
                        <transition name="fade">
                            <h1 class="text-3xl h-screen" v-show="filteredProducts.length === 0">Похоже товары закончились, попробуйте выбрать другую категорию </h1>
                        </transition>
                        <ul class="flex flex-wrap gap-5  md:mr-0 sm:mr-3">
                            <li class="" v-for="product in products" :key="product.id">
                                <router-link class="catalog__pic" :to="{name: 'product', params:{id: product.id}}">
                                    <img class="dark:bg-gray-700 bg-gray-300 rounded shadow-2xl md:block sm:hidden" :src="product.preview" alt="" style="cursor:pointer; width: 300px; height: 300px">
                                    <img class="dark:bg-gray-700 bg-gray-300 rounded shadow-2xl md:hidden sm:block" :src="product.preview" alt="" style="cursor:pointer; width: 200px; height: 200px">
                                    <h3 class="font-bold flex md:flex-row sm:flex-col gap-2">{{ product.title }} <p> (цена {{ product.price }} Br)</p></h3>
                                </router-link>
                                
                                    <ul class="flex items-center">
                                    <p class="font-bold">Цвет:</p>
                                    <li class="flex" v-for="color in product.colors" :key="color.id">
                                        <label class="relative">
                                        <input
                                            class="m-3 w-6 h-6 cursor-text"
                                            type="radio"
                                            name="color"
                                            disabled
                                        />
                                        <span
                                            class="
                                            w-6
                                            h-6
                                            absolute
                                            top-3
                                            right-3
                                            border border-gray-500
                                            rounded-full
                                            cursor-pointer
                                            "
                                            :style="{ backgroundColor: color.code }"
                                        ></span>
                                        </label>
                                    </li>
                                    </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="lg:hidden sm:block flex items-center fixed left-0">
                        <div class="flex relative">
                            <input class="opacity-0 w-12 h-12 z-40 absolute left-0.5" type="checkbox" id="checkbox" v-model="stateForFilter">
                            <div class="burger__filter">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <transition name="fade">
                         <ProductFilter
                         v-show="stateForFilter"
                        :price-from.sync="filterPriceFrom"
                        :price-to.sync="filterPriceTo"
                        :category-id.sync="filterCategoryId"
                        :filter-color.sync="filterColorData"
                        :state-filter.sync="stateForFilter"
                        class="w-96 h-screen filter__disable overflow-y-scroll"
                        />
                        </transition>
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
                productsPerPage: 12,

                stateForFilter: false
                
            }
        },
        methods: {
            stateFilter(){
                if(!this.stateForFilter){
                    this.stateForFilter = true
                } else this.stateForFilter = false
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

.burger__filter {
    height: 50px;
    width: 50px;
    z-index: 7;
    position: relative;
}

.burger__filter > span {
    position: absolute;
    right: 0;
    display: block;
    width: 100%;
    height: 10px;
    background-color: #737373;
}

.burger__filter > span:nth-child(1) {
    top: 0;
}
.burger__filter > span:nth-child(2) {
    top: 15px;
    width: 50%;
}
.burger__filter > span:nth-child(3) {
    top: 30px;
    width: 25%;
}


.filter__disable {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgb(46, 46, 46) !important;
    z-index: 5;
    height: 100vh;
    width: 320px;
    row-gap: 15px;
    color: rgb(248, 251, 251);

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

#checkbox:checked ~ .menu__disable {
    animation: menuWidthOpen 3s forwards;
}

@keyframes menuWidthOpen {
    0% {
        right: -320px;
    }
    50% {
        right: 0px;
    }
    100% {
        right: 0px;
        width: 320px;
    }
} 
</style>
<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-900 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            <div class="mx-5">
                <div class="flex justify-center items-center">
                    <h1 class="text-3xl font-bold">Каталог :</h1>
                    <p class="ml-10 text-3xl">{{ filteredProducts.length }} товаров</p>
                </div>

                <div class="flex">

                    <div class="flex flex-col h-1/3 rounded w-1/4 dark:bg-gray-700 bg-gray-300 text-black py-10">
                        <h2 class="text-2xl text-center font-bold">Фильтры</h2>

                        <div class="ml-20">
                            <p class="font-bold">Цена</p>
                            <div class="flex flex-col">
                                <span class="font-bold">От</span>
                                <input class="dark:bg-gray-300 bg-gray-500 rounded text-center w-1/2" type="text" name="min-price" value="0" v-model.number="filterPriceFrom"> 
                                <span class="font-bold">До</span>
                                <input class="dark:bg-gray-300 bg-gray-500 rounded text-center w-1/2" type="text" name="max-price" value="0" v-model.number="filterPriceTo">
                            </div>

                        </div>

                        <div class="mt-5 mb-12 ml-20">
                            <p class="font-bold">Категория</p>
                            <select class="dark:bg-gray-300 bg-gray-400 text-black w-1/2" type="text" name="category" v-model.number="filterCategoryId">
                                <option value="0" disabled>Все категории</option>
                                <option :value="category.id" v-for="category in allCategory" :key="category.id"> {{ category.title }} </option>
                            </select>

                        </div>

                        <div class="m-5 ml-20">
                            <p class="font-bold">Цвет</p>
                            <ul class="colors">
                                <li class="colors__item" v-for="color in allColors" :key="color.id">
                                <label class="colors__label">
                                    <input
                                    @click="pushColors(color.id)"
                                    class="colors__radio sr-only"
                                    type="checkbox"
                                    name="color"
                                    v-model="filterColorData"
                                    :value = color.id 
                                    :checked = 'false'
                                    />
                                    <span class="colors__value" :style="{backgroundColor: color.code}"></span>
                                </label>
                                </li>
                            </ul>
                        </div>

                        <div class="flex flex-col justify-center items-center gap-2">
                            <button class="py-3 px-3 w-1/2 bg-green-400 hover:bg-green-500 font-medium cursor-pointer rounded transition duration-500 text-black" type="submit">
                                Применить
                            </button>
                            <button class="py-3 px-3 w-1/2 center bg-red-400 hover:bg-red-500 font-medium cursor-pointer rounded transition duration-500 text-black" type="button">
                                Сбросить
                            </button>
                        </div>

                    </div>

                    <div class="flex pl-24 py-5 w-3/4">
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

            </div>

        </div>  
    </div>
</template>

<script>
import products from '@/data/products.js'
import colors from '@/data/colors.js'
import category from '@/data/category.js'

    export default {
        name: "CatalogPage",
        data() {
            return {
                filterPriceFrom: 0,
                filterPriceTo: 0,
                filterCategoryId: 0,
                filterColorData: [],
                allProducts: products,
                allColors: colors,
                allCategory: category,
                colorId: 0,
                page: 1,
                productsPerPage: 12
                
            }
        },
        // components: { ProductList, BasePagination, ProductFilter },
        // data() {
        //     return {
        //     filterPriceFrom: 0,
        //     filterPriceTo: 0,
        //     filterCategoryId: 0,
        //     filterColor: '',
        //     page: 1,
        //     productsPerPage: 9,
        //     allProducts: products,
        //     };
        // },
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
        },
        methods: {
            pushColors(id){
                if(this.filterColorData.includes(id)) this.filterColorData.splice(this.filterColorData.indexOf(id), 1)
                else this.filterColorData.push(id)
            },
        }
    }
</script>

<style scoped>
.colors {
    margin: 0;
    padding: 0;
    list-style: none;
    --border-color: rgb(75, 47, 231);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}
.colors--black {
    --border-color: #222
}

.colors__item:not(:last-child) {
    margin-right: 4px
}

.colors__label {
    position: relative;
    cursor: pointer;
    display: block;
    border-radius: 50%;
    padding: 3px
}

.colors__value,
.colors__value::before {
    border-radius: 50%;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.colors__value {
    display: block;
    width: 20px;
    height: 20px
}

.colors__value::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 26px;
    height: 26px;
    border: 1px solid transparent
}

.colors__label:focus .colors__value::before,
.colors__label:hover .colors__value::before,
.colors__radio:checked~.colors__value::before {
    border-color: var(--border-color)
}

.colors__radio:focus~.colors__value::before {
    opacity: .7
}
</style>
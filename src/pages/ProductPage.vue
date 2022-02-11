<template>
    <div class="pt-32 pb-12 min-h-screen dark:bg-gray-800 bg-gray-500">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            
            <div class="m-5 flex md:flex-row sm:flex-col">
                <div class="flex justify-center">
                    <img class="md:block sm:hidden" style="width: 600px; height: 600px" :src="product.preview" :alt="product.title">
                    <img class="md:hidden sm:block" style="width: 300px; height: 300px" :src="product.preview" :alt="product.title">
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

                            <input min="1" max="20" pattern="^[0-9]{2}" class="p-2 w-32 bg-gray-300 border rounded text-black text-2xl text-center" type="number" v-model.number="productAmount" />

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

            <div class="">
                <div class="flex md:flex-row md:flex-wrap gap-3 sm:flex-col">
                    <div class="items-center justify-center border rounded-lg border-teal-600" v-for="item in list" :key="item.code">
                    <button :class="{'current':code === item.code}" class="py-2 px-5 text-xl bg-transparent lg:m-0 hover:bg-teal-300 hover:text-black cursor-pointer rounded-lg transition duration-500 sm:w-full" @click="updateCode(item.code)">{{item.head}}</button>
                    </div>
                </div>
                <transition name="fade">
                    <div v-show="code === code">
                        <div class="mt-3 text-xl mx-2">
                            {{ filtered.info }}
                        </div>
                    </div>
                </transition>
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

                list: [
                    {
                        head: 'Описание',
                        info:'Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS, Синхронизация со смартфоном, Связь по Bluetooth Smart, ANT+ и Wi-Fi, Поддержка сторонних приложений',
                        code: 'decription'
                    },
                    {
                        head: 'Характеристики',
                        info:'Wahoo ELEMNT BOLT GPS – это велокомпьютер, который позволяет оптимизировать свои велотренировки, сделав их максимально эффективными. Wahoo ELEMNT BOLT GPS синхронизируется с датчиками по ANT+, объединяя полученную с них информацию. Данные отображаются на дисплее, а также сохраняются на смартфоне. При этом на мобильное устройство можно установить как фирменное приложение, так и различные приложения сторонних разработчиков. Велокомпьютер точно отслеживает местоположение, принимая сигнал с целого комплекса спутников. Эта информация позволяет смотреть уже преодоленные маршруты и планировать новые велопрогулки.',
                        code: 'specifications'
                    },
                    {
                        head: 'Дизайн',
                        info:'Велокомпьютер Wahoo ELEMNT BOLT очень компактный. Размеры устройства составляют всего 74,6 x 47,3 x 22,1 мм. что не превышает габариты смартфона. Корпус гаджета выполнен из черного пластика. На обращенной к пользователю стороне расположен дисплей диагональю 56 мм. На дисплей выводятся координаты и скорость, а также полученная со смартфона и синхронизированных датчиков информация: интенсивность, скорость вращения педалей, пульс и т.д. (датчики не входят в комплект поставки). Корпус велокомпьютера имеет степень защиты от влаги IPX7. Это означает, что устройство не боится пыли, а также выдерживает кратковременное (до 30 минут) погружение в воду на глубину не более 1 метра.',
                        code: 'design'
                    },
                    
                ],
                code: 'decription',
            };
        },
        computed: {
            product() {
            const arr = this.allProducts.filter(item => item.id == this.$route.params.id)
            return arr[0];
            },
            filtered() {
                let filterList = this.list.find(item => item.code === this.code);
                return filterList
            },
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
              
            },
            updateCode(code){
                this.code = code
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
.current{
  background: rgb(77, 182, 172);
  color: black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
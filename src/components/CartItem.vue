<template>
  <div class="flex gap-20 items-center">
    <div>
      <img
        class="dark:bg-gray-600 bg-gray-300 rounded shadow-2xl"
        style="width: 200px; height: 200px"
        :src="product.product.preview"
        :alt="product.product.title"
      />
    </div>
    <div>
      <h1 class="text-3xl mb-5">{{ product.product.title }}</h1>

      <div class="flex flex-cols gap-3">
        <p class="font-bold">Цвет</p>
        <ul class="flex">
          <li class="flex">
            <label class="relative">
              <input
                class="m-3 w-9 h-9 cursor-pointer active:"
                type="radio"
                name="color"
                disabled
              />
              <span
                class="
                  w-7
                  h-7
                  absolute
                  top-4
                  right-4
                  border border-gray-500
                  rounded-full
                  cursor-pointer
                "
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
          class="
            w-10
            h-10
            text-black text-2xl
            border border-black
            rounded-full
            bg-gray-300
            hover:bg-gray-500
          "
          :class="{ disabled: amount === 1 }"
          type="button"
          @click.prevent="amount--"
        >
          &#8722;
        </button>

        <input
          class="
            p-2
            w-32
            h-12
            bg-gray-300
            border
            rounded
            text-black text-2xl text-center
          "
          type="text"
          v-model.number="amount"
        />

        <button
          type="button"
          class="
            w-10
            h-10
            text-black text-2xl
            border border-black
            rounded-full
            bg-gray-300
            hover:bg-gray-500
          "
          @click.prevent="amount++"
        >
          &#43;
        </button>
      </div>
    </div>
    <div>
      <h1 class="text-3xl dark:text-blue-500 text-blue-300">
        Цена:
        {{ (product.product.price * product.amount) | numberFormat }} рублей
      </h1>
    </div>

    <CloseButton class="absolute -top-5 right-0" @close="deleteProduct([product.productId, product.colorId])" />
  </div>
</template>

<script>
import CloseButton from '../components/CloseButton.vue'
import numberFormat from '@/helpers/numberFormat'

export default {
    props: ['product'],
    filters: {numberFormat},
    components:{CloseButton},
    computed: {
        amount: {
            get(){
                if (this.product.amount < 1 && value !== "") {
                    this.product.amount = 1;
                    alert('Вы ввели не корректное значение, пожалуйста, введите количество товара равное одному и больше')
                } else {
                    return this.product.amount;
                }
                },
            set(value){
                if (value < 1 && value !== "") {
                    value = 1;
                    alert('Вы ввели не корректное значение, пожалуйста, введите количество товара равное одному и больше')
                } else {
                    this.$store.commit('updateCartProductAmount', {productId: this.product.productId, amount: value, colorId: this.product.colorId})
                }
            }
        }
    },
    methods: {
        deleteProduct([productId, colorId]){
            this.$store.commit('deleteCartProduct', {productId: productId, colorId: colorId})
        }
    }

};
</script>

<style scoped>
.disabled {
    cursor: not-allowed;
    pointer-events: none;
}
</style>
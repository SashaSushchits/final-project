<template>
  <div
    class="
      flex flex-col
      h-1/3
      rounded
      w-1/4
      dark:bg-gray-700
      bg-gray-300
      text-black
      py-10
    "
  >
    <h2 class="text-2xl text-center font-bold">Фильтры</h2>

    <div class="ml-20">
      <p class="font-bold">Цена</p>
      <div class="flex flex-col">
        <span class="font-bold">От</span>
        <input
          class="dark:bg-gray-300 bg-gray-500 rounded text-center w-1/2"
          type="text"
          name="min-price"
          value="0"
          v-model.number="currentPriceFrom"
        />
        <span class="font-bold">До</span>
        <input
          class="dark:bg-gray-300 bg-gray-500 rounded text-center w-1/2"
          type="text"
          name="max-price"
          value="0"
          v-model.number="currentPriceTo"
        />
      </div>
    </div>

    <div class="mt-5 mb-12 ml-20">
      <p class="font-bold">Категория</p>
      <select
        class="dark:bg-gray-300 bg-gray-400 text-black w-1/2"
        type="text"
        name="category"
        v-model.number="currentCategoryId"
      >
        <option value="0" disabled>Все категории</option>
        <option
          :value="category.id"
          v-for="category in allCategory"
          :key="category.id"
        >
          {{ category.title }}
        </option>
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
              v-model="currentColorData"
              :value="color.id"
              :checked="false"
            />
            <span
              class="colors__value"
              :style="{ backgroundColor: color.code }"
            ></span>
          </label>
        </li>
      </ul>
    </div>

    <div class="flex flex-col justify-center items-center gap-2">
      <button @click.prevent="submit"
        class="
          py-3
          px-3
          w-1/2
          bg-green-400
          hover:bg-green-500
          font-medium
          cursor-pointer
          rounded
          transition
          duration-500
          text-black
        "
        type="submit"
      >
        Применить
      </button>
      <button @click.prevent="reset"
        class="
          py-3
          px-3
          w-1/2
          center
          bg-red-400
          hover:bg-red-500
          font-medium
          cursor-pointer
          rounded
          transition
          duration-500
          text-black
        "
        type="button"
      >
        Сбросить
      </button>
    </div>
  </div>
</template>

<script>
import colors from "@/data/colors.js";
import category from "@/data/category.js";

export default {
  data() {
    return {
      allColors: colors,
      allCategory: category,

      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColorData: [],
    };
  },
  props: [
    "priceFrom",
    "priceTo",
    "categoryId",
    "filterColor",
    "propsData",
    "propsCode",
  ],
  computed: {
    categories() {
      return this.categoriesData ? this.categoriesData.items : [];
    },
    colors() {
      return this.colorsData ? this.colorsData.items : [];
    },
    stateFilter() {
      if (!this.stateForFilter) this.stateForFilter === true;
      else this.stateForFilter === false;
      return this.stateForFilter;
    },
  },
  methods: {
    submit() {
      this.$emit("update:priceFrom", this.currentPriceFrom);
      this.$emit("update:priceTo", this.currentPriceTo);
      this.$emit("update:categoryId", this.currentCategoryId);
      this.$emit("update:filterColor", this.currentColorData);
    },
    reset() {
      this.$emit("update:priceFrom", 0);
      this.$emit("update:priceTo", 0);
      this.$emit("update:categoryId", 0);
      this.$emit("update:filterColor", []);

      this.currentColorData = [];
      this.currentPriceFrom = 0;
      this.currentPriceTo = 0;
      this.currentCategoryId = 0;
    },
    pushColors(id) {
      if (this.currentColorData.includes(id))
        this.currentColorData.splice(this.currentColorData.indexOf(id), 1);
      else this.currentColorData.push(id);
    },
  },
};
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
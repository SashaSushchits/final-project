<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link border border-solid dark:border-gray-500 icon"
        :class="{'pagination__link--disabled': page === 1}"
        aria-label="Предыдущая страница"
        v-if="page !== 0"
        @click.prevent="paginate(page-1)">&#8666;
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a class="pagination__link dark:text-white text-black" :class="{'pagination__link--current': pageNumber === page}" @click.prevent="paginate(pageNumber)"> {{ pageNumber }}   
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link border border-solid dark:border-gray-500 icon"
        :class="{'pagination__link--disabled': page === pages}"
        aria-label="Следующая страница"
        @click.prevent="paginate(page+1)">&#8667;
      </a>
    </li>

    <label class="ml-5">
      <select @click="submit()" class="text-black p-1 bg-gray-300 rounded" type="text" name="category" v-model.number="currentPerPage">
        <option :value="item.page" v-for="(item, index) in data" :key="index"> {{ item.page }}</option>
      </select>
    </label>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      data:[{page:4},{page:12},{page:24}],
      currentPerPage: this.perPage
    }
  },
  model: {
    prop:'page',
    event:'paginate'
  },
  props: ['page', 'count', 'perPage'],  //perPage -количество товаров выводимых на странице
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage)
    }
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page)
    },
    submit(){
      this.$emit('update:perPage', this.currentPerPage);
      // this.$emit('paginate', 1)
    }
  }
}
</script>

<style scoped>
.pagination {
    margin: 0;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.pagination__item:first-child {
    margin-right: 25px
}

.pagination__item:last-child {
    margin-left: 25px
}

.pagination__link {
    display: block;
    cursor: pointer;
    padding: 13px 3px;
    height: 40px;
    min-width: 40px;
    font-size: 16px;
    line-height: 1;
    color: #222;
    text-align: center;
    -webkit-transition: all .2s ease;
    transition: all .2s ease
}

.pagination__link[href]:not(:disabled):focus,
.pagination__link[href]:not(:disabled):hover {
    opacity: .6
}

.pagination__link--current {
    font-weight: 700
}


.pagination__link--disabled {
    opacity: .6;
    cursor: not-allowed;
    pointer-events: none;
}

.form_block {
    border: 1;
    padding: 0;
    margin-left: 10px
}

.dark .icon {
    filter: invert(1);
}
</style>
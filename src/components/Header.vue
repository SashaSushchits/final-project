<template>
  <div class="fixed w-full z-20 top-0 bg-gray-900 flex items-center">
    <div class="w-3/5">
      <router-link to="/">
        <img class="icon" style="width:100px" src="@/assets/image/logo/shop.svg" alt="shop">
      </router-link>
    </div>

    <ul v-for="(item, index) in menu" :key="index">
      <li class="text-white m-3 p-3">
        <router-link :to="item.path">
          {{item.name}}
        </router-link>
      </li>
    </ul>

    <ChangeTheme />
  </div>
</template>

<script>
import ChangeTheme from './ChangeTheme.vue'
export default {
  components: { ChangeTheme },
  name: "Header",
  data() {
    return{
      menu: [
        {
          name: 'Главная',
          path: '/'
        },
        {
          name: 'Каталог',
          path: '/products'
        },
        {
          name: 'Новости',
          path: '/news'
        },
        {
          name: 'Контакты',
          path: '/contacts'
        },
        {
          name: 'Мы на карте',
          path: '/maps'
        },
      ]
    }
  }  
}
</script>

<style scoped>
.icon {
  filter: invert(1);
}
</style>
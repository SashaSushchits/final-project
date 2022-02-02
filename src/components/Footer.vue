<template>
  <div class="bg-gray-900 flex items-center justify-evenly">
    <div class="flex flex-col">
      <h3 class="text-white">Наши социальные сети:</h3>
      <div class="flex gap-3">
        <router-link to="/">
          <img style="width:25px" src="@/assets/image/icons/icon_fb.svg" alt="fb">
        </router-link>
        <router-link to="/">
          <img style="width:30px" src="@/assets/image/icons/icon_inst.svg" alt="inst">
        </router-link>
        <router-link to="/">
          <img style="width:30px" src="@/assets/image/icons/icon_vk.svg" alt="vk">
        </router-link>
        <router-link to="/">
          <img style="width:30px" src="@/assets/image/icons/icon_youtube.svg" alt="youtube">
        </router-link>
      </div>
    </div>

    <div class="flex flex-col">
      <h3 class="text-white">Навигация по сайту:</h3>
      <ul class="grid grid-cols-2" >
        <li class="text-white" v-for="(item, index) in menu" :key="index">
          <router-link :to="item.path">
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="">
      <router-link to="/">
        <img class="icon" style="width:100px" src="@/assets/image/logo/shop.svg" alt="shop">
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Footer",
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
          name: 'Отзывы',
          path: '/comments'
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
<template>
  <div class="fixed w-full z-20 top-0 bg-gray-900 flex items-center lg:justify-evenly sm:justify-between">
    <div class="xl:w-2/5 lg:w-1/5">
      <router-link to="/">
        <img class="icon sm:hidden lg:block" style="width:80px" src="@/assets/image/logo/shop.svg" alt="shop">
        <img class="icon sm:block lg:hidden ml-3" style="width:60px" src="@/assets/image/logo/shop.svg" alt="shop">
      </router-link>
    </div>

    <ul class="sm:hidden lg:block" v-for="(item, index) in menu" :key="index">
      <li class="text-white m-3 p-3">
        <router-link :to="item.path">
          {{item.name}}
        </router-link>
      </li>
    </ul>

    <div class="flex items-center sm:mr-5 lg:mr-0">
      <ChangeTheme />
      <CartIndicator />

      <div class="flex relative">
        <input class="opacity-0 w-12 h-12 z-40 absolute left-0" type="checkbox" id="checkbox" v-model="stateForMenu">
        <div class="burger sm:block lg:hidden">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <transition name="fade">
      <ul v-show="stateForMenu" class="menu__disable flex flex-col items-center pt-16">
        <li class="text-white p-3" v-for="(item, index) in menu" :key="index" @click="stateMenu">
          <router-link :to="item.path">
            {{item.name}}
          </router-link>
        </li>
      </ul>
      </transition>
    </div>

  </div>
</template>

<script>
import ChangeTheme from './ChangeTheme.vue'
import CartIndicator from './CartIndicator.vue'
export default {
  components: { ChangeTheme, CartIndicator },
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
          path: '/catalog'
        },
        {
          name: 'Наши отзывы',
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
      ],
      stateForMenu: false
    }
  },
  methods: {
    stateMenu(){
      if(!this.stateForMenu){
        this.stateForMenu = true
      } else this.stateForMenu = false
    }
  }
  
}
</script>

<style scoped>
.icon {
  filter: invert(1);
}
.burger {
    height: 45px;
    width: 45px;
    z-index: 6;
    border-radius: 10px;
    background-color: #262626;
    position: relative;
}

.burger > span {
  position: absolute;
  display: block;
  z-index: 5;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #c4c5c5;
}
.burger > span:nth-child(1) {
  top: 20px;
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.burger > span:nth-child(2) {
  top: 5px;
  transition: transform 0.2s ease-in-out;
}

.burger > span:nth-child(3) {
  top: 35px;
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

#checkbox:checked ~ .burger span:nth-child(2) {
  top: 20px;
  transform: rotate(45deg);
}

#checkbox:checked ~ .burger span:nth-child(1) {
  transform: scaleY(0);
}

#checkbox:checked ~ .burger span:nth-child(3) {
  top: 36px;
  left: 7px;
  transform: rotate(-45deg);
}


.menu__disable {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 3;
    height: 100vh;
    background-color: #333333;
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
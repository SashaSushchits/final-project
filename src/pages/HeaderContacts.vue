<template>
  <div class="pt-32 pb-12 dark:bg-gray-900 bg-white">
    <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
          @click.prevent="$router.back()">Назад</a>
        <div class="mx-5">
            <h1 class="lg:text-4xl sm:text-3xl text-left my-5">Контакты</h1>
            <p class="text-base mb-5">
              Мы тщательно выбираем себе в команду лучших специалистов, которые рвутся делиться своими знаниями не ради денег — у них с этим все хорошо, а ради личного удовлетворения — за ваш результат и успех, за ваше «Спасибо»! Ведь каждый учитель отражается в своих учениках!
            </p>

            <div>
                <h2 class="lg:text-3xl sm:text-2xl text-left mb-5">Офис</h2>
                <div class="flex flex-col min-h-full dark:bg-gray-800 bg-gray-100 border border-transparent rounded">
                  <div class="flex gap-5">
                    <div class="">
                      <div class="dark:bg-gray-700 bg-gray-200 border border-transparent rounded-lg items-center justify-center m-5"><img class="p-5 icon" style="max-width:150px" src="@/assets/image/logo/portfolio.svg" alt="bag"></div>
                    </div>
                    <div class="flex flex-col pr-5">
                      <h3 class="text-2xl my-3 font-bold">
                        Call-центр
                      </h3>
                      <div class="flex sm:flex-col lg:flex-row gap-5">
                        <div class="flex items-start">
                          <img class="mr-6 icon" style="width:40px" src="@/assets/image/icons/phone.svg" alt="">
                          <p class="font-medium text-base"><b><a class="hover:underline" href="tel:777">777</a></b><br>
                            <a class="hover:underline" href="tel:+375 11 111 11 11 ">+375 11 111 11 11 </a><br>(для звонков из-за пределов<br> Республики Беларусь)<br><br> 
                          </p>
                        </div>
                        <div class="flex flex-col">
                          <div class="flex items-start">
                            <img class="mr-6 icon" style="width:40px"  src="@/assets/image/icons/phone.svg" alt="">
                            <div class="flex flex-col">
                              <a class="hover:underline" href="tel:+375 17 275 57 88 ">+375 17 275 57 88</a>
                              <p>(городской номер)</p>
                            </div>
                          </div>
                          <div class="flex items-start">
                            <img class="mr-6 icon" style="width:40px" src="@/assets/image/icons/clock.svg" alt="">
                            <p class="font-medium text-base"><b>Время работы:</b><br>
                              Ежедневно: 9.00 – 21.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="flex mb-5 items-start">
                          <img class="mr-6 icon" src="@/assets/image/icons/location.svg" alt="">
                          <p class="font-medium text-base"><b>Юридический адрес:</b><br>
                            332211, г. Минск, ул. Карла Либкнехта 68, офис 310.<br>
                          </p>
                      </div>
                      <div class="flex sm:flex-col lg:flex-row items-start mb-5">
                        <div class="flex items-start">
                          <img class="mr-6 icon" style="width:40px" src="@/assets/image/icons/location.svg" alt="">
                          <p class="font-medium text-base"><b>Адрес для корреспонденции:</b><br>
                            332211, г. Минск, ул. Карла Либкнехта 68, офис 310.
                          </p>
                        </div>
                        <div class="flex items-start">
                          <img class="mx-6 icon" style="width:40px" src="@/assets/image/icons/clock.svg" alt="">
                          <p class="font-medium text-base"><b>Время работы:</b>
                            пн-пт: 8.30-17.30<br>
                            обед: 13.00-14.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mx-5">
                    <h3 class="text-2xl font-bold mb-3">Центральный аппарат</h3>
                    
                      <div class="flex flex-wrap gap-2 my-3" >
                        <div class="flex flex-row flex-wrap gap-3">
                          <div class="items-center justify-center border rounded-lg border-teal-600" v-for="item in list" :key="item.code">
                            <button :class="{'current':code === item.code}" class="py-1 px-1 bg-transparent lg:m-0 hover:bg-teal-300 hover:text-black cursor-pointer rounded-lg transition duration-500" @click="updateCode([item.code, item.mail])">{{item.head}}</button>
                          </div>
                        </div>
                        <transition name="slide">
                          <div v-show="code === code">
                            <div class="flex flex-col w-full mt-2" v-for="(item, index) in filtered" :key="index">
                              <div class="flex items-start">
                                <img class="mr-6 icon" style="width:40px" src="@/assets/image/icons/phone.svg" alt="">
                                <span>
                                  <p v-if="item.title">{{item.title}}</p>
                                  <a class="hover:underline" :href="item.phone">{{item.phone}}</a> <br>
                                </span>
                              </div>
                            </div>
                            <div class="flex my-5 items-center" v-if="mail">
                              <img class="mr-5 icon" style="width:40px" src="@/assets/image/icons/email.svg" alt="">
                              <a class="font-medium text-base hover:underline" href="#">{{mail}}</a>
                            </div>
                          </div>
                        </transition>
                      </div>
                  </div>
                </div>

            </div>

            <div class="flex justify-around items-center dark:bg-gray-800 bg-gray-800 text-white border border-transparent rounded mt-24 py-10">
              <div class="flex flex-col">
                <h2 class="lg:text-3xl sm:text-2xl text-left mb-5">Карьера в «STORE»</h2>
                <p class="text-base mb-5">Присоединейся к команде профессионалов</p>
                <router-link to="/" tag="button" class="py-3 w-2/3 px-10 bg-blue-300  lg:m-0 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black">Вакансии</router-link>
                <router-link to="/" tag="a" class="flex items-center detail-link my-5">Подробнее <img class="ml-2" src="@/assets/image/icons/arrow.svg" alt="detail"></router-link>
              </div>
              <div>
                <img class="p-5 " style="max-width: 500px; filter: invert(1)" src="@/assets/image/logo/shop.svg" alt="footerLogo">
              </div>
            </div>
        </div>

    </div>  
  </div>

</template>

<script>
export default {
  name: "HeaderContacts",
  data() {
    return{
      list: [
        {
          head: 'Приёмная директора',
          department:[
            {
              title:'',
              phone:'+375 11 111 11 11'
            },
            {
              title:'',
              phone:'+375 22 222 22 22 факс'
            },
          ],
          mail: 'office-store@store.com',
          code: 'reception'
        },
        {
          head: 'Главное управление развития и продаж',
          department:[
            {
              title:'Телефон начальника управления',
              phone:'+375 33 333 33 33'
            },
            {
              title:'Телефон заместителя начальника управления',
              phone:'+375 44 444 44 44'
            },
            {
              title:'Отдел реализации и продвижения IT-услуг',
              phone:'+375 55 555 55 55'
            },
          ],
          mail: 'store@mail.com',
          code: 'development'
        },
        {
          head: 'PR управление',
          department:[
            {
              title:'Телефон начальника управления',
              phone:'+375 66 666 66 66'
            }
          ],
          code: 'pr'
        },
        {
          head: 'Коммерческое управление',
          department:[
            {
              title:'Телефон начальника управления',
              phone:'+375 77 777 77 77'
            },
            {
              title:'Телефон заместителя начальника управления',
              phone:'+375 88 888 88 88'
            },
            {
              title:'',
              phone:'+375 99 999 99 99 (факс)'
            },
          ],
          mail: 'office-store@store.com',
          code: 'commerce'
        },
        {
          head: 'Управление развития персонала',
          department:[
            {
              phone:'+375 11 111 11 11'
            },
            {
              phone:'+375 22 222 22 22 (факс)'
            }
          ],
          code: 'staff-development'
        },
        {
          head: 'Телефон доверия для работников',
          department:[
            {
              phone:'+375 11 222 33 44'
            }
          ],
          code: 'helpline'
        },
      ],
      code: 'reception',
      mail: 'help-store@store.com'
    }
  },
  methods: {
    updateCode([code, mail]){
      this.code = code,
      this.mail = mail
    }
  },
  computed: {
    filtered() {
      let filterList = this.list.find(item => item.code === this.code);
      return filterList.department
    },
  }
    
}
</script>


<style scoped>
.dark .icon {
    filter: invert(1);
}
.detail-link:hover img{
  transition: all;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
  transform: translateX(10px);
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 5s;
}
.slide-enter, .slide-leave-to {
  opacity: 1;
}
.slide-enter-to, .slide-leave {
  opacity: 1;
}
.current{
  background: rgb(77, 182, 172);
  color: black;
}
</style>
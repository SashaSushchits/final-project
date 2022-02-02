<template>
  <div class="pt-32 pb-12 dark:bg-gray-900 bg-white">
    <div class="lg:container mx-auto dark:text-white text-black">
      <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
      @click.prevent="$router.back()">Назад</a>
        <div class="mx-5">
            <h1 class="lg:text-4xl sm:text-3xl text-left mb-10 mt-5">Наши отзывы</h1>
            <div class="grid lg:grid-cols-2 gap-5  sm:grid-cols-1 sm:w-full ">

                <div class="flex md:flex-row sm:flex-col-reverse p-5 dark:bg-gray-800 bg-gray-100 border border-transparent rounded items-center justify-center "
                     v-for="comment in comments" :key="comment.id">
                    <div class="flex justify-end flex-col ">
                        <h2 class="md:text-2xl font-bold pb-2 sm:text-xl text-blue-400">{{comment.name}}</h2>
                        <p>{{comment.body}}</p>
                        <h3 class="text-xl font-bold pb-2 mt-5 text-gray-600">{{ comment.mail }}</h3>
                    </div>
                </div>

            </div>
        </div>


    </div>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "News",
  data() {
    return {
      comments: [
        {
          name: 'Всем рекомендую',
          body: 'Заказывал множество товаров, от телевизора до всяких мелочей,все пришло в оговорённые срок и все работает, спасибо за обслуживание!',
          mail: 'Василий Колесникович'
        },
        {
          name: 'Приятно удивлен.',
          body: 'Заказыва наушники из категории "на первое время за 10р". Остался приятно удивлен качеством звука. Оперативность и качество обслуживания на высоте.',
          mail: 'Степан'
        },
        {
          name: 'Один из лучших интернет-магазинов',
          body: 'На протяжении нескольких лет пользуюсь услугами вашего магазина и за это время у меня никогда не было нареканий. Всегда точно и оперативно. Считаю, что это один из лучших интернет-магазинов страны.',
          mail: 'Вячеслав'
        },
        {
          name: 'Сервис радует',
          body: 'Требования, описанные в заказе выполнены полностью. Оперативно. Курьеру Артёму отдельное спасибо. Сверхпунктуальный человек. Предупредил за час. И перезвонил за пять минут до доставки. Очень порадовало.',
          mail: 'Ясинская Ульяна Владимировна'
        },
        {
          name: 'Возврат товара',
          body: 'Приобретал товар, который не подошел, упаковка не вскрывалась. Пытался вернуть в сроки установленные законодательством, отказали, ссылаясь на постановление 778 п3. При этом сделал заказ на необходимый товар с большей стоимостью.Больше покупать у этого интернет магазина ничего не буду и всем не советую!',
          mail: 'Андрей'
        },
        {
          name: 'Доволен покупкой!',
          body: 'Общался через интернет, на все мои вопросы были быстрые ответы. Оперативно обработали заказ и оформили доставку на следующий день как я этого и хотел. Покупкой остался очень доволен( 2 колонки sven ps-720) спасибо большое!',
          mail: 'Славик Пецуро'
        },
        {
          name: 'Все здорово!',
          body: 'Сделал заказ. Оператор подсказала по наличию. Оформили быстро, чётко. Красавчики! :) Приехал, забрал. Все отлично, все здорово. +100 к карме. Буду заказывать ещё.',
          mail: 'Егор'
        },
        {
          name: 'Сервис радует',
          body: 'Требования, описанные в заказе выполнены полностью. Оперативно. Курьеру Артёму отдельное спасибо. Сверхпунктуальный человек. Предупредил за час. И перезвонил за пять минут до доставки. Очень порадовало.',
          mail: 'Ясинская Ульяна Владимировна'
        },
      ],
    }
  },
  // created() {
  //   this.fetch()
  // },
  // methods: {
  //   async fetch() {
  //     axios.get('https://jsonplaceholder.typicode.com/comments')
  //         .then((response) => this.comments = response.data.slice(0, 12))
  //   }
  // }
}
</script>
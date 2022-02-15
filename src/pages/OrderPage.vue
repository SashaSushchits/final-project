<template>
    <div class="min-h-screen pt-32 pb-12 dark:bg-gray-800 bg-white">
        <div class="lg:container mx-auto dark:text-white text-black">
        <a class="py-3 px-6 ml-5 bg-blue-300 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black"
        @click.prevent="$router.back()">Назад</a>
            
            <div class="mx-5">
                <h1 class="lg:text-4xl sm:text-3xl text-left mb-10 mt-5">Ваш заказ принят!</h1>

                    <div class="p-5 dark:bg-gray-700 bg-gray-100 border border-transparent rounded items-center justify-center">
                        <div class="flex justify-end flex-col max-w-full">
                            <h2 class="md:text-2xl sm:text-xl">
                                Благодарим за выбор нашего магазина. На Вашу почту придет
                                письмо с деталями заказа. Наши менеджеры свяжутся с Вами
                                в течение часа для уточнения деталей доставки.
                            </h2>
                            <div class="flex flex-wrap items-center mt-5">
                                <p class="md:text-xl sm:text-lg"> Получатель: </p>
                                <p class="md:ml-5 sm:ml-1 md:text-2xl break font-bold sm:text-lg text-blue-400">{{form.fio}}</p>
                            </div>
                            <div class="flex flex-wrap items-center">
                                <p class="md:text-xl sm:text-lg"> Адрес доставки: </p>
                                <p class="md:ml-5 sm:ml-1 md:text-2xl break font-bold sm:text-lg text-blue-400">{{form.adress}}</p>
                            </div>
                            <div class="flex flex-wrap items-center">
                                <p class="md:text-xl sm:text-lg"> Телефон: </p>
                                <p class="md:ml-5 sm:ml-1 md:text-2xl break font-bold sm:text-lg text-blue-400">{{form.phone}}</p>
                            </div>
                            <div class="flex flex-wrap items-center">
                                <p class="md:text-xl sm:text-lg"> Email: </p>
                                <p class="md:ml-5 sm:ml-1 md:text-2xl break font-bold sm:text-lg text-blue-400">{{form.email}}</p>
                            </div>
                        </div>
                    </div>

            </div>


        </div>  
  </div>
</template>

<script>
    export default {
        name: "OrderPage",
        computed: {
            form(){
                return this.$store.state.form
            }
        }

    }
</script>

<style scoped>
.break{
    word-break: break-word;
}
</style>
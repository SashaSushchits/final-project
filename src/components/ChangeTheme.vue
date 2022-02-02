<template>
  <div
      class=" relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ">
    <input @change="switchTheme" v-model="darkTheme" type="checkbox" name="toggle" id="toggle"
           class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
    <label for="toggle"
           class=" toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  computed:{
    darkTheme:{
      get(){
       return this.$store.getters.darkTheme
      },
      set:(theme) => theme
    }
  },
  methods:{
    switchTheme(){
      this.$store.commit('setTheme')
    }
  }
}
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: lightskyblue;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color:lightskyblue;
}
</style>
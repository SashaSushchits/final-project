export default {
    state: {
        darkTheme:false,
    },
    mutations: {
        setTheme(state){
            state.darkTheme = !state.darkTheme
            if(state.darkTheme === true){
                document.documentElement.classList.add('dark')
            }else {
                document.documentElement.classList.remove('dark')
            }
        }
    },
    getters: {
        darkTheme: s => s.darkTheme
    },
}
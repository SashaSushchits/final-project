<template>
  <div class="relative h-screen">
    <div class="absolute w-full dark:bg-gray-800 bg-gray-500" id="particles-js"></div>
    <div class="absolute lg:top-64 lg:left-128 sm:top-64 sm:left-8">
      <h1 class="dark:text-white text-3xl mb-5">Скорее за покупками!</h1>
        <router-link to="/catalog" tag="a" class="py-4 px-10 bg-blue-300 lg:m-0 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black">Перейти к каталогу
        </router-link>
    </div>
  </div>
</template>


<script>
import 'particles.js';

export default {
  name: "MainPage",
  data() {
    return{
      
    }
  },
  mounted() {
    this.init()
  },
  methods: {
      init() {
        window.particlesJS('particles-js', {
                      "particles": {
                        "number": {
                          "value": 80,
                          "density": {
                            "enable": true,
                            "value_area": 800
                          }
                        },
                        "color": {"value": "#2e2e2e"},
                        "shape": {
                          "type": "circle",
                          "stroke": {
                            "width": 0,
                            "color": "#000000"
                          },
                          "polygon": {
                            "nb_sides": 4
                          },
                          "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                          }
                        },
                        "opacity": {
                          "value": 0.5,
                          "random": false,
                          "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                          }
                        },
                        "size": {
                          "value": 1,
                          "random": true,
                          "anim": {
                            "enable": false,
                            "speed": 100,
                            "size_min": 0.1,
                            "sync": false
                          }
                        },
                        "line_linked": {
                          "enable": true,
                          "distance": 150,
                          "color": "#ffffff",
                          "opacity": 0.4,
                          "width": 1
                        },
                        "move": {
                          "enable": true,
                          "speed": 4,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        }
                      },
                      "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                          "onhover": {
                            "enable": true,
                            "mode": "repulse"
                          },
                          "onclick": {
                            "enable": false,
                            "mode": "push"
                          },
                          "resize": true
                        },
                        "modes": {
                          "grab": {
                            "distance": 400,
                            "line_linked": {
                              "opacity": 1
                            }
                          },
                          "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                          },
                          "repulse": {
                            "distance": 130,
                            "duration": 0.4
                          },
                          "push": {
                            "particles_nb": 4
                          },
                          "remove": {
                            "particles_nb": 2
                          }
                        }
                      },
                      "retina_detect": true
                    } 
            )
      }
    } 
}
</script>

<style scoped>
#particles-js {
  width: 100%;
  height: 100%;
  background-image: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
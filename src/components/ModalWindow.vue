<template>
  <transition name="modal">
        <div class="modal-mask fixed overflow-auto z-50 top-0 left-0 w-full h-full">
          <div class="modal-wrapper">
            <div class="modal-container px-7 py-5 my-20 mx-auto rounded lg:w-2/5 sm:w-4/5 dark:bg-gray-800 bg-gray-100">

              <div class="dark:text-gray-300 text-gray-700">

                <div class="modal-header flex items-center relative">
                  <h1 class="text-center lg:text-3xl sm:text-xl w-4/5">Введите ваши данные</h1>
                  <CloseButton class="absolute z-50 -top-5 right-0" @close="$emit('close')" />
                </div>

                <div class="my-8 overflow-hidden">
                    <input type="text" class="inputs dark:bg-gray-700" placeholder="Фамилия Имя Отчество *" v-model.trim="form.fio" :class="$v.form.fio.$error ? 'invalid' : ''">
                    <p v-if="$v.form.fio.$dirty && !$v.form.fio.required" class="text-red-500 mb-3 text-sm">обязательно для заполнения*</p>
                    
                    <input type="text" class="inputs dark:bg-gray-700" placeholder="Адрес проживания *" v-model.trim="form.adress" :class="$v.form.adress.$error ? 'invalid' : ''">
                    <p v-if="$v.form.adress.$dirty && !$v.form.adress.required" class="text-red-500 mb-3 text-sm">обязательно для заполнения*</p>
            
                    <input type="text" class="inputs dark:bg-gray-700" placeholder="Адрес электронной почты *" v-model.trim="form.email" :class="$v.form.email.$error ? 'invalid' : ''">
                    <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="text-red-500 mb-3 text-sm">обязательно для заполнения*</p>
                    <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="text-red-500 mb-3">введите корректный адрес</p>
                    <input type="text" class="inputs dark:bg-gray-700" placeholder="Контактный номер телефона *" v-model.trim="form.phone" :class="$v.form.phone.$error ? 'invalid' : ''">
                    <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="text-red-500 mb-3 text-sm">обязательно для заполнения*</p>
                    <textarea class="inputs dark:bg-gray-700" cols="20" rows="3" placeholder="Пожелания" v-model.trim="form.message"></textarea>
                   
                    <div class="mt-4">
                      <input class="mr-3" type="checkbox" id="c1" v-model="form.agree">
                      <label id="p1" for="c1" class="text-sm">даю свое согласие на обработку персональных данных</label>
                    </div>
                </div>

                <div class="modal-footer text-center">
                  <button @click="chekForm" type="submit" v-show="form.agree" class="py-3 px-6 bg-blue-300 sm:m-10 lg:m-0 hover:bg-teal-300 font-medium cursor-pointer rounded transition duration-500 text-black">
                    Отправить
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
  </transition>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import CloseButton from '@/components/CloseButton'

  export default {
    name: 'modal',
    components: {
        CloseButton
    },
    mixins: [validationMixin],
    data() {
      return {
        form: {
          fio: '',
          adress: '',
          email: '',
          phone: '',
          agree: ''
        }
      }
    },
    methods: {
      chekForm() {
        this.$v.form.$touch()
        if(!this.$v.form.$error) {
          this.postForm(this.form)
          this.$emit('close');
          this.$router.push({name:'order'});
          this.$store.state.cartProducts = []
        }
      },
      postForm(payload){
        this.$store.commit('updateForm', payload)
      }

    },
    validations () {
      return {
       form: {
          fio: { required },
          adress: { required },
          email: { required, email },
          phone: { required },
        }
      }
    }
  };
</script>

<style>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.inputs {
    margin-bottom: 15px;
    border: 1px solid rgba(155, 155, 155, 0.4);
    box-sizing: border-box;
    border-radius: 6px;
    width: 100%;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.015em;
    transition: .5s;
}

label:hover {
  cursor: pointer;
  color: rgb(94 234 212);
}

input[type="radio"]:checked,
input[type="checkbox"]:checked {
  border: 1px solid #2196F3;
}

#r2:checked ~ #l2,  #r1:checked ~ #l1, #c1:checked ~ #p1{
  color: #2196F3;
}

.invalid {
  background-color: #ffdddd;
  margin-bottom: 0px;
}

</style>
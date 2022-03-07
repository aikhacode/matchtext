<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref,computed} from 'vue'
import {cocokTo, cocokArrToHtml }from './script.js'

const text1 = ref('kerjasama di projects.co.id sangat menguntungkan')
const text2 = ref('kerjasama pada projects.co.id lebih menguntungkan')
const cocok = computed(() => { return cocokTo(text1.value,text2.value)})
const hasil = computed(() => { return cocokArrToHtml(cocok.value.hasil)})

</script>

<template>
    <label for="frasa1">Frasa 1:</label>
  <div class="flex mb-3 align justify-center">
    
    <textarea  name="frasa1" class=" border-2 border-slate-500" rows="3" cols="50" v-model="text1" ></textarea>
  </div>

    <label for="">Kalimat yang dicocokan:</label>
  <div class="flex justify-center">
    <textarea class="border-2 border-slate-500" rows="3" cols="50" v-model="text2" ></textarea>
  </div>

 <!--  <div class="flex justify-center">
    <button class="mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Proses</button>
  </div> -->

  <div class="flex mt-5 justify-center">
    <p>Hasil cocok {{cocok.count}} dari {{cocok.frasa.length}} (Frasa 1)</p>
  </div>
  <div class="flex mt-5 justify-center">
    <p  v-html="hasil"></p> 
  </div>
  

  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cocok{
  background: yellow;
  padding: 5px;
}
</style>

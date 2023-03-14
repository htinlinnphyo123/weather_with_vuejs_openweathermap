<template>

  <Navbar @cityChanged='cityChanged'></Navbar>
  <Body :information='information'></Body>
  
</template>

<script>
import Navbar from './components/Navbar.vue'
import Body from './components/Body.vue'
import getWeather from './composables/getWeather.js';
import { ref } from 'vue';
export default {
  components : {
    Navbar,Body
  },
  setup() {

    //get weather information 
    let {getInfos,error,infos} = getWeather();
    
    let information = ref('');

    //city change function
    let cityChanged = async(data)=>{
      // console.log(data)
      information.value = '';
      error.value = '';

      await getInfos(data);
      // console.log(error.value)
      if(!error.value){
        information.value = infos.value;
      }else{
        information.value = error.value;
      }

    }




    return { cityChanged,information }
  },
}
</script>

<style>
</style>


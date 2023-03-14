<template>
    
    <div v-if="noinfos">
        <Noinfos></Noinfos>
    </div>
    <div v-else-if="weatherinfos.cod===200">
        <WeatherInfo :weatherInfo='weatherinfos'></WeatherInfo>
    </div>
    <div v-else>
        <Loader></Loader>
    </div>


</template>

<script>
import {onUpdated, ref } from 'vue'
import Loader from './Loader.vue'
import Noinfos from './NoInfo.vue'
import WeatherInfo from './WeatherInfo.vue'
export default {

    props : ['information'],
    components : {Loader,Noinfos,WeatherInfo},
    setup(props){   

        let weatherinfos = ref('');
        let noinfos = ref(false);

        onUpdated(()=>{
            weatherinfos.value = props.information
            if(weatherinfos.value==='error occured'){
                noinfos.value = true;
            }else{
                noinfos.value = false;
            }
        })

        return { weatherinfos,noinfos }
    }

}
</script>

<style>

</style>
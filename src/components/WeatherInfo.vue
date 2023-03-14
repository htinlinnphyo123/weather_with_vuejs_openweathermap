<template>
    
    <div class="flex justify-center items-center py-10">
        <div class="px-4 my-4 grid grid-cols-1 md:grid-cols-2 gap-7">
            <div class="shadow-md rounded-lg relative overflow-hidden bg-cover font-bold bg-center h-[170px] scale-95 hover:scale-100 ease-in-out duration-300"
                 :style="{backgroundImage:'url('+coordinateMap+')'}">
                <div class="p-3 text-orange-300">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl mb-2">Geological Condition</h2>
                    <p class="text-md md:text-xl">
                        Lat : {{coordinates.lat}} / Lon : {{coordinates.lon}} <br>
                        Country : {{weatherInfo.name}}
                    </p>
                </div>
            </div>
            <div class="shadow-md rounded-lg relative overflow-hidden bg-cover font-bold text-slate-900 h-[170px] scale-95 hover:scale-100 ease-in-out duration-300"
                 :style="{backgroundImage:'url('+weathercondition+')'}">
                <div class="p-3">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl mb-2">Current Weather</h2>
                    <p class="text-md md:text-xl">
                        Main : {{weatherInfo.weather[0].main}} <br>
                        Description : {{weatherInfo.weather[0].description}}
                    </p>
                </div>
            </div>
            <div class="shadow-md rounded-lg relative overflow-hidden bg-cover font-bold bg-center h-[170px] scale-95 hover:scale-100 ease-in-out duration-300"
                 :style="{backgroundImage:'url('+temperature+')'}">
                <div class="p-3">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl mb-2">Details</h2>
                    <p class="text-md md:text-xl">
                        Temp : {{ (weatherInfo.main.temp - 273.25).toFixed(2) }} <sup class="font-bold">°</sup>C <br>
                        Pressure : {{ (weatherInfo.main.pressure * 0.750061).toFixed(2) }} mmHg <br>
                        Humidity : {{ weatherInfo.main.humidity }} %
                    </p>
                </div>
            </div>
            <div class="shadow-md rounded-lg relative overflow-hidden bg-cover font-bold bg-center h-[170px] scale-95 hover:scale-100 ease-in-out duration-300"
                 :style="{backgroundImage:'url('+windyPath+')'}">
                <div class="p-3">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl mb-2">Windy</h2>
                    <p class="text-md md:text-xl">
                        Speed : {{weatherInfo.wind.speed}} ms<sup>-1</sup> <br>
                        Degree : {{weatherInfo.wind.deg}} ° <br>
                        Degree : {{weatherInfo.wind.gust}} ms<sup>-1</sup>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {ref} from 'vue'
import weathercondition from '../assets/images/weathercondition.jpg'
import coordinateMap from '../assets/images/coordinatemap.webp'
import temperature from '../assets/images/temperature.jpg'
import windyPath from '../assets/images/windyweather.jpg';

export default {

    props : ['weatherInfo'],
    setup(props){

        let weatherInfo = ref(props.weatherInfo)
        let coordinates = ref(props.weatherInfo.coord)  
        
        return {weatherInfo,coordinates,weathercondition,coordinateMap,temperature,windyPath}
    }
    

}   
</script>

<style>

</style>
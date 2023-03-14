<template>
    <div class="py-3 bg-violet-400 dark:bg-slate-700 flex justify-between items-center">

        <div class="logo">
            <h2 class="text-xl align-middle pl-8 font-bold font-mono">H4P6 Company </h2>
        </div>
        <div class="flex justify-between items-center mr-5">
            <div v-if="cityLists">
                <select class="appearance-none shadow-md rounded-lg cursor-pointer w-[250px] text-md form-select border-none focus:ring-0 bg-slate-100" v-model="cityStatus" @change="cityChange">
                    <option value="select" selected disabled>Choose your city</option>
                    <option :value="city.name" v-for="(city, index) in cityLists" :key="index" class="bg-transparent">
                        {{ city.name }}
                    </option>
                </select>
            </div>
            <div class="mx-4">
                <button>
                <font-awesome-icon icon="fa-solid fa-lightbulb" /> 
                <span class="font-bold text-sm ml-2">Light</span>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import reqCitiesApi from "../composables/getCities";
import {ref} from 'vue'

export default {

  setup(props,ctx) {


    let { getCities, cityLists, error } = reqCitiesApi();

    getCities();

    let cityStatus = ref('Myanmar')
    ctx.emit('cityChanged',cityStatus.value)

    let cityChange = ()=>{
        // console.log(cityStatus.value)

        ctx.emit('cityChanged',cityStatus.value)

    }

    return { cityLists,cityStatus,cityChange };
  },
};
</script>

<style>

</style>
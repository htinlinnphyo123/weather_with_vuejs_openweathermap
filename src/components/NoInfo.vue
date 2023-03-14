<template>
  
    <div class="flex justify-center items-center flex-col">
        <img :src="imagePath" alt="">
        <p class="text-2xl text-red-500 font-bold">
            Sorry , we have a problem in fetching api.
            Please report to <a href="mailto:htinlinnphyo.pma@gmail.com" class="underline text-blue-700">htinlinnphyo.pma@gmail.com</a>
        </p>
    </div>

</template>

<script>
import sorryImage from '../assets/images/sorryimage.jpg'
export default {

    setup(){
        let imagePath = sorryImage;


        return {imagePath}
    }


}
</script>

<style>

</style>
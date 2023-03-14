<template>
    
    <div class="w-full h-[585px] flex flex-col justify-center items-center">
        <ul class="border-b-4 border-sky-500 flex mb-4">
            <li class="w-[30px] h-[30px] bg-sky-900 rounded-full mx-3"></li>
            <li class="w-[30px] h-[30px] bg-sky-900 rounded-full mx-3"></li>
            <li class="w-[30px] h-[30px] bg-sky-900 rounded-full mx-3"></li>
            <li class="w-[30px] h-[30px] bg-sky-900 rounded-full mx-3"></li>
            <li class="w-[30px] h-[30px] bg-sky-900 rounded-full mx-3"></li>
        </ul>
        <span class="text-2xl font-bold text-sky-500">Fetching from api</span>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>
li{
    animation:myani 0.7s linear infinite;
}
li:nth-child(1){
	animation-delay:0.6s;
}
li:nth-child(2){
	animation-delay:0.45s;
}
li:nth-child(3){
	animation-delay:0.3s;
}
li:nth-child(4){
	animation-delay:0.15s;
}
li:nth-child(5){
	animation-delay:0s;
}
@keyframes myani{
    0%{
        transform:translateY(0)
    }
    50%{
        transform:translateY(-150px)
    }
    100%{
        transform:translateY(0);
    }
}

</style>
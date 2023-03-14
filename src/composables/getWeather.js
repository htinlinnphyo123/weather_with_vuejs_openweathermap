import { ref } from "vue";


let getWeatherInfos = ()=>{
    let error = ref('');
    let infos = ref('');
    let getInfos = async(city)=>{

        infos.value = '';

        try {
            await new Promise((resolve,reject)=>{
                return setTimeout(resolve,1500)
            })
    
            let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e24d5fc0226c799536d6403fd5369be`)
            let data = await request.json();
            infos.value = data;
            if(infos.value.cod!==200){
                throw new Error('error occured')
            }
        }
        catch(err){
            error.value = err.message;
            // console.log(error.value)
        }

    }


    return {getInfos,error,infos}
}

export default getWeatherInfos;
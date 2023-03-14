import { ref } from "vue";

let error = ref('');
let cityLists = ref('');

let reqCitiesApi = ()=>{

    let getCities = async()=>{

        let ref = await fetch('https://countriesnow.space/api/v0.1/countries/capital');

        let datas = await ref.json();

        cityLists.value = datas.data.filter((city)=>{
            return city.name != "Aland Islands"
        });
        // console.log(cityLists.value)

    }

    
    return {getCities,cityLists,error}

}


export default reqCitiesApi
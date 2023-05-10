// https://rickandmortyapi.com/
import axios from 'axios'
axios.defaults.baseURL = "https://rickandmortyapi.com/api/"

export const getAllCharacters = async () =>{
                                                               // axios.get('character').then({data}=>data.results)
    const {data} = await axios.get('character')
    return data.results    
}


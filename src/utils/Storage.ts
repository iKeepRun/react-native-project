import AsyncStorage from '@react-native-async-storage/async-storage';


const safe=async (key :string,value:string)=>{
    try {
        return await  AsyncStorage.setItem(key,value)
    }catch (e) {
        console.error(e)
    }
}

const remove=async (key:string)=>{
     try {
         return await AsyncStorage.removeItem(key)
     }catch (e) {
         console.error(e)
     }
}

const get=async (key:string)=>{
    try{
        return await  AsyncStorage.getItem(key)
    }catch (e){
        console.error(e)
        return null
    }
}


const Storage={
    safe,
   remove,
    get

}


export default Storage
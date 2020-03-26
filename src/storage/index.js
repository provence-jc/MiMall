// Storage封装
const STORAGE_KEY = 'mall';
export default{
    setItem(){

    },
    getItem(){

    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(){

    }
}
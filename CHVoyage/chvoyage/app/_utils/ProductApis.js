const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = async ()=> await axiosClient.get('/prouducts?populate=*')
//const getProductByID = (id)=>axiosClient.get(`/prouducts/:${id}?populate=*`)
//the line above didnt work and i dont know why 
const  getProductByID = async (id)=> await axiosClient.get(`/prouducts?filters[id][$eq]=${id}&populate=*`)
//http://localhost:1337/api/prouducts?filters[id][$eq]=2

export default {
    getLatestProducts,
    getProductByID
}
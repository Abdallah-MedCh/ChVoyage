const { default: axiosClient } = require("./axiosClient");


const getLatestDist = async ()=> await axiosClient.get('/distinations?populate=*')
//const getProductByID = (id)=>axiosClient.get(`/prouducts/:${id}?populate=*`)
//the line above didnt work and i dont know why 
const  getPDistByID = async (id)=> await axiosClient.get(`/distinations?filters[dID][$eq]=${id}&populate[Image]=*&populate[dist_options][populate]=*`)
//http://localhost:1337/api/prouducts?filters[id][$eq]=2

export default {
    getLatestDist,
    getPDistByID
}
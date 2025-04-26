const { default: axiosClient } = require("./axiosClient");


const addToCart = (payload) => axiosClient.post("/carts",payload);
const getUserCartItems = async (email) =>{
  
  try {
    const response = await axiosClient.get(`/carts?populate[prouducts][populate]=Image&filters[userMail][$eq]=${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user cart items:', error);
    return null;
  }
  
  

}
  
    const updateCart = (id, data) => axiosClient.put(`/carts/${id}`, { data })  

  
  const deleteCartItem = (id) => { return axiosClient.delete(`/carts/${id}`);}


  export default {
    addToCart,
    getUserCartItems,
    deleteCartItem,
    updateCart,
  };
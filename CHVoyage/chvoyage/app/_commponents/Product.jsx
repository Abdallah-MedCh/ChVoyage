'use client'
import React, { useEffect,useState } from 'react'
import ProuductList from './ProuductList'
import ProductApis from '../_utils/ProductApis'
import {ArrowBigRight} from 'lucide-react'



function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    ProductApis.getLatestProducts()
      .then(res => {
        setProductList(res.data.data);
       
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div className='px-10 md:px-20'>
      <div className='flex justify-between p-2 items-center'>
      <h2 className='my-4 text-xl'>Our latest distinations</h2>
      
      <h2 className=' text-green-400 flex gap-1 hover:cursor-pointer' >
             view all <ArrowBigRight/>
            </h2>
      
      </div>
      
      <ProuductList pl={productList} />
    </div>
  );
}

export default Product;
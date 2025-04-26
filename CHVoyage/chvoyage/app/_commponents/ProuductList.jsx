import React from 'react'
import ProductItem from './ProductItem';

function ProuductList({pl}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4'>
      {pl.length === 0 ? (
        <div>No Products Available</div>
      ) : (
        pl.map((item, index) => (
          <div key={index} >
            <ProductItem product={item}/>
            
          </div>
          //console.log(item.Image.index)
          //{item?.Title}
        ))
      )}
    </div>
  );
}

export default ProuductList;
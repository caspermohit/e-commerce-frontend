import React from 'react'
import ProductCard from '../components/ProductCard'


function ProductList() {
  return (
    <>
       <h1>Product List</h1>
    <div className='container' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
   
      <ProductCard/>  
      <ProductCard/>
      <ProductCard/> 
      <ProductCard/> 
       <ProductCard/>
        <ProductCard/>
         <ProductCard/>  
          <ProductCard/>   
        

    </div>
    </>
  )
}

export default ProductList
import React, { useState } from 'react'

function Card({product}) {
    const [counter,setCounter]= useState(0)
  return (
    <>
    <div class="col mb-5">
    <div class="card h-100">
       
        <img class="card-img-top" src={product.image} alt="..." />
        
        <div class="card-body p-4">
            <div class="text-center">
               
                <h5 class="fw-bolder">{product.name}</h5>
             
                {`RS: ${product.price}`}
            </div>
        </div>
        
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><button class="btn btn-sm btn-primary" onClick={()=>{setCounter(counter + 1)}}>Add To Cart {counter}</button></div>
        </div>
    </div>
</div>
    </>
  )
}

export default Card
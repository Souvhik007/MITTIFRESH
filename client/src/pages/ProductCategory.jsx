import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import { div } from 'three/tsl'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {

    const{ products } = useAppContext()
    const { category } = useParams()

    const searchCategory = categories.find((item)=> item.path.toLowerCase() === category)

    const fillteredProducts = products.filter((product)=> product.category.toLowerCase() === category)
  return (
    <div className='mt-16'>
       {searchCategory && (
        <div className='flex flex-col itmes-end w-max'>
            <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()} </p>
            <div className='W-16 h-0.5 bg-primary rounded-full'></div>
        </div>
       )}
       {fillteredProducts.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 mt-6'>
            {fillteredProducts.map((product)=>(
                 <ProductCard key={product._id} product={product}/>
            ))}
        </div>
       ):(
        <div className='felx itmes-center justify-center h-[60vh]'>

            <p className='text-2xl font-medium text-primary'>No products found in this category.</p>

        </div>
       )}
    </div>
  )
}

export default ProductCategory

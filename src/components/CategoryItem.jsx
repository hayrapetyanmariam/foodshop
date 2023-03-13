import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const CategoryItem = ({strCategory, strCategoryDescription, strCategoryThumb}) => {

  const [showLess, setShowLess] = useState(true)

  const max = 200;

  if(strCategoryDescription.length <= max){
    return <p>{strCategoryDescription}</p>
  }

  const show = (e)=>{
    e.preventDefault();
    setShowLess(!showLess);
  }

  return (
    <div className=' shadow-md p-4'>
       <img src={strCategoryThumb} alt={strCategory}/>
       <h1 className='font-bold text-orange-600 text-center'>{strCategory}</h1>
       <p>{showLess ? strCategoryDescription.slice(0, max) + '...' : strCategoryDescription}</p>
       <a href="" onClick={show} className = " text-orange-400">{showLess ? 'more' : 'less'}</a> <br />
       <Link to={'/category/' + strCategory} className=' text-orange-500 font-bold'>Details {strCategory} ...</Link>
    </div>
  )
}

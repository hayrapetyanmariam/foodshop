import React from 'react'
import { useState, useEffect } from "react";
import { getFilteredByCategories } from "../api";
import { useParams } from 'react-router-dom';
import { MealList } from '../components/MealList'
import {useNavigate} from "react-router-dom"

export const CategoryPage = ({addToBasket}) => {

    const [meals, setMeals] = useState([])
    const navigate = useNavigate();
    const {name} = useParams()

useEffect(()=>{
    getFilteredByCategories(name).then(data=>{
      console.log(data)
        setMeals(data.meals)
    })
}, [])

  return (
    <div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <MealList meals = {meals}/>
    </div>
  )
}


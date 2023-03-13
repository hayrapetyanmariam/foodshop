import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMealById } from "../api"
import { useNavigate } from "react-router-dom"

export const Details = () => {

  const [meal, setMeal] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getMealById(id).then(data=>{
      console.log(data.meals)
      setMeal(data.meals[0])
    })
  }, [])

  return (
    <div className=' p-8'>
     <button onClick={()=>navigate(-1)} className = " bg-orange-400 p-2">Go Back</button>
        <img src={meal.strMealThumb} alt={meal.strCategory} />
        <h3 className=" p-4 text-orange-400 font-bold text-[30px]">{meal.strCategory}</h3>
        <button className=" bg-orange-400 p-2">Add To Basket</button>
    </div>
  )
}

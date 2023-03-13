import { useNavigate } from "react-router-dom"

export const MealItem = ({strMeal, strMealThumb, idMeal}) => {

  const navigate = useNavigate();

  return (
    <div className='shadow-md p-4' onClick={()=>navigate('/meal/' + idMeal)}>
        <img src={strMealThumb} alt={strMeal} />
        <h2>{strMeal}</h2>
    </div>
  )
}
  
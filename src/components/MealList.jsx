import { MealItem } from "./MealItem"


export const MealList = ({meals}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
        {
          meals.map(el=>{
            return <MealItem key={el.idMeal} {...el}/>
          })
        }
    </div>
  )
}

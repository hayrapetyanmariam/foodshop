import {CategoryItem} from './CategoryItem'

export const CategoryList = ({categories}) => {
  return (
    <div className=' grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
       {
          categories.map(el=>{
            return <CategoryItem key={el.idCategory} {...el}/>
        })
       }
    </div>  
  )
}
    
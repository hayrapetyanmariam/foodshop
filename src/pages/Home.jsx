import { useState, useEffect } from "react"
import { CategoryList } from "../components/CategoryList";
import { getAllCategories } from "../api";
import { Header } from "../components/Header";

export const Home = () => {

  const [categories, setCategories] = useState([]);
   const [filteredCategories, setfilteredCategories] = useState([]);
 

  useEffect(()=>{
    getAllCategories().then(data=>{
     // console.log(data)
      setCategories(data.categories)
    })
  })

  const search = (value)=>{
    setfilteredCategories(
      categories.filter(el =>el.strCategory.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    );
}

  return (
    <div className=' container mx-auto p-8'>
       <CategoryList categories = {filteredCategories.length ? filteredCategories : categories}/>
       <Header search={search}/>
    </div>
  )
}

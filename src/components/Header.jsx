import { NavLink as Link } from "react-router-dom"

export const Header = ({search}) => {
  return (
    <nav className=' flex justify-center bg-orange-500 gap-4 p-2 text-[32px] text-orange-300'>
      <Link to={'/'} className = " hover:text-orange-800">Home</Link>
      <Link to={'/about'} className = " hover:text-orange-800">About</Link>
      <Link to={'/contact'} className = " hover:text-orange-800">Contact</Link>
      <input type="text" placeholder="Search Here..."  className=" text-sm p-0 w-1/6 h-7 p-1 rounded-sm absolute right-12 top-5"
        onChange={(e)=>search(e.target.value)}
      />
    </nav>
  )
}

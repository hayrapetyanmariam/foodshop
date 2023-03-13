import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CategoryPage } from "./pages/CategoryPage"
import {Details} from './components/Details'


const App = () => {
  return (
      <>
      <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/category/:name" element = {<CategoryPage/>}/>
          <Route path="/meal/:id" element = {<Details/>}/>
          <Route path="*" element = {<NotFound/>} />
        </Routes>
      <Footer/>
      </>
  )
}

export default App
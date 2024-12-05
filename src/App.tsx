
import { Route,Routes } from "react-router"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Products from "./pages/Products"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App


import { Route,Routes } from "react-router"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Login from "./pages/Login"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signin/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App

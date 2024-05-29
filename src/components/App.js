import Footer from "./Footer"
import Home from "./Home"
import Header from "./Header"
import { Outlet } from "react-router-dom"
function App(){
    return (
        <>
       <Header></Header>
     {/* loading page dynamiclly for webpage relatead to url */}
     <Outlet></Outlet>
       <Footer ></Footer>
        </>
    )
}
export default App

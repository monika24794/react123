import "./style.css";
import ReactDOM from "react-dom";
import App from "./components/App";
//react routing is starting
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Form from "./components/Form";
import Componet1 from "./components/Componet1";
import Component2 from "./components/Component2";
import Errorbound from "./components/Errorbound";
import Main from "./components/Main";
var projectRoute = createBrowserRouter(
    [
        {
            path: "",
            element: <App></App>,
            children:
             [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "aboutus",
                    element: <About></About>,
                },
                {
                    path: "cart",
                    element: <Cart></Cart>,
                },
                {
                    path: "login",
                    element: <Login></Login>,
                },
                {
                    path: "form",
                    element: <Form></Form>
                },
                {
                    path: "Componet1",
                    element:<Componet1></Componet1>
                },
                {
                    path: "Component2",
                    element: <Component2 x1="100"></Component2>
                },
                {
                    path: "Errorbound",
                    element: <Errorbound></Errorbound>
                },
                {
                    path: "Main",
                    element: <Main></Main>
                },
            
            ]
        }
    ]
);
//react routing is ended
// console.log(ReactDOM)
const ans = ReactDOM.createRoot(document.getElementById("root"));
// console.log(ans);
//ans.render("hello Monika");
// //ans.render(<h1>MONIKA</h1>)
// var username="Admin"
// ans.render(<h1>MONIKA {username}</h1>);
// var  product=(
//     <>
//     {/* reactfragmenttion for similar type */}
//     <div className="col-3">
//     <h2>price 2000</h2>
//     <button>Add to cart</button>
//     </div>
//     <div className="col-3">
//     <h2>price 2000</h2>
//     <button>Add to cart</button>
//     </div>
//     </>
// )
// ans.render(product)

ans.render(
    <RouterProvider router={projectRoute}>
    </RouterProvider>
);
// routerprovider as component 



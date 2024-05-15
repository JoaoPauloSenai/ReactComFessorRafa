import { Router, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import Denuncias from "../Pages/Denuncias";
import Test from "../Pages/Test";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cadastro',
                element: <Cadastro />
            },
            {
                path: '/denuncias',
                element: <Denuncias />
            },
            {
                path: '/Test',
                element: <Test />
            },
        ]
    },
])

export default router;





import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Demo from "../pages/Demo";
import Test from "../pages/Test";
import Test1 from "../pages/Test1";
import Test2 from "../pages/Test2";
// import Test3 from "../pages/Test3";
const Test3 = lazy(() => { return import("../pages/Test3") })

let routes = [
    {
        path: "/test",
        element: <Test />,
        children: [
            {
                path: "test1",
                element: <Test1 />
            },
            {
                path: "test2",
                element: <Test2 />
            },
            {
                path: "",
                element: <Test1 />
            },
            {
                path: "test3/:name/:age",
                element: <Test3 />
            },

        ]
    },
    {
        path: "/demo",
        element: <Demo />
    },
    {
        path: "/",
        element: <Navigate to="/test" />
    }
]

export default routes;
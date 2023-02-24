import { Suspense } from "react";
import { NavLink, useRoutes } from "react-router-dom";

import routes from "./routes";


function App() {

    let routesElement = useRoutes(routes);
    return <div>
        <NavLink to="/demo" >demo</NavLink>
        <NavLink to="/test" end>test</NavLink>
        <div>
            <Suspense fallback={<h1>加载中</h1>}>
                {routesElement}
            </Suspense>
            {/* <Routes>
                <Route path="/demo" element={<Demo />} />
                <Route path="/test" element={<Test />} />
                <Route path="/" element={<Navigate to="test" />} />
            </Routes> */}


        </div>

    </div >;

}


export default App;
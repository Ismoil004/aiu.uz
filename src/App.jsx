import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./404/NotFound.jsx";

function App() {

  return (
    <div>
<Routes>
<Route path={"/"} element={<LandingPage/>}/>
    <Route path={"*"} element={<NotFound/>}/>

</Routes>
    </div>
  )
}

export default App

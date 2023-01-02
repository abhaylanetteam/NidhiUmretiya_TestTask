import Layout from "./layout";
import { AllRoute } from "./route";
import Dashboard from "./page/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = ({children}) => {
  return(
    <Routes>
        {
          AllRoute?.map(({path, component:Component, title},key)=>(
            <Route
            path={path}
            element={<Layout><Component/></Layout>}
            key={key}
          />
          ))
        }
    </Routes>
  )
}
export default App
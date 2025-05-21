import { Route, Routes } from "react-router-dom"
import ImagePage from "./layout/ImagePage"
import DashboardPage from "./pages/DashboardPage"


const App = () => {
  return (
    <Routes>
      <Route path="/:id" element={<ImagePage/>} />
      <Route path="/dashboard/:id" element={<DashboardPage/>} />
    </Routes>
  )
}

export default App
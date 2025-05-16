import { Route, Routes } from "react-router-dom"
import ImagePage from "./layout/ImagePage"


const App = () => {
  return (
    <Routes>
      <Route path="/:id" element={<ImagePage/>} />
    </Routes>
  )
}

export default App
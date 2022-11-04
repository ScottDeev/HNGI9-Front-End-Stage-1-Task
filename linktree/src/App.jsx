import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstTask from "./pages/FirstTask"
import SecondTask from "./pages/SecondTask"

function App() {

  return (
    <div className="App md:px-[80px] sm:px-[30px] px-[16px] mb-[54px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <FirstTask/>
          }/>
          <Route path="/contact" element={
            <SecondTask/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

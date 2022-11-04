import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstTask from "./pages/FirstTask"

function App() {

  return (
    <div className="App md:px-[80px] sm:px-[30px] px-[16px] mb-[54px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <FirstTask/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

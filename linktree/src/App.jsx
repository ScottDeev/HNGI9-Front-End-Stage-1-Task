import Footer from "./components/Footer"
import Links from "./components/Links"
import Profile from "./components/Profile"

function App() {

  return (
    <div className="App md:px-[80px] sm:px-[30px] px-[16px] mb-[54px]">
      <Profile/>
      <Links/>
      <Footer/>
    </div>
  )
}

export default App

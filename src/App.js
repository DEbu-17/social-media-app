import SocialApp from "./Components/SocialApp";
import PostNumber from "./Components/PostNumber";
import { Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./styles.css";
const App = () => {
  return <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<SocialApp/>}/>
          <Route path="/post" element={<PostNumber/>}/>
        </Routes>
  </div>
}

export default App;

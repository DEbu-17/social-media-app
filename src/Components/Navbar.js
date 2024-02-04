import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
      <div className="navbar">
        <p className="travel">TravelMedia.in</p>
        <div className="nav-links">
          <NavLink to="/"><img src={require('../Images/Group (1).png')}/></NavLink>
          <NavLink to="/post"><img src={require('../Images/Group (2).png')}/></NavLink>
          <NavLink to="/"><img src={require('../Images/Group (3).png')}/></NavLink>
          <NavLink to="/"><img src={require('../Images/Group (4).png')}/></NavLink>
        </div>
      </div>
    );
}
export default Navbar;
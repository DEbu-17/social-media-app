import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from "../redux/features/socialApi/socialSlice";
import { useNavigate } from "react-router-dom";
import { cardClicked } from "../redux/features/socialClick.js/socialClickSlice";
const SocialApp = () => {

const {loading,posts,error} = useSelector(state=>state.socialApi);
const dispatch = useDispatch();
 
useEffect(()=>{
    dispatch(fetchData())
},[])

const navigate = useNavigate();

function handleCard(item){
   dispatch(cardClicked(item)); 
   navigate("/post") 
}

    return (
      <div className="header">
        <h1>Social Media For Travellers</h1>
        <input type="text" placeholder="search here...." className="search" />
        <div className="card-container">
          {posts.length > 0 &&
            posts.map((item) => (
              <div className="card" onClick={() => handleCard(item)}>
                <p className="images">
                  <img src={`https://picsum.photos/200?random=${posts.id}`} />
                </p>
                <h4>Post Title</h4>
                <div className="para">
                  <p className="body">{item.body}</p>
                  <p>
                    <img src={require("../Images/Group 2934.png")} />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
}

export default SocialApp;
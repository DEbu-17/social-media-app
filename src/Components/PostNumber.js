import { useState,useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostNumber = () => {
  const navigate = useNavigate();
  let {id, title, body} = useSelector(state=>state.socialClick)
   const { loading, posts, error } = useSelector((state) => state.socialApi);
   const [info,setInfo] = useState(false)

   function userInfo(e){
      setInfo(true);
   
   }

   function handleDetails(e){
    setInfo(false);
   
   }
    return (
      <div className="post-body">
        <p className="left-arrow" onClick={()=>navigate("/")}><img src={require("../Images/Vector 12.png")}/></p>
        <h1 className="post-num">Post Number #{id}</h1>
        <div className="post-card">
          <p>
            <img src={`https://picsum.photos/200?random=${id}`} />
          </p>
          <div className="btn-section">
            <button  onClick={handleDetails}>Detail</button>
            <button onClick={userInfo}>User Info</button>
          </div>
          {body && info == false && (<p className="content">{body}</p>) || (<p className="content">post was posted by user {id}</p>)}
        </div>

        {/* more post */}

        <div className="more-post">
          <h1 className="more-post-heading">More Post</h1>
          <div className="header">
            <div className="card-container">
              {posts.length > 0 &&
                posts.map((item) => (
                  <div className="card">
                    <p className="images">
                      <img
                        src={`https://picsum.photos/200?random=${posts.id}`}
                      />
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
        </div>
      </div>
    );
}

export default PostNumber;
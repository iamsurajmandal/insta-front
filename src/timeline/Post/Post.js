import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button } from "@mui/material";
import React, {useState} from "react";
import "./Post.css";
import Slider from "./Slider/Slider"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ posts, user, likes, timestamp , setPosts }) {

  const [totalLike, setTotalLike] = useState(likes);
  const [currentLike, setLike] = useState(0);
  const handleLike = () =>{
    setLike((prevState)=>{
      if(prevState) {
        setTotalLike(totalLike - 1);
        return 0
      }
      else{
        setTotalLike(totalLike + 1);
       return 1;
      }
    })
}
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} •<span style={{color: "white", paddingLeft: "20px"}}>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        {/* <img src={postImage} alt="Post Image" /> */}
        <Slider slides={postImage}/>
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <Button onClick={handleLike}>
            <FavoriteBorderIcon className="postIcon" 
             color= {currentLike === 1 ? "error" : ""}
            />
            </Button>
            {/* <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" /> */}
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {totalLike} people.
      </div>
    </div>
  );
}

export default Post;

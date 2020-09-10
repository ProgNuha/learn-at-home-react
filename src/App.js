import React, {useState} from "react";
import "./styles.css";

const Profile = (props) => {
  const {username} = props;
  const [isFollowed, setIsFollowed] = useState(false);
  const [inputAccount, setInputAccount] = useState("");

  return (
    <>
      <input onChange={({target: {value} }) => {
        setInputAccount(value);
      }}
        placeholder="search profile"
      />
      <div>Search Result for Account: {inputAccount}</div>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow":"Follow"}
        </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>

    </>
  );
}

export default function App() {
  const username = "mufidanuha";
  return <Profile username={username}/>
}

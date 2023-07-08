import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Home() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    bio: "",
    email: "",
    followers: 0,
  });

  useEffect(() => {
    // Check if the user is authenticated (has a token)
    const token = localStorage.getItem("token");
    if (!token) {
      // User is not authenticated, redirect to the login page
      navigate('/login')
    } else {
      // Retrieve user details from localStorage
      const storedUserDetails = JSON.parse(localStorage.getItem("user-details"));
      if (storedUserDetails) {
        setUserDetails(storedUserDetails);
      }
    }
  }, []);

  return (
    <div className="container flex">
      <div className="profile-img">
        <img
          src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile-img"
        />
      </div>
      <div className="user-details flex">
        <span id="username">@{userDetails.username}</span>
        <span id="bio">{userDetails.bio}</span>
        <span id="email">{userDetails.email}</span>
        <span>Followers: {userDetails.followers}</span>
      </div>
    </div>
  );
}

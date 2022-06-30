import React from "react";
import "./NotFound.css";
import notFound from "../picutre/Image/404.gif";
const NotFound = () => {
  return (
    <div class="notFound">
      <img src={notFound} />
      <h1>Oops! Page Not Found</h1>
      <p>The page you were looking for doesn't exist anymore.</p>
      <br />
      <a href="home.html" class="notfound-button">
        Back To Store
      </a>
    </div>
  );
};

export default NotFound;

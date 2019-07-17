import React from "react";
import "./comments.css";

const Comments = props => {
  return (
    <>
      <div className="comment-container">
        <img
          src={props.props.img}
          className="responsive-image-coment"
          alt="avatar"
        />

        <div className="comment-info-container">
          <span className="main-coment-info">
            {props.props.start}{" "}
            <span className="all-items">{props.props.firtslink} </span>
            {props.props.project}{" "}
            <span className="all-items">{props.props.iteration} </span>
          </span>
          <span className="comment-time">2 days ago</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Comments;

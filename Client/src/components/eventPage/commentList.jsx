import React from "react";
import Comment from "./comment";

export default function CommentList(props) {
 
  return (
    <div className="commentList">
      <div class="fb-comments" data-href="http://localhost:3000/" data-numposts="5" data-width="100%"></div>
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}

      { 
      props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    <script async defer crossorigin="anonymous"
 src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=940881809763696&autoLogAppEvents=1" 
 nonce="q61yjWBE"></script>
    </div>

  );
}
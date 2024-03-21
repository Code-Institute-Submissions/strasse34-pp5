import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import ShowStarsInCommentList from "../../components/ShowStarsInCommentList";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  // shows comment list below each posts in PostPage
  const { profile_id, profile_image, owner, updated_at, content, stars } =
    props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <ShowStarsInCommentList value={stars} />
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
